import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
    {
        name:        { type: String, required: true, trim: true },
        slug:        { type: String, required: true, unique: true, lowercase: true, trim: true },
        category:    { type: String, required: true, enum: ["Tax Services", "Tax Resolution", "Tax Planning", "Business Services", "Financial Products"] },
        cta:         { type: String, default: "" },
        description: { type: String, default: "" },
        active:      { type: Boolean, default: true },
        order:       { type: Number, default: 0 },
    },
    { timestamps: true }
);

export const Service = mongoose.model("Service", serviceSchema);
