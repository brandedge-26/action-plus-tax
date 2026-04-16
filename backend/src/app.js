import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { globalErrorHandler } from "./middlewares/error.middleware.js";
import { generalLimiter } from "./middlewares/rateLimiter.middleware.js";
import { authRoutes } from "./routes/auth.routes.js";
import { consultationRoutes } from "./routes/consultation.routes.js";
import { contactRoutes } from "./routes/contact.routes.js";
import { serviceRoutes } from "./routes/service.routes.js";
import { blogRoutes } from "./routes/blog.routes.js";
import { uploadRoutes } from "./routes/upload.routes.js";



// DB CONNECTION
await connectDB();



// EXPRESS APP
export const app = express();




// COOKIE PARSING
app.use(cookieParser());



// PARSING INCOMING DATA
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




// CORS CONFIGURATION
app.use(cors({
    origin: true, // development mein sab allow — production mein specific origin set krna
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));




// GENERAL RATE LIMITER
app.use(generalLimiter);




// API HEALTH
app.get("/api/health", (req, res) => {
    res.json({ success: true, message: "API Working..." });
});




// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/consultations", consultationRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/upload", uploadRoutes);




// GLOBAL ERROR HANDLER
app.use(globalErrorHandler);
