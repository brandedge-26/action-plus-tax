import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: true,
        },
        phone: {
            type: String,
            trim: true,
            default: null,
        },
        password: {
            type: String,
            default: null,
            minlength: 6,
        },
        provider: {
            type: String,
            enum: ["local", "google"],
            default: "local",
        },
        providerId: {
            type: String,
            default: null,
        },
        isEmailVerified: {
            type: Boolean,
            default: false,
        },
        profilePicture: {
            type: String,
            default: null,
        },
        role: {
            type: String,
            enum: ["client", "admin"],
            default: "client",
        },
    },
    { timestamps: true }
);



export const User = mongoose.models.User || mongoose.model("User", userSchema);
