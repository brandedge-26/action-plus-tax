"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, BookOpen } from "lucide-react";

const API = "http://localhost:5510";

type Blog = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  coverImage?: string;
  createdAt: string;
};

function fmt(d: string) {
  return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function HomeBlogSection() {
  const [blogs, setBlogs]     = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/api/blogs/featured`)
      .then(r => r.json())
      .then(d => setBlogs(d.blogs ?? []))
      .catch(() => setBlogs([]))
      .finally(() => setLoading(false));
  }, []);

  // Don't render the section at all if no blogs and not loading
  if (!loading && blogs.length === 0) return null;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#01567E" }}>
              From Our Tax Pros
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight" style={{ color: "#041E42" }}>
              Latest Tax Tips &{" "}
              <span style={{ color: "#01567E" }}>Insights</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold px-5 py-2.5 rounded-xl border-2 transition-all shrink-0"
            style={{ borderColor: "#01567E", color: "#01567E" }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#01567E";
              (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "";
              (e.currentTarget as HTMLAnchorElement).style.color = "#01567E";
            }}
          >
            View All Blogs <ArrowRight size={15} strokeWidth={2.5} />
          </Link>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-2xl overflow-hidden animate-pulse border" style={{ borderColor: "var(--gray-border)" }}>
                <div className="h-52" style={{ background: "var(--gray-border)" }} />
                <div className="p-5 space-y-3">
                  <div className="h-3 rounded w-24" style={{ background: "var(--gray-border)" }} />
                  <div className="h-5 rounded w-full" style={{ background: "var(--gray-border)" }} />
                  <div className="h-4 rounded w-32" style={{ background: "var(--gray-border)" }} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.slice(0, 3).map((blog, i) => (
              <Link
                key={blog._id}
                href={`/blog/${blog.slug}`}
                className="group block rounded-2xl overflow-hidden border transition-all duration-300"
                style={{ borderColor: "var(--gray-border)" }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#01567E";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(1,86,126,0.12)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--gray-border)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "";
                }}
              >
                {/* Cover image */}
                <div className="relative h-52 overflow-hidden" style={{ background: "#EBF3FF" }}>
                  {blog.coverImage ? (
                    <Image
                      src={blog.coverImage}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <BookOpen size={40} style={{ color: "#01567E", opacity: 0.3 }} />
                    </div>
                  )}
                  {/* Featured badge on first card */}
                  {i === 0 && (
                    <span
                      className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                      style={{ background: "#FFF200", color: "#0A0A0A" }}
                    >
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <span
                    className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3"
                    style={{ background: "#EBF3FF", color: "#01567E" }}
                  >
                    {blog.category}
                  </span>
                  <h3
                    className="text-base font-bold leading-snug line-clamp-2 mb-3 transition-colors duration-200"
                    style={{ color: "#041E42" }}
                  >
                    {blog.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--gray-text)" }}>
                      <Calendar size={12} strokeWidth={2} />
                      {fmt(blog.createdAt)}
                    </div>
                    <span className="flex items-center gap-1 text-xs font-bold" style={{ color: "#01567E" }}>
                      Read More <ArrowRight size={12} strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
