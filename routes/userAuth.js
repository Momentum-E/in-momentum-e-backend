import express from "express";

import {
  signup,
  confirmSignup,
  resendConfirmationCode,
  initiateAuth,
  refreshAuth,
  globalSignOut,
  getUser,
  forgotPassword,
  confirmForgotPassword,
  changePassword,
  deleteUser,
} from "../controllers/userAuthController.js";

import authenticateToken from "../middlewares/authenticateToken.js";

const router = express.Router();

// Register Route
router.post("/sign-up", signup);
// Confirm Sign Up Route
// Confirm Sign Up Route
router.post("/confirm-sign-up", confirmSignup);

// Resend Confirmation Code Route
router.post("/resend-confirmation-code", resendConfirmationCode);
// cognito login
// Initiate Auth Route
router.post("/initiate-auth", initiateAuth);

router.post("/refresh-auth", refreshAuth);
// log out/sign out
// Global Sign Out Route
router.post("/global-sign-out", authenticateToken, globalSignOut);

// Get User Route
router.post("/get-user", authenticateToken, getUser);

// Forgot Password Route
router.post("/forgot-password", forgotPassword);

// Confirm Forgot Password Route
router.post("/confirm-forgot-password", confirmForgotPassword);

// Change Password Route
router.post("/change-password", authenticateToken, changePassword);

// Delete User Route
router.post("/delete-user", authenticateToken, deleteUser);

export default router;
