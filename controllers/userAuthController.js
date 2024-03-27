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
  RespondToAuthChallengeCommand,
} from "@aws-sdk/client-cognito-identity-provider";

import { calculateSecretHash } from "../utils/secretHashCalculate.js";

import User from "../models/user.js";

configDotenv();

const REGION = process.env.REGION;
const CLIENT_SECRET = process.env.COGNITO_CLIENT_SECRET;
const CLIENT_ID = process.env.COGNITO_CLIENT_ID;

const cognitoClient = new CognitoIdentityProviderClient({
  region: REGION,
});

export const signup = async (req, res) => {
  const { username, password } = req.body;

  // console.log("sign-up called");
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
};

export const confirmSignup = async (req, res) => {
  const { confirmationCode, username, name } = req.body;
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
    const existingUser = await User.findOne({ email: username });

    // If the user already exists, update their information
    if (existingUser) {
      await User.findOneAndUpdate(
        { email: username },
        { name: name, vehicles: [] } // Assuming you only update name and reset vehicles
      );
    } else {
      // If the user doesn't exist, create a new user in the database
      await User.create({
        name: name,
        email: username,
        vehicles: [],
        profilePictureUrl: "",
      });
    }

    return res.status(200).json({ message: "Confirmation successful" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message || "Confirmation failed" });
  }
};

export const resendConfirmationCode = async (req, res) => {
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
};

export const respondToNewPasswordChallenge = async (
  username,
  newPassword,
  session
) => {
  const secret = calculateSecretHash(username, CLIENT_ID, CLIENT_SECRET);
  const respondToAuthChallengeCommand = new RespondToAuthChallengeCommand({
    ChallengeName: "NEW_PASSWORD_REQUIRED",
    ClientId: CLIENT_ID,
    ChallengeResponses: {
      NEW_PASSWORD: newPassword,
      USERNAME: username,
      SECRET_HASH: secret,
    },
    Session: session,
  });

  try {
    const response = await cognitoClient.send(respondToAuthChallengeCommand);
    // Handle the response, such as extracting tokens if successful
    return response;
  } catch (error) {
    // Handle any errors
    console.error("Error responding to new password challenge:", error);
    throw error;
  }
};

export const initiateAuth = async (req, res) => {
  const { username, password } = req.body;
  const secret = calculateSecretHash(username, CLIENT_ID, CLIENT_SECRET);
  // console.log(secret);
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
    if (authResult.ChallengeName == "NEW_PASSWORD_REQUIRED") {
      const result = await respondToNewPasswordChallenge(
        username,
        "Demo@1234",
        authResult.Session
      );

      // Check if the user already exists in the database
      const existingUser = await User.findOne({ email: username });

      // If the user already exists, update their information
      if (existingUser) {
        await User.findOneAndUpdate(
          { email: username },
          { name: "Update Name", vehicles: [] } // Assuming you only update name and reset vehicles
        );
      } else {
        // If the user doesn't exist, create a new user in the database
        await User.create({
          name: "Update Name",
          email: username,
          vehicles: [],
          profilePictureUrl: "",
        });
      }

      // console.log("pass challenge result", result);
      res.cookie("accessToken", result.AuthenticationResult.AccessToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });
      res.cookie("idToken", authresultResult.AuthenticationResult.IdToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });
      res.cookie("refreshToken", result.AuthenticationResult.RefreshToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });

      // Respond with a success status
      res.status(200).json({ success: true });
    } else {
      // console.log("------------");
      // Set HttpOnly cookies for tokens
      res.cookie("accessToken", authResult.AuthenticationResult.AccessToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });
      res.cookie("idToken", authResult.AuthenticationResult.IdToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });
      res.cookie("refreshToken", authResult.AuthenticationResult.RefreshToken, {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });

      // Respond with a success status
      res.status(200).json({ success: true });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message || "Authentication failed" });
  }
};

export const refreshAuth = async (req, res) => {
  const { userId } = req.body;
  // console.log("ref", userId);

  // Extract refreshToken from cookies
  const refreshToken = req.cookies.refreshToken;
  // console.log(refreshToken);

  // Calculate secret hash
  const secretHash = calculateSecretHash(userId, CLIENT_ID, CLIENT_SECRET);
  // console.log(secretHash);
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
      sameSite: "none",
      secure: true,
    });
    res.cookie("idToken", authResult.AuthenticationResult.IdToken, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
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
};

export const globalSignOut = async (req, res) => {
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
};

export const getUser = async (req, res) => {
  const accessToken = req.cookies.accessToken;

  const getUserCommand = new GetUserCommand({
    AccessToken: accessToken,
  });

  try {
    const result = await cognitoClient.send(getUserCommand);
    // Extract user attributes and metadata from the result
    const email = result.UserAttributes[0].Value;
    const userId = result.Username;

    // Find the user in the database
    const existingUser = await User.findOne({ email: email });

    let name = "";
    if (existingUser) {
      name = existingUser.name;
    }

    return res.status(200).json({ email, userId, name });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message || "Failed to get user information" });
  }
};

export const forgotPassword = async (req, res) => {
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
    // console.log(response);
    return res
      .status(200)
      .json({ message: "Forgot password request initiated successfully" });
  } catch (err) {
    return res.status(500).json({
      error: err.message || "Failed to initiate forgot password request",
    });
  }
};

export const confirmForgotPassword = async (req, res) => {
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
};

export const changePassword = async (req, res) => {
  const { previousPassword, proposedPassword, username } = req.body;
  // console.log(previousPassword, proposedPassword, username);

  // Get the access token from cookies
  const accessToken = req.cookies.accessToken;
  // console.log(!!accessToken);

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
};

export const deleteUser = async (req, res) => {
  const { username } = req.body;
  const accessToken = req.cookies.accessToken;

  const secretHash = calculateSecretHash(username, CLIENT_ID, CLIENT_SECRET);

  const deleteUserCommand = new DeleteUserCommand({
    AccessToken: accessToken,
  });

  try {
    // Delete the user from Cognito
    await cognitoClient.send(deleteUserCommand);

    // Delete the user from the MongoDB database
    await User.findOneAndDelete({ email: username });

    return res
      .status(200)
      .json({ message: "User profile deleted successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ error: err.message || "Failed to delete user profile" });
  }
};
