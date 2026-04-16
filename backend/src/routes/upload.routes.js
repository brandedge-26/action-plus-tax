import { Router } from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/admin.middleware.js";

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "action-plus-tax/blogs",
        allowed_formats: ["jpg", "jpeg", "png", "webp"],
        transformation: [{ width: 1200, height: 630, crop: "fill" }],
    },
});

const upload = multer({ storage, limits: { fileSize: 8 * 1024 * 1024 } });

export const uploadRoutes = Router();

uploadRoutes.post("/cover", authMiddleware, adminMiddleware, upload.single("image"), (req, res, next) => {
    try {
        if (!req.file) {
            const err = new Error("No file uploaded.");
            err.statusCode = 400;
            throw err;
        }
        return res.status(200).json({ success: true, url: req.file.path });
    } catch (err) {
        next(err);
    }
});
