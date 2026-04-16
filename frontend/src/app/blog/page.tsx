"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import HeaderTest from "@/components/HeaderTest";
import SiteFooter from "@/components/SiteFooter";

const API = "http://localhost:5510";

export const blogCategories = [
  { label: "All Blogs",                     value: "" },
  { label: "Tax Preparation & Filing",      value: "Tax Preparation & Filing" },
  { label: "Individual Income Tax Filing",  value: "Individual Income Tax Filing" },
  { label: "Self-Employed / Freelance Tax", value: "Self-Employed / Freelance Tax" },
  { label: "Crypto & Investment Tax",       value: "Crypto & Investment Tax" },
  { label: "Tax Extensions",               value: "Tax Extensions" },
  { label: "Amended Tax Returns",           value: "Amended Tax Returns" },
  { label: "Tax Resolution & IRS Support",  value: "Tax Resolution & IRS Support" },
  { label: "IRS Audit Support",             value: "IRS Audit Support & Representation" },
  { label: "Tax Planning Services",         value: "Tax Planning Services" },
  { label: "Bookkeeping Services",          value: "Bookkeeping Services" },
  { label: "Payroll Services",              value: "Payroll Services" },
  { label: "Business Valuation",            value: "Business Valuation" },
  { label: "Refund Advance",                value: "Refund Advance" },
  { label: "Drop Off & Go",                 value: "Drop Off & Go" },
];

type Blog = {
  _id: string;
  title: string;
  slug: string;
  category: string;
  coverImage?: string;
  views: number;
  createdAt: string;
};

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="group block border rounded-xl overflow-hidden transition-all duration-300 px-3 py-2"
      style={{ borderColor: "var(--gray-border)" }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = "#01567E")}
      onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--gray-border)")}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden rounded-xl" style={{ background: "var(--gray-light)" }}>
        {blog.coverImage ? (
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ color: "var(--gray-border)" }}>
            <Tag size={40} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="py-5 px-2">
        <span
          className="inline-block text-xs px-3 py-1 rounded-full mb-3"
          style={{ background: "var(--primary-light)", color: "#01567E" }}
        >
          {blog.category}
        </span>
        <h3
          className="text-base font-semibold leading-snug line-clamp-2 transition-colors duration-200"
          style={{ color: "var(--black)" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#01567E")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--black)")}
        >
          {blog.title}
        </h3>
        <div className="flex items-center gap-2 mt-3 text-sm" style={{ color: "var(--gray-text)" }}>
          <Calendar size={14} />
          <span>
            {new Date(blog.createdAt || "").toLocaleDateString("en-US", {
              year: "numeric", month: "short", day: "numeric",
            })}
          </span>
        </div>
        <div className="flex items-center gap-1 mt-4 text-sm duration-300" style={{ color: "#01567E" }}>
          <span>Read More</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  );
};

export default function BlogPage() {
  const [blogs, setBlogs]         = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API}/api/blogs`)
      .then(r => r.json())
      .then(data => setBlogs(data.blogs ?? []))
      .catch(() => setBlogs([]))
      .finally(() => setIsLoading(false));
  }, []);

  const latestBlogs = useMemo(() => blogs.slice(0, 6), [blogs]);

  const filteredBlogs = useMemo(() => {
    if (!selectedCategory) return null;
    return blogs.filter(b => b.category === selectedCategory);
  }, [blogs, selectedCategory]);

  const selectedCategoryLabel = blogCategories.find(c => c.value === selectedCategory)?.label;
  const displayedBlogs = selectedCategory ? (filteredBlogs || []) : latestBlogs;

  return (
    <>
      <HeaderTest />
      <main className="min-h-screen" style={{ background: "var(--gray-light)" }}>

        {/* Hero */}
        <section className="relative py-20 overflow-hidden" style={{ background: "#01567E" }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(255,242,0,0.2), transparent 70%)" }}
          />
          <div className="relative max-w-4xl mx-auto text-center px-5">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Our <span style={{ color: "#FFF200" }}>Blogs</span>
            </h1>
            <p className="text-white/60 mt-4 text-lg max-w-2xl mx-auto">
              Tax tips, IRS guidance, and expert financial advice — updated regularly by our Tax Pros.
            </p>
          </div>
        </section>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-5 pb-20 pt-10 flex flex-col lg:flex-row gap-8">

          {/* Sidebar */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="lg:sticky lg:top-6">
              <h2 className="text-lg font-bold mb-4" style={{ color: "var(--black)" }}>Categories</h2>
              <ul className="space-y-1">
                {blogCategories.map(cat => (
                  <li key={cat.value}>
                    <button
                      onClick={() => setSelectedCategory(cat.value === "" ? null : (selectedCategory === cat.value ? null : cat.value))}
                      className="w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-200 cursor-pointer"
                      style={
                        (cat.value === "" && !selectedCategory) || selectedCategory === cat.value
                          ? { background: "var(--primary-light)", color: "#01567E", borderLeft: "3px solid #01567E" }
                          : { color: "var(--gray-text)" }
                      }
                      onMouseEnter={e => {
                        const isActive = (cat.value === "" && !selectedCategory) || selectedCategory === cat.value;
                        if (!isActive) {
                          (e.currentTarget as HTMLButtonElement).style.background = "var(--gray-border)";
                          (e.currentTarget as HTMLButtonElement).style.color = "var(--black)";
                        }
                      }}
                      onMouseLeave={e => {
                        const isActive = (cat.value === "" && !selectedCategory) || selectedCategory === cat.value;
                        if (!isActive) {
                          (e.currentTarget as HTMLButtonElement).style.background = "";
                          (e.currentTarget as HTMLButtonElement).style.color = "var(--gray-text)";
                        }
                      }}
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Blog Grid */}
          <section className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold" style={{ color: "var(--black)" }}>
                {selectedCategory ? selectedCategoryLabel : "Latest Blogs"}
              </h2>
              {selectedCategory && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-sm transition cursor-pointer"
                  style={{ color: "var(--gray-text)" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.color = "var(--black)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.color = "var(--gray-text)")}
                >
                  Clear Filter
                </button>
              )}
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="border rounded-xl overflow-hidden animate-pulse" style={{ borderColor: "var(--gray-border)" }}>
                    <div className="h-48" style={{ background: "var(--gray-border)" }} />
                    <div className="p-5 space-y-3">
                      <div className="h-4 rounded w-24" style={{ background: "var(--gray-border)" }} />
                      <div className="h-5 rounded w-full" style={{ background: "var(--gray-border)" }} />
                      <div className="h-4 rounded w-32" style={{ background: "var(--gray-border)" }} />
                    </div>
                  </div>
                ))}
              </div>
            ) : displayedBlogs.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {displayedBlogs.map(blog => (
                  <BlogCard key={blog._id} blog={blog} />
                ))}
              </div>
            ) : (
              <div
                className="text-center py-16 rounded-xl"
                style={{ border: "1px solid var(--gray-border)", background: "#fff" }}
              >
                <p className="text-lg" style={{ color: "var(--gray-text)" }}>
                  {selectedCategory ? "No blogs found in this category yet." : "No blogs published yet."}
                </p>
              </div>
            )}
          </section>

        </div>
      </main>
      <SiteFooter />
    </>
  );
}
