import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        title:           { type: String, required: true, trim: true },
        slug:            { type: String, required: true, unique: true, lowercase: true, trim: true },
        category:        { type: String, required: true, default: "Tax Tips" },
        coverImage:      { type: String, default: null },
        content:         { type: String, default: "" },  // HTML from TipTap
        metaTitle:       { type: String, default: "" },
        metaDescription: { type: String, default: "" },
        tags:            [{ type: String }],
        status:          { type: String, enum: ["draft", "published"], default: "draft" },
        featured:        { type: Boolean, default: false },
        views:           { type: Number, default: 0 },
        author:          { type: String, default: "Admin" },
    },
    { timestamps: true }
);

export const Blog = mongoose.model("Blog", blogSchema);
