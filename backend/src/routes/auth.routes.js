import express from "express";
import {
    registerController,
    verifyOtpController,
    resendOtpController,
    loginController,
    logoutController,
    refreshTokenController,
    updateProfileController,
    uploadAvatarController,
    deleteAccountController,
    forgotPasswordController,
    resetPasswordController,
    getMeController,
} from "../controllers/auth.controller.js";
import { authLimiter, otpLimiter } from "../middlewares/rateLimiter.middleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { upload } from "../config/multer.js";



export const authRoutes = express.Router();



// PUBLIC ROUTES
authRoutes.post("/register", authLimiter, registerController);
authRoutes.post("/verify-otp", otpLimiter, verifyOtpController);
authRoutes.post("/resend-otp", authLimiter, resendOtpController);
authRoutes.post("/login", authLimiter, loginController);
authRoutes.post("/logout", logoutController);
authRoutes.post("/refresh-token", refreshTokenController);

authRoutes.post("/forgot-password", authLimiter, forgotPasswordController);
authRoutes.post("/reset-password", authLimiter, resetPasswordController);



// PROTECTED ROUTES
authRoutes.get("/me", authMiddleware, getMeController);
authRoutes.patch("/update-profile", authMiddleware, updateProfileController);
authRoutes.patch("/upload-avatar", authMiddleware, upload.single("avatar"), uploadAvatarController);
authRoutes.delete("/delete-account", authMiddleware, deleteAccountController);
