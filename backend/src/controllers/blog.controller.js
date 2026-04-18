import { Blog } from "../models/Blog.js";



// GET PUBLISHED BLOGS — PUBLIC
export const getPublishedBlogsController = async (req, res, next) => {
    try {
        const blogs = await Blog.find({ status: "published" })
            .select("-content")
            .sort({ createdAt: -1 });
        return res.status(200).json({ success: true, blogs });
    } catch (err) {
        next(err);
    }
};



// GET FEATURED BLOGS — PUBLIC
export const getFeaturedBlogsController = async (req, res, next) => {
    try {
        const blogs = await Blog.find({ status: "published", featured: true })
            .select("-content")
            .sort({ createdAt: -1 })
            .limit(6);
        // fallback: if no featured, return latest 3
        if (blogs.length === 0) {
            const latest = await Blog.find({ status: "published" })
                .select("-content")
                .sort({ createdAt: -1 })
                .limit(3);
            return res.status(200).json({ success: true, blogs: latest, fallback: true });
        }
        return res.status(200).json({ success: true, blogs, fallback: false });
    } catch (err) {
        next(err);
    }
};



// GET SINGLE BLOG BY SLUG — PUBLIC
export const getBlogBySlugController = async (req, res, next) => {
    try {
        const blog = await Blog.findOne({ slug: req.params.slug, status: "published" });
        if (!blog) {
            const err = new Error("Blog post not found.");
            err.statusCode = 404;
            throw err;
        }
        // Increment views
        blog.views += 1;
        await blog.save();
        return res.status(200).json({ success: true, blog });
    } catch (err) {
        next(err);
    }
};



// GET ALL BLOGS — ADMIN
export const getAllBlogsController = async (req, res, next) => {
    try {
        const blogs = await Blog.find()
            .select("-content")
            .sort({ createdAt: -1 });
        return res.status(200).json({ success: true, blogs });
    } catch (err) {
        next(err);
    }
};



// GET SINGLE BLOG BY ID — ADMIN
export const getBlogByIdController = async (req, res, next) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            const err = new Error("Blog post not found.");
            err.statusCode = 404;
            throw err;
        }
        return res.status(200).json({ success: true, blog });
    } catch (err) {
        next(err);
    }
};



// CREATE BLOG — ADMIN
export const createBlogController = async (req, res, next) => {
    try {
        const { title, slug, category, coverImage, content, metaTitle, metaDescription, tags, status, featured } = req.body;

        if (!title?.trim() || !slug?.trim()) {
            const err = new Error("Title and slug are required.");
            err.statusCode = 400;
            throw err;
        }

        const existing = await Blog.findOne({ slug: slug.toLowerCase() });
        if (existing) {
            const err = new Error("A blog post with this slug already exists.");
            err.statusCode = 409;
            throw err;
        }

        const blog = await Blog.create({
            title, slug, category, coverImage, content,
            metaTitle, metaDescription,
            tags: Array.isArray(tags) ? tags : [],
            status: status || "draft",
            featured: featured || false,
            author: "Admin",
        });

        return res.status(201).json({ success: true, blog });
    } catch (err) {
        next(err);
    }
};



// UPDATE BLOG — ADMIN
export const updateBlogController = async (req, res, next) => {
    try {
        const { title, slug, category, coverImage, content, metaTitle, metaDescription, tags, status, featured } = req.body;

        const update = {};
        if (title      !== undefined) update.title      = title;
        if (slug       !== undefined) update.slug       = slug.toLowerCase();
        if (category   !== undefined) update.category   = category;
        if (coverImage !== undefined) update.coverImage = coverImage;
        if (content    !== undefined) update.content    = content;
        if (metaTitle  !== undefined) update.metaTitle  = metaTitle;
        if (metaDescription !== undefined) update.metaDescription = metaDescription;
        if (tags       !== undefined) update.tags       = Array.isArray(tags) ? tags : [];
        if (status     !== undefined) update.status     = status;
        if (featured   !== undefined) update.featured   = featured;

        const blog = await Blog.findByIdAndUpdate(req.params.id, update, { new: true });
        if (!blog) {
            const err = new Error("Blog post not found.");
            err.statusCode = 404;
            throw err;
        }
        return res.status(200).json({ success: true, blog });
    } catch (err) {
        next(err);
    }
};



// TOGGLE BLOG STATUS — ADMIN
export const toggleBlogStatusController = async (req, res, next) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            const err = new Error("Blog post not found.");
            err.statusCode = 404;
            throw err;
        }
        blog.status = blog.status === "published" ? "draft" : "published";
        await blog.save();
        return res.status(200).json({ success: true, blog });
    } catch (err) {
        next(err);
    }
};



// DELETE BLOG — ADMIN
export const deleteBlogController = async (req, res, next) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);
        if (!blog) {
            const err = new Error("Blog post not found.");
            err.statusCode = 404;
            throw err;
        }
        return res.status(200).json({ success: true, message: "Blog post deleted." });
    } catch (err) {
        next(err);
    }
};
