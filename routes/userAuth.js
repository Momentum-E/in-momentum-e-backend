import express from "express";
import { config as configDotenv } from "dotenv";

import {
  CognitoIdentityProviderClient,
  SignUpCommand,
  ConfirmSignUpCommand,
  ResendConfirmationCodeCommand,
  InitiateAuthCommand,
  GlobalSignOutCommand,
  GetUserCommand,
  ForgotPasswordCommand,
  ConfirmForgotPasswordCommand,
  ChangePasswordCommand,
  DeleteUserCommand,
} from "@aws-sdk/client-cognito-identity-provider";

import authenticateToken from "../middlewares/authenticateToken.js";

import { calculateSecretHash } from "../utils/secretHashCalculate.js";

import users from "../DB/userDB.js";

import fs from "fs";

function saveUsersToFile() {
  fs.writeFile(
    "./DB/userDB.js",
    `const users = ${JSON.stringify(users, null, 2)}; export default users;`,
    (err) => {
      if (err) {
        console.error("Error writing users to file:", err);
      } else {
        console.log("Users saved to file successfully");
      }
    }
  );
}

const router = express.Router();
configDotenv();

const REGION = process.env.REGION;
const CLIENT_SECRET = process.env.COGNITO_CLIENT_SECRET;
const CLIENT_ID = process.env.COGNITO_CLIENT_ID;

const cognitoClient = new CognitoIdentityProviderClient({
  region: REGION,
});

// Register Route
router.post("/sign-up", async (req, res) => {
  const { username, password } = req.body;

  console.log("sign-up called");
  const secretHash = calculateSecretHash(username, CLIENT_ID, CLIENT_SECRET);

  const signUpCommand = new SignUpCommand({
    ClientId: CLIENT_ID,
    Username: username,
    Password: password,
    SecretHash: secretHash,
    UserAttributes: [],
    ValidationData: [],
  });

  try {
    await cognitoClient.send(signUpCommand);
    return res.status(200).json({ message: "Registration successful" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message || "Registration failed" });
  }
});

// Confirm Sign Up Route
// Confirm Sign Up Route
router.post("/confirm-sign-up", async (req, res) => {
  const { confirmationCode, username } = req.body;
  const secret = calculateSecretHash(username, CLIENT_ID, CLIENT_SECRET);

  const confirmSignUpCommand = new ConfirmSignUpCommand({
    ClientId: CLIENT_ID,
    ConfirmationCode: confirmationCode,
    Username: username,
    SecretHash: secret,
  });

  try {
    await cognitoClient.send(confirmSignUpCommand);

    // Check if the user already exists in the database
    const existingUserIndex = users.findIndex(
      (user) => user.email === username
    );

    // If the user already exists, update their information
    if (existingUserIndex !== -1) {
      users[existingUserIndex] = { email: username, vehicles: [] };
    } else {
      // If the user doesn't exist, add them to the database
      users.push({ email: username, vehicles: [] });
    }

    // Save the updated user database to file
    saveUsersToFile();

    return res.status(200).json({ message: "Confirmation successful" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message || "Confirmation failed" });
  }
});

// Resend Confirmation Code Route
router.post("/resend-confirmation-code", async (req, res) => {
  const { username } = req.body;

  // Calculate secret hash
  const secretHash = calculateSecretHash(username, CLIENT_ID, CLIENT_SECRET);

  const resendConfirmationCodeCommand = new ResendConfirmationCodeCommand({
    ClientId: CLIENT_ID,
    Username: username,
    SecretHash: secretHash,
  });

  try {
    await cognitoClient.send(resendConfirmationCodeCommand);
    return res
      .status(200)
      .json({ message: "Confirmation code resent successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message || "Failed to resend confirmation code" });
  }
});

// cognito login
// Initiate Auth Route
router.post("/initiate-auth", async (req, res) => {
  const { username, password } = req.body;
  const secret = calculateSecretHash(username, CLIENT_ID, CLIENT_SECRET);
  console.log(secret);
  const initiateAuthCommand = new InitiateAuthCommand({
    AuthFlow: "USER_PASSWORD_AUTH", // Specify the authentication flow
    ClientId: CLIENT_ID,
    AuthParameters: {
      USERNAME: username,
      PASSWORD: password,
      SECRET_HASH: secret,
    },
  });

  try {
    const authResult = await cognitoClient.send(initiateAuthCommand);
    // console.log("auth result", authResult);
    // console.log("------------")
    // Set HttpOnly cookies for tokens
    res.cookie("accessToken", authResult.AuthenticationResult.AccessToken, {
      httpOnly: true,
    });
    res.cookie("idToken", authResult.AuthenticationResult.IdToken, {
      httpOnly: true,
    });
    res.cookie("refreshToken", authResult.AuthenticationResult.RefreshToken, {
      httpOnly: true,
    });

    // Respond with a success status
    res.status(200).json({ success: true });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message || "Authentication failed" });
  }
});

