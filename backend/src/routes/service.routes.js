import express from "express";
import {
    getActiveServicesController,
    getAllServicesController,
    createServiceController,
    updateServiceController,
    toggleServiceController,
    deleteServiceController,
    seedServicesController,
} from "../controllers/service.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";

export const serviceRoutes = express.Router();

// PUBLIC — only active services
serviceRoutes.get("/", getActiveServicesController);

// ADMIN ONLY
serviceRoutes.get("/all",           authMiddleware, adminMiddleware, getAllServicesController);
serviceRoutes.post("/seed",         authMiddleware, adminMiddleware, seedServicesController);
serviceRoutes.post("/",             authMiddleware, adminMiddleware, createServiceController);
serviceRoutes.patch("/:id",         authMiddleware, adminMiddleware, updateServiceController);
serviceRoutes.patch("/:id/toggle",  authMiddleware, adminMiddleware, toggleServiceController);
serviceRoutes.delete("/:id",        authMiddleware, adminMiddleware, deleteServiceController);
