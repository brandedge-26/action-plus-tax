import express from "express";
import {
    createConsultationController,
    getConsultationsController,
    updateConsultationStatusController,
    getUsersController,
} from "../controllers/consultation.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";

export const consultationRoutes = express.Router();

// PUBLIC
consultationRoutes.post("/", createConsultationController);

// ADMIN ONLY
consultationRoutes.get("/",            authMiddleware, adminMiddleware, getConsultationsController);
consultationRoutes.patch("/:id/status", authMiddleware, adminMiddleware, updateConsultationStatusController);

// ADMIN — get all users
consultationRoutes.get("/admin/users", authMiddleware, adminMiddleware, getUsersController);
