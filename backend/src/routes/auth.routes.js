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
    changePasswordController,
} from "../controllers/auth.controller.js";
import { authLimiter, otpLimiter } from "../middlewares/rateLimiter.middleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { upload } from "../config/multer.js";
import passport from "passport";
import { googleAuthSuccess, googleAuthError } from "../middlewares/passport.middleware.js";



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
authRoutes.patch("/change-password", authMiddleware, changePasswordController);
authRoutes.patch("/upload-avatar", authMiddleware, upload.single("avatar"), uploadAvatarController);
authRoutes.delete("/delete-account", authMiddleware, deleteAccountController);



// GOOGLE OAUTH ROUTES
authRoutes.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
        prompt: "select_account"
    })
);

authRoutes.get(
    "/google/callback",
    passport.authenticate("google", { session: false, failureRedirect: "/api/auth/google/error" }),
    googleAuthSuccess
);

authRoutes.get("/google/error", (req, res, next) => {
    const err = new Error("Google authentication failed. Please try again.");
    googleAuthError(err, req, res, next);
});
