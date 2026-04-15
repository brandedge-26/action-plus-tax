import mongoose from "mongoose";

const consultationSchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true, trim: true },
        email:    { type: String, required: true, trim: true, lowercase: true },
        phone:    { type: String, required: true, trim: true },
        service:  { type: String, required: true, trim: true },
        date:     { type: String, required: true },
        time:     { type: String, required: true },
        notes:    { type: String, default: "", trim: true },
        status: {
            type: String,
            enum: ["pending", "confirmed", "scheduled", "cancelled", "completed"],
            default: "pending",
        },
    },
    { timestamps: true }
);

export const Consultation = mongoose.models.Consultation || mongoose.model("Consultation", consultationSchema);