router.post("/refresh-auth", async (req, res) => {
  const { userId } = req.body;
  console.log("ref", userId);

  // Extract refreshToken from cookies
  const refreshToken = req.cookies.refreshToken;
  console.log(refreshToken);

  // Calculate secret hash
  const secretHash = calculateSecretHash(userId, CLIENT_ID, CLIENT_SECRET);
  console.log(secretHash);
  const initiateAuthCommand = new InitiateAuthCommand({
    AuthFlow: "REFRESH_TOKEN_AUTH",
    ClientId: CLIENT_ID,
    AuthParameters: {
      REFRESH_TOKEN: refreshToken,
      SECRET_HASH: secretHash,
    },
  });

  try {
    const authResult = await cognitoClient.send(initiateAuthCommand);

    // Assuming you want to store the new tokens in cookies for subsequent requests
    res.cookie("accessToken", authResult.AuthenticationResult.AccessToken, {
      httpOnly: true,
    });
    res.cookie("idToken", authResult.AuthenticationResult.IdToken, {
      httpOnly: true,
    });
    // res.cookie("refreshToken", authResult.AuthenticationResult.RefreshToken, {
    //   httpOnly: true,
    // });

    return res.status(200).json({
      accessToken: authResult.AuthenticationResult.AccessToken,
      idToken: authResult.AuthenticationResult.IdToken,
      refreshToken: authResult.AuthenticationResult.RefreshToken,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message || "Authentication failed" });
  }
});

// log out/sign out
// Global Sign Out Route
router.post("/global-sign-out", authenticateToken, async (req, res) => {
  // Retrieve the access token from the cookie
  const accessToken = req.cookies.accessToken;
  // console.log(accessToken);

  const globalSignOutCommand = new GlobalSignOutCommand({
    AccessToken: accessToken,
    ClientId: CLIENT_ID,
  });

  try {
    await cognitoClient.send(globalSignOutCommand);
    // Clear the access token cookie after global sign-out
    res.clearCookie("accessToken");
    res.clearCookie("idToken");
    res.clearCookie("refreshToken");
    return res.status(200).json({ message: "Global sign-out successful" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message || "Global sign-out failed" });
  }
});

// Get User Route
// router.post("/get-user", authenticateToken, async (req, res) => {
router.post("/get-user", async (req, res) => {
  const accessToken = req.cookies.accessToken;

  const getUserCommand = new GetUserCommand({
    AccessToken: accessToken,
  });

  try {
    const result = await cognitoClient.send(getUserCommand);
    // Extract user attributes and metadata from the result
    // console.log("result:", result);
    const email = result.UserAttributes[0].Value;
    const userId = result.Username;
    // console.log("getuser", res);

    return res.status(200).json({ email, userId });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message || "Failed to get user information" });
  }
});

// Forgot Password Route
router.post("/forgot-password", async (req, res) => {
  const { username } = req.body;

  // Calculate secret hash
  const secretHash = calculateSecretHash(username, CLIENT_ID, CLIENT_SECRET);

  const forgotPasswordCommand = new ForgotPasswordCommand({
    ClientId: CLIENT_ID,
    Username: username,
    SecretHash: secretHash,
  });

  try {
    const response = await cognitoClient.send(forgotPasswordCommand);
    console.log(response);
    return res
      .status(200)
      .json({ message: "Forgot password request initiated successfully" });
  } catch (err) {
    return res.status(500).json({
      error: err.message || "Failed to initiate forgot password request",
    });
  }
});

// Confirm Forgot Password Route
router.post("/confirm-forgot-password", async (req, res) => {
  const { confirmationCode, newPassword, username } = req.body;

  // Calculate secret hash
  const secretHash = calculateSecretHash(username, CLIENT_ID, CLIENT_SECRET);

  const confirmForgotPasswordCommand = new ConfirmForgotPasswordCommand({
    ClientId: CLIENT_ID,
    ConfirmationCode: confirmationCode,
    Password: newPassword,
    Username: username,
    SecretHash: secretHash,
  });

  try {
    await cognitoClient.send(confirmForgotPasswordCommand);
    return res
      .status(200)
      .json({ message: "Password reset confirmed successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message || "Failed to confirm password reset" });
  }
});

// Change Password Route
router.post("/change-password", authenticateToken, async (req, res) => {
  const { previousPassword, proposedPassword, username } = req.body;
  console.log(previousPassword, proposedPassword, username);

  // Get the access token from cookies
  const accessToken = req.cookies.accessToken;
  console.log(!!accessToken);

  try {
    // Calculate secret hash
    const secretHash = calculateSecretHash(username, CLIENT_ID, CLIENT_SECRET);

    // Create a ChangePasswordCommand instance
    const changePasswordCommand = new ChangePasswordCommand({
      AccessToken: accessToken,
      PreviousPassword: previousPassword,
      ProposedPassword: proposedPassword,
    });

    // Send the change password command to the cognito client
    await cognitoClient.send(changePasswordCommand);

    return res.status(200).json({ message: "Password changed successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message || "Failed to change password" });
  }
});

// Delete User Route
router.post("/delete-user", authenticateToken, async (req, res) => {
  const { username } = req.body;

  const accessToken = req.cookies.accessToken;

  // Calculate secret hash
  const secretHash = calculateSecretHash(username, CLIENT_ID, CLIENT_SECRET);

  const deleteUserCommand = new DeleteUserCommand({
    AccessToken: accessToken,
  });

  try {
    // Delete the user from Cognito
    await cognitoClient.send(deleteUserCommand);

    // Remove the user from the local database
    const index = users.findIndex((user) => user.email === username);
    if (index !== -1) {
      users.splice(index, 1);
      saveUsersToFile(); // Save the updated user database to file
    }

    return res
      .status(200)
      .json({ message: "User profile deleted successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message || "Failed to delete user profile" });
  }
});

export default router;
