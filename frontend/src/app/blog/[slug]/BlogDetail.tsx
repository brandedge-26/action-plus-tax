"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Eye, BookOpen } from "lucide-react";
import HeaderTest from "@/components/HeaderTest";
import SiteFooter from "@/components/SiteFooter";

const API     = "http://localhost:5510";
const PRIMARY = "#01567E";

type Blog = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  coverImage?: string;
  content: string;
  tags?: string[];
  views: number;
  createdAt: string;
};

function fmt(d: string) {
  return new Date(d).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function BlogDetail({ slug }: { slug: string }) {
  const [blog, setBlog]     = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`${API}/api/blogs/slug/${slug}`)
      .then(r => r.json())
      .then(data => {
        if (data.success && data.blog) setBlog(data.blog);
        else setNotFound(true);
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [slug]);

  return (
    <>
      <HeaderTest />
      <main className="min-h-screen" style={{ background: "var(--gray-light)" }}>

        {loading && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 animate-pulse">
            <div className="h-5 rounded-full w-32 mb-8" style={{ background: "var(--gray-border)" }} />
            <div className="h-72 rounded-3xl mb-8" style={{ background: "var(--gray-border)" }} />
            <div className="h-4 rounded-full w-24 mb-4" style={{ background: "var(--gray-border)" }} />
            <div className="h-10 rounded-full w-3/4 mb-3" style={{ background: "var(--gray-border)" }} />
            <div className="space-y-3 mt-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-4 rounded-full" style={{ background: "var(--gray-border)", width: i % 3 === 2 ? "70%" : "100%" }} />
              ))}
            </div>
          </div>
        )}

        {!loading && notFound && (
          <div className="max-w-2xl mx-auto px-4 py-32 text-center">
            <BookOpen size={56} style={{ color: "var(--gray-border)" }} className="mx-auto mb-6" />
            <h1 className="text-2xl font-bold mb-3" style={{ color: "#041E42" }}>Post Not Found</h1>
            <p className="text-sm mb-8" style={{ color: "var(--gray-text)" }}>This article may have been removed or the link is incorrect.</p>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-3 rounded-xl text-white hover:opacity-90" style={{ background: PRIMARY }}>
              <ArrowLeft size={15} /> Back to Blog
            </Link>
          </div>
        )}

        {!loading && blog && (
          <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

            {/* Back */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold mb-8 hover:gap-3 transition-all" style={{ color: PRIMARY }}>
              <ArrowLeft size={16} strokeWidth={2.5} /> Back to Blog
            </Link>

            {/* Cover Image */}
            <div className="relative w-full h-72 md:h-[400px] rounded-3xl overflow-hidden mb-8" style={{ background: "var(--primary-light)", border: "1px solid var(--gray-border)" }}>
              {blog.coverImage ? (
                <Image src={blog.coverImage} alt={blog.title} fill className="object-cover" priority />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <BookOpen size={64} style={{ color: PRIMARY, opacity: 0.25 }} />
                </div>
              )}
            </div>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full" style={{ background: "var(--primary-light)", color: PRIMARY }}>
                {blog.category}
              </span>
              <div className="flex items-center gap-1.5 text-sm" style={{ color: "var(--gray-text)" }}>
                <Calendar size={13} strokeWidth={2} />
                <span>{fmt(blog.createdAt)}</span>
              </div>
              {blog.views > 0 && (
                <div className="flex items-center gap-1.5 text-sm" style={{ color: "var(--gray-text)" }}>
                  <Eye size={13} strokeWidth={2} />
                  <span>{blog.views.toLocaleString()} views</span>
                </div>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-8" style={{ color: "#041E42" }}>
              {blog.title}
            </h1>

            {/* Divider */}
            <div className="h-px mb-10" style={{ background: "var(--gray-border)" }} />

            {/* Content */}
            <div
              className="tiptap-content"
              style={{ color: "#374151" }}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-12 pt-8" style={{ borderTop: "1px solid var(--gray-border)" }}>
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag size={14} style={{ color: "var(--gray-text)" }} />
                  {blog.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: "var(--gray-light)", color: "var(--gray-text)", border: "1px solid var(--gray-border)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Back Link */}
            <div className="mt-12 pt-8" style={{ borderTop: "1px solid var(--gray-border)" }}>
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all" style={{ color: PRIMARY }}>
                <ArrowLeft size={15} strokeWidth={2.5} /> Back to all articles
              </Link>
            </div>

          </article>
        )}

      </main>
      <SiteFooter />

      {/* TipTap content styles */}
      <style>{`
        .tiptap-content h1 { font-size: 1.875rem; font-weight: 700; color: #041E42; margin: 1.75rem 0 1rem; line-height: 1.2; }
        .tiptap-content h2 { font-size: 1.5rem; font-weight: 700; color: #041E42; margin: 1.5rem 0 0.75rem; line-height: 1.3; }
        .tiptap-content h3 { font-size: 1.25rem; font-weight: 600; color: #041E42; margin: 1.25rem 0 0.5rem; line-height: 1.4; }
        .tiptap-content p { margin-bottom: 1.25rem; line-height: 1.8; }
        .tiptap-content ul { list-style: disc; padding-left: 1.5rem; margin-bottom: 1.25rem; }
        .tiptap-content ol { list-style: decimal; padding-left: 1.5rem; margin-bottom: 1.25rem; }
        .tiptap-content li { margin-bottom: 0.4rem; line-height: 1.7; }
        .tiptap-content blockquote { border-left: 4px solid #01567E; padding-left: 1.25rem; margin: 1.5rem 0; color: #4B5563; font-style: italic; background: #E0F4F9; border-radius: 0 0.5rem 0.5rem 0; padding: 1rem 1.25rem; }
        .tiptap-content code { background: #F0F8FA; color: #01567E; font-family: monospace; padding: 0.15rem 0.4rem; border-radius: 0.3rem; font-size: 0.875em; }
        .tiptap-content pre { background: #041E42; color: #e2e8f0; padding: 1.25rem; border-radius: 0.75rem; overflow-x: auto; margin-bottom: 1.25rem; }
        .tiptap-content pre code { background: none; color: inherit; padding: 0; }
        .tiptap-content a { color: #01567E; text-decoration: underline; text-underline-offset: 2px; }
        .tiptap-content a:hover { color: #014A6A; }
        .tiptap-content strong { font-weight: 700; color: #041E42; }
        .tiptap-content hr { border: none; border-top: 1px solid #C8DFE8; margin: 2rem 0; }
        .tiptap-content img { max-width: 100%; border-radius: 0.75rem; margin: 1.5rem 0; }
      `}</style>
    </>
  );
}
