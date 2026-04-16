import express from "express";
import {
    createContactController,
    getContactsController,
    getContactByIdController,
    updateContactStatusController,
    deleteContactController,
} from "../controllers/contact.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";

export const contactRoutes = express.Router();

// PUBLIC
contactRoutes.post("/", createContactController);

// ADMIN ONLY
contactRoutes.get("/",         authMiddleware, adminMiddleware, getContactsController);
contactRoutes.get("/:id",      authMiddleware, adminMiddleware, getContactByIdController);
contactRoutes.patch("/:id/status", authMiddleware, adminMiddleware, updateContactStatusController);
contactRoutes.delete("/:id",   authMiddleware, adminMiddleware, deleteContactController);
