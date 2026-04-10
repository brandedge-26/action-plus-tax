"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Search, X, Star, Eye } from "lucide-react";

const initial = [
  { id: 1, title: "10 Tax Deductions You Might Be Missing",          category: "Tax Tips",       author: "Admin", date: "Apr 08, 2025", status: "published", featured: true,  views: 1240 },
  { id: 2, title: "How to File Taxes as a Self-Employed Freelancer",  category: "Tax Tips",       author: "Admin", date: "Apr 05, 2025", status: "published", featured: false, views: 876  },
  { id: 3, title: "Understanding IRS Notices: What To Do",            category: "IRS Help",       author: "Admin", date: "Apr 02, 2025", status: "published", featured: false, views: 654  },
  { id: 4, title: "Crypto Tax Guide 2025: What You Need to Know",     category: "Crypto & Investments", author: "Admin", date: "Mar 28, 2025", status: "published", featured: true, views: 2103 },
  { id: 5, title: "Tax Planning Strategies for Small Businesses",     category: "Business",       author: "Admin", date: "Mar 20, 2025", status: "draft",     featured: false, views: 0    },
  { id: 6, title: "When Should You File for a Tax Extension?",        category: "Tax Tips",       author: "Admin", date: "Mar 15, 2025", status: "published", featured: false, views: 412  },
];

const categories = ["Tax Tips", "IRS Help", "Crypto & Investments", "Business", "Financial Planning"];

type Post = typeof initial[0];

