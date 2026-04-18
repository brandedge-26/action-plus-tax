import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary.js";

// Avatar uploads
const avatarStorage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "action-plus-tax/avatars",
        allowed_formats: ["jpg", "jpeg", "png", "webp"],
        transformation: [{ width: 400, height: 400, crop: "fill", gravity: "face" }],
    },
});

export const upload = multer({
    storage: avatarStorage,
    limits: { fileSize: 5 * 1024 * 1024 },
});

// Contact attachment uploads (PDF, JPG, PNG)
const attachmentStorage = new CloudinaryStorage({
    cloudinary,
    params: async (req, file) => ({
        folder: "action-plus-tax/contact-attachments",
        // PDFs must be "raw" so Cloudinary serves them as downloadable files
        // Images use "image" so they render in the browser
        resource_type: file.mimetype === "application/pdf" ? "raw" : "image",
        allowed_formats: ["pdf", "jpg", "jpeg", "png"],
    }),
});

export const uploadAttachment = multer({
    storage: attachmentStorage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max
});