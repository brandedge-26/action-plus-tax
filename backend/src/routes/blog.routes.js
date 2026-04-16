import express from "express";
import {
    getPublishedBlogsController,
    getBlogBySlugController,
    getAllBlogsController,
    getBlogByIdController,
    createBlogController,
    updateBlogController,
    toggleBlogStatusController,
    deleteBlogController,
} from "../controllers/blog.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";

export const blogRoutes = express.Router();

// PUBLIC
blogRoutes.get("/",          getPublishedBlogsController);
blogRoutes.get("/slug/:slug", getBlogBySlugController);

// ADMIN ONLY
blogRoutes.get("/all",            authMiddleware, adminMiddleware, getAllBlogsController);
blogRoutes.get("/admin/:id",      authMiddleware, adminMiddleware, getBlogByIdController);
blogRoutes.post("/",              authMiddleware, adminMiddleware, createBlogController);
blogRoutes.put("/:id",            authMiddleware, adminMiddleware, updateBlogController);
blogRoutes.patch("/:id/toggle",   authMiddleware, adminMiddleware, toggleBlogStatusController);
blogRoutes.delete("/:id",         authMiddleware, adminMiddleware, deleteBlogController);
