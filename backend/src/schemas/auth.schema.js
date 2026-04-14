import { z } from "zod";



// REGISTER SCHEMA
export const registerSchema = z.object({
    name: z.string().trim().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().trim().regex(/^\+?[\d\s\-()]{7,15}$/, "Invalid phone number").optional(),
    password: z.string().min(6, "Password must be at least 6 characters"),
});



// LOGIN SCHEMA
export const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});



// OTP SCHEMA
export const otpSchema = z.object({
    email: z.string().email("Invalid email address"),
    otp: z.string().trim().regex(/^\d{6}$/, "OTP must be a 6-digit number"),
});


// RESET PASSWORD SCHEMA
export const resetPasswordSchema = z.object({
    email: z.string().email("Invalid email address"),
    otp: z.string().trim().regex(/^\d{6}$/, "OTP must be a 6-digit number"),
    newPassword: z.string().min(6, "Password must be at least 6 characters"),
});


// PROFILE UPDATE SCHEMA
export const profileUpdateSchema = z.object({
    name: z.string().trim().min(1, "Name is required").optional(),
    phone: z.string().trim().regex(/^\+?[\d\s\-()]{7,15}$/, "Invalid phone number").optional(),
});
