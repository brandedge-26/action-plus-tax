"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowLeft, Save, ImageIcon, X } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { getBlogById, updateBlog, uploadImage } from "../../../../../lib/adminApi";
import toast from "react-hot-toast";

const TipTapEditor = dynamic(() => import("../../../../../components/TipTapEditor"), { ssr: false });

const categories = [
  "Tax Preparation & Filing",
  "Individual Income Tax Filing",
  "Self-Employed / Freelance Tax",
  "Crypto & Investment Tax",
  "Tax Extensions",
  "Amended Tax Returns",
  "Tax Resolution & IRS Support",
  "IRS Audit Support & Representation",
  "Tax Planning Services",
  "Bookkeeping Services",
  "Payroll Services",
  "Business Valuation",
  "Refund Advance",
  "Drop Off & Go",
];

export default function EditBlogPage() {
  const router   = useRouter();
  const params   = useParams();
  const id       = params.id as string;
  const coverRef = useRef<HTMLInputElement>(null);

  const [loading,      setLoading]      = useState(true);
  const [saving,       setSaving]       = useState(false);
  const [imgUploading, setImgUploading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    category: categories[0],
    coverImage: "",
    metaTitle: "",
    metaDescription: "",
    tags: "",
    status: "published" as "draft" | "published",
    featured: false,
    content: "",
  });

  const set = (key: string, value: unknown) => setForm(f => ({ ...f, [key]: value }));

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getBlogById(id);
        const b = data.blog;
        setForm({
          title:           b.title ?? "",
          slug:            b.slug ?? "",
          category:        b.category ?? categories[0],
          coverImage:      b.coverImage ?? "",
          metaTitle:       b.metaTitle ?? "",
          metaDescription: b.metaDescription ?? "",
          tags:            Array.isArray(b.tags) ? b.tags.join(", ") : "",
          status:          b.status ?? "published",
          featured:        b.featured ?? false,
          content:         b.content ?? "",
        });
      } catch (e: unknown) {
        toast.error(e instanceof Error ? e.message : "Failed to load post.");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [id]);

  const handleCoverFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImgUploading(true);
    try {
      const url = await uploadImage(file);
      set("coverImage", url);
      toast.success("Cover image uploaded.");
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Image upload failed.");
    } finally {
      setImgUploading(false);
      if (coverRef.current) coverRef.current.value = "";
    }
  };

  const handleEditorImageUpload = async (file: File): Promise<string> => {
    try {
      return await uploadImage(file);
    } catch (err: unknown) {
      toast.error(err instanceof Error ? err.message : "Image upload failed.");
      throw err;
    }
  };

  const handleSave = async () => {
    if (!form.title.trim()) { toast.error("Post title is required."); return; }
    if (!form.slug.trim())  { toast.error("URL slug is required."); return; }
    if (!form.content || form.content === "<p></p>" || form.content === "") {
      toast.error("Post content cannot be empty."); return;
    }

    setSaving(true);
    try {
      await updateBlog(id, {
        ...form,
        tags: form.tags ? form.tags.split(",").map((t: string) => t.trim()).filter(Boolean) : [],
      });
      toast.success("Blog post saved!");
      router.push("/dashboard/blog");
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Failed to save.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="w-6 h-6 rounded-full border-2 animate-spin" style={{ borderColor: "var(--primary)", borderTopColor: "transparent" }} />
      </div>
    );
  }

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/blog"
            className="w-9 h-9 rounded-xl flex items-center justify-center hover:opacity-80"
            style={{ background: "var(--gray-light)", border: "1px solid var(--gray-border)", color: "var(--black)" }}
          >
            <ArrowLeft size={16} strokeWidth={2} />
          </Link>
          <div>
            <h2 className="text-lg font-bold" style={{ color: "var(--black)" }}>Edit Blog Post</h2>
            <p className="text-sm truncate max-w-[200px]" style={{ color: "var(--gray-text)" }}>{form.title || "Untitled"}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl text-white hover:opacity-90 disabled:opacity-50"
          style={{ background: "var(--primary)" }}
        >
          <Save size={14} strokeWidth={2} />
          {saving ? "Saving…" : "Save Changes"}
        </button>
      </div>

      <div className="grid xl:grid-cols-3 gap-5">

        {/* Main */}
        <div className="xl:col-span-2 space-y-5">

          <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>Post Title *</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={e => set("title", e.target.value)}
                  placeholder="Enter an engaging title..."
                  className="w-full rounded-xl px-4 py-3 text-base font-semibold outline-none transition-all bg-white"
                  style={{ border: "1px solid var(--gray-border)", color: "var(--black)" }}
                  onFocus={e => (e.target.style.borderColor = "var(--primary)")}
                  onBlur={e => (e.target.style.borderColor = "var(--gray-border)")}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>URL Slug</label>
                <div className="flex items-center rounded-xl overflow-hidden" style={{ border: "1px solid var(--gray-border)" }}>
                  <span className="px-3 py-2.5 text-sm select-none shrink-0" style={{ background: "var(--gray-light)", color: "var(--gray-text)", borderRight: "1px solid var(--gray-border)" }}>/blog/</span>
                  <input
                    type="text"
                    value={form.slug}
                    onChange={e => set("slug", e.target.value)}
                    className="flex-1 px-3 py-2.5 text-sm outline-none bg-white"
                    style={{ color: "var(--black)" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid var(--gray-border)" }}>
            <div className="px-5 py-3" style={{ borderBottom: "1px solid var(--gray-border)" }}>
              <p className="text-xs font-semibold" style={{ color: "var(--black)" }}>Content *</p>
            </div>
            <TipTapEditor
              value={form.content}
              onChange={html => set("content", html)}
              onUploadImage={handleEditorImageUpload}
            />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">

          <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--gray-text)" }}>Settings</p>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>Category</label>
                <select
                  value={form.category}
                  onChange={e => set("category", e.target.value)}
                  className="w-full rounded-xl px-3 py-2.5 text-sm outline-none"
                  style={{ border: "1px solid var(--gray-border)", background: "#fff", color: "var(--black)" }}
                >
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>Status</label>
                <select
                  value={form.status}
                  onChange={e => set("status", e.target.value)}
                  className="w-full rounded-xl px-3 py-2.5 text-sm outline-none"
                  style={{ border: "1px solid var(--gray-border)", background: "#fff", color: "var(--black)" }}
                >
                  <option value="published">Published</option>
                  <option value="draft">Draft</option>
                </select>
              </div>
              <label className="flex items-center gap-2.5 cursor-pointer">
                <input type="checkbox" checked={form.featured} onChange={e => set("featured", e.target.checked)} className="sr-only peer" />
                <div className="w-10 h-5 rounded-full transition-all bg-gray-200 peer-checked:bg-[var(--primary)] relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5 flex-shrink-0" />
                <span className="text-xs font-semibold" style={{ color: "var(--black)" }}>Feature on homepage</span>
              </label>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--gray-border)" }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--gray-text)" }}>Cover Image</p>
            {form.coverImage ? (
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={form.coverImage} alt="Cover" className="w-full h-40 object-cover rounded-xl" />
                <button
                  type="button"
                  onClick={() => set("coverImage", "")}
                  className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(0,0,0,0.6)", color: "#fff" }}
                >
                  <X size={13} strokeWidth={2.5} />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => coverRef.current?.click()}
                disabled={imgUploading}
                className="w-full flex flex-col items-center justify-center gap-2 rounded-xl py-8 transition-all hover:opacity-80 disabled:opacity-50"
                style={{ border: "2px dashed var(--gray-border)", background: "var(--gray-light)", color: "var(--gray-text)" }}
              >
                <ImageIcon size={28} strokeWidth={1.5} style={{ color: "var(--primary)" }} />
                <span className="text-xs font-semibold">{imgUploading ? "Uploading…" : "Click to upload cover image"}</span>
                <span className="text-[10px]">JPG, PNG, WebP · Max 8MB</span>
              </button>
            )}
            <input ref={coverRef} type="file" accept="image/*" className="hidden" onChange={handleCoverFile} />
          </div>


        </div>
      </div>
    </div>
  );
}