export default function BlogPage() {
  const [posts, setPosts]     = useState(initial);
  const [search, setSearch]   = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Post | null>(null);
  const [form, setForm]       = useState({ title: "", category: "Tax Tips", status: "draft", featured: false });

  const filtered = posts.filter((p) =>
    !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase())
  );

  const openAdd = () => {
    setEditing(null);
    setForm({ title: "", category: "Tax Tips", status: "draft", featured: false });
    setShowForm(true);
  };

  const openEdit = (p: Post) => {
    setEditing(p);
    setForm({ title: p.title, category: p.category, status: p.status, featured: p.featured });
    setShowForm(true);
  };

  const handleSave = () => {
    if (!form.title.trim()) return;
    if (editing) {
      setPosts(prev => prev.map(p => p.id === editing.id ? { ...p, ...form } : p));
    } else {
      setPosts(prev => [...prev, { id: Date.now(), ...form, author: "Admin", date: "Apr 10, 2025", views: 0 }]);
    }
    setShowForm(false);
  };

  const toggleFeatured = (id: number) => setPosts(prev => prev.map(p => p.id === id ? { ...p, featured: !p.featured } : p));
  const toggleStatus   = (id: number) => setPosts(prev => prev.map(p => p.id === id ? { ...p, status: p.status === "published" ? "draft" : "published" } : p));
  const handleDelete   = (id: number) => setPosts(prev => prev.filter(p => p.id !== id));

  return (
    <div className="space-y-5">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold" style={{ color: "var(--black)" }}>Blog</h2>
          <p className="text-sm" style={{ color: "var(--gray-text)" }}>{posts.filter(p => p.status === "published").length} published · {posts.filter(p => p.status === "draft").length} drafts</p>
        </div>
        <button onClick={openAdd} className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl text-white hover:opacity-90" style={{ background: "var(--primary)" }}>
          <Plus size={15} strokeWidth={2.5} />
          New Post
        </button>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--primary)", boxShadow: "0 0 0 3px var(--primary-light)" }}>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold" style={{ color: "var(--black)" }}>{editing ? "Edit Post" : "New Blog Post"}</p>
            <button onClick={() => setShowForm(false)} style={{ color: "var(--gray-text)" }}><X size={18} /></button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>Post Title</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm(f => ({ ...f, title: e.target.value }))}
                placeholder="Enter blog post title..."
                className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all bg-white"
                style={{ border: "1px solid var(--gray-border)" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>Category</label>
                <select value={form.category} onChange={(e) => setForm(f => ({ ...f, category: e.target.value }))}
                  className="w-full rounded-xl px-4 py-2.5 text-sm outline-none"
                  style={{ border: "1px solid var(--gray-border)", background: "#fff", color: "var(--black)" }}>
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>Status</label>
                <select value={form.status} onChange={(e) => setForm(f => ({ ...f, status: e.target.value }))}
                  className="w-full rounded-xl px-4 py-2.5 text-sm outline-none"
                  style={{ border: "1px solid var(--gray-border)", background: "#fff", color: "var(--black)" }}>
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={form.featured} onChange={(e) => setForm(f => ({ ...f, featured: e.target.checked }))} className="sr-only peer" />
              <div className="w-10 h-5 rounded-full transition-all bg-gray-200 peer-checked:bg-[var(--primary)] relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5" />
              <span className="text-xs font-semibold" style={{ color: "var(--black)" }}>Feature on homepage</span>
            </label>
          </div>
          <div className="flex justify-end gap-2 mt-5">
            <button onClick={() => setShowForm(false)} className="px-4 py-2 rounded-xl text-sm font-semibold" style={{ border: "1px solid var(--gray-border)", color: "var(--black)" }}>Cancel</button>
            <button onClick={handleSave} className="px-4 py-2 rounded-xl text-sm font-semibold text-white hover:opacity-90" style={{ background: "var(--primary)" }}>
              {editing ? "Save Changes" : "Create Post"}
            </button>
          </div>
        </div>
      )}

      {/* Search */}
      <div className="bg-white rounded-2xl p-4" style={{ border: "1px solid var(--gray-border)" }}>
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--gray-text)" }} />
          <input type="text" placeholder="Search posts..." value={search} onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none transition-all"
            style={{ border: "1px solid var(--gray-border)", background: "var(--gray-light)" }}
            onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
          />
        </div>
      </div>

      {/* Posts grid */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl p-5 flex flex-col" style={{ border: "1px solid var(--gray-border)" }}>
            <div className="flex items-start justify-between gap-2 mb-3">
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: "var(--primary-light)", color: "var(--primary)" }}>{post.category}</span>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <button onClick={() => toggleFeatured(post.id)} title="Toggle featured"
                  className="w-6 h-6 flex items-center justify-center rounded-md transition-all"
                  style={{ color: post.featured ? "#F59E0B" : "var(--gray-text)" }}>
                  <Star size={14} fill={post.featured ? "currentColor" : "none"} />
                </button>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                  style={{ background: post.status === "published" ? "var(--success-light)" : "var(--warning-light)", color: post.status === "published" ? "var(--success)" : "var(--warning)" }}>
                  {post.status === "published" ? "Live" : "Draft"}
                </span>
              </div>
            </div>
            <p className="text-sm font-bold leading-snug flex-1 mb-3" style={{ color: "var(--black)" }}>{post.title}</p>
            <div className="flex items-center justify-between text-xs" style={{ color: "var(--gray-text)" }}>
              <span>{post.date}</span>
              {post.views > 0 && (
                <span className="flex items-center gap-1">
                  <Eye size={11} strokeWidth={2} />
                  {post.views.toLocaleString()}
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 mt-3 pt-3" style={{ borderTop: "1px solid var(--gray-border)" }}>
              <button onClick={() => openEdit(post)} className="flex-1 text-xs font-semibold py-1.5 rounded-lg transition-all hover:opacity-80"
                style={{ background: "var(--primary-light)", color: "var(--primary)" }}>
                <Edit2 size={11} className="inline mr-1" />Edit
              </button>
              <button onClick={() => toggleStatus(post.id)} className="flex-1 text-xs font-semibold py-1.5 rounded-lg transition-all hover:opacity-80"
                style={{ background: "var(--gray-light)", color: "var(--black)", border: "1px solid var(--gray-border)" }}>
                {post.status === "published" ? "Unpublish" : "Publish"}
              </button>
              <button onClick={() => handleDelete(post.id)} className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:opacity-80"
                style={{ background: "var(--danger-light)", color: "var(--danger)" }}>
                <Trash2 size={13} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
