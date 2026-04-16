"use client";

import { useState, useEffect } from "react";
import { Plus, Trash2, Search, RefreshCw, Eye, Star, Edit2 } from "lucide-react";
import Link from "next/link";
import { getAllBlogs, toggleBlogStatus, deleteBlog } from "../../../lib/adminApi";
import toast from "react-hot-toast";

type Blog = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  status: "draft" | "published";
  featured: boolean;
  views: number;
  createdAt: string;
};

function fmt(d: string) {
  return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function BlogPage() {
  const [posts, setPosts]   = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const load = async () => {
    setLoading(true);
    try {
      const data = await getAllBlogs();
      setPosts(data.blogs ?? []);
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Failed to load blogs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const handleToggle = async (id: string) => {
    try {
      const data = await toggleBlogStatus(id);
      setPosts(prev => prev.map(p => p._id === id ? { ...p, status: data.blog?.status ?? (p.status === "published" ? "draft" : "published") } : p));
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Failed.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this blog post?")) return;
    try {
      await deleteBlog(id);
      setPosts(prev => prev.filter(p => p._id !== id));
      toast.success("Post deleted.");
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Failed.");
    }
  };

  const filtered = posts.filter((p) =>
    !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase())
  );

  const publishedCount = posts.filter(p => p.status === "published").length;
  const draftCount     = posts.filter(p => p.status === "draft").length;

  return (
    <div className="space-y-5">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold" style={{ color: "var(--black)" }}>Blog</h2>
          <p className="text-sm" style={{ color: "var(--gray-text)" }}>
            {loading ? "Loading…" : `${publishedCount} published · ${draftCount} drafts`}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={load}
            className="flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-xl transition-all"
            style={{ background: "var(--primary-light)", color: "var(--primary)" }}
          >
            <RefreshCw size={14} strokeWidth={2} className={loading ? "animate-spin" : ""} />
          </button>
          <Link
            href="/dashboard/blog/new"
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl text-white hover:opacity-90"
            style={{ background: "var(--primary)" }}
          >
            <Plus size={15} strokeWidth={2.5} />
            New Post
          </Link>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl p-4" style={{ border: "1px solid var(--gray-border)" }}>
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--gray-text)" }} />
          <input
            type="text"
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none transition-all"
            style={{ border: "1px solid var(--gray-border)", background: "var(--gray-light)" }}
            onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
          />
        </div>
      </div>

      {/* Posts Grid */}
      {loading ? (
        <div className="flex items-center justify-center py-16">
          <RefreshCw size={20} className="animate-spin" style={{ color: "var(--gray-text)" }} />
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-white rounded-2xl text-center py-16 text-sm" style={{ border: "1px solid var(--gray-border)", color: "var(--gray-text)" }}>
          No blog posts yet.{" "}
          <Link href="/dashboard/blog/new" className="font-semibold underline" style={{ color: "var(--primary)" }}>
            Create the first one
          </Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((post) => (
            <div key={post._id} className="bg-white rounded-2xl p-5 flex flex-col" style={{ border: "1px solid var(--gray-border)" }}>
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: "var(--primary-light)", color: "var(--primary)" }}>
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  {post.featured && (
                    <Star size={13} fill="currentColor" style={{ color: "#F59E0B" }} />
                  )}
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                    style={
                      post.status === "published"
                        ? { background: "var(--success-light)", color: "var(--success)" }
                        : { background: "var(--warning-light)", color: "var(--warning)" }
                    }
                  >
                    {post.status === "published" ? "Live" : "Draft"}
                  </span>
                </div>
              </div>

              <p className="text-sm font-bold leading-snug flex-1 mb-3" style={{ color: "var(--black)" }}>{post.title}</p>

              <div className="flex items-center justify-between text-xs mb-3" style={{ color: "var(--gray-text)" }}>
                <span>{fmt(post.createdAt)}</span>
                {post.views > 0 && (
                  <span className="flex items-center gap-1">
                    <Eye size={11} strokeWidth={2} />
                    {post.views.toLocaleString()}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 pt-3" style={{ borderTop: "1px solid var(--gray-border)" }}>
                <Link
                  href={`/dashboard/blog/${post._id}/edit`}
                  className="flex-1 flex items-center justify-center gap-1 text-xs font-semibold py-1.5 rounded-lg transition-all hover:opacity-80"
                  style={{ background: "var(--primary-light)", color: "var(--primary)" }}
                >
                  <Edit2 size={11} />Edit
                </Link>
                <button
                  onClick={() => handleToggle(post._id)}
                  className="flex-1 text-xs font-semibold py-1.5 rounded-lg transition-all hover:opacity-80"
                  style={{ background: "var(--gray-light)", color: "var(--black)", border: "1px solid var(--gray-border)" }}
                >
                  {post.status === "published" ? "Unpublish" : "Publish"}
                </button>
                <button
                  onClick={() => handleDelete(post._id)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:opacity-80"
                  style={{ background: "var(--danger-light)", color: "var(--danger)" }}
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
