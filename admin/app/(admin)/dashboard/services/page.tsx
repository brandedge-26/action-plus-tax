"use client";

import { useState, useEffect } from "react";
import { Edit2, Trash2, Search, X, RefreshCw } from "lucide-react";
import { getAllServices, updateService, toggleService, deleteService } from "../../../lib/adminApi";
import toast from "react-hot-toast";

type Service = {
  _id: string;
  name: string;
  slug: string;
  category: string;
  cta: string;
  description?: string;
  active: boolean;
  order: number;
};

const categories = ["Tax Services", "Tax Resolution", "Tax Planning", "Business Services", "Financial Products"];

const editEmptyForm = { name: "", category: "Tax Services", cta: "", description: "" };

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading]   = useState(true);
  const [search, setSearch]     = useState("");
  const [editing, setEditing]   = useState<Service | null>(null);
  const [saving, setSaving]     = useState(false);
  const [form, setForm]         = useState(editEmptyForm);

  const load = async () => {
    setLoading(true);
    try {
      const data = await getAllServices();
      setServices(data.services ?? []);
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Failed to load services.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const openEdit = (s: Service) => {
    setEditing(s);
    setForm({ name: s.name, category: s.category, cta: s.cta, description: s.description ?? "" });
  };

  const handleSave = async () => {
    if (!form.name.trim()) { toast.error("Service name is required."); return; }
    setSaving(true);
    try {
      const data = await updateService(editing!._id, form);
      setServices(prev => prev.map(s => s._id === editing!._id ? data.service : s));
      toast.success("Service updated.");
      setEditing(null);
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Failed to save.");
    } finally {
      setSaving(false);
    }
  };

  const handleToggle = async (id: string) => {
    try {
      const data = await toggleService(id);
      setServices(prev => prev.map(s => s._id === id ? { ...s, active: data.service?.active ?? !s.active } : s));
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Failed to update.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this service? This cannot be undone.")) return;
    try {
      await deleteService(id);
      setServices(prev => prev.filter(s => s._id !== id));
      toast.success("Service deleted.");
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : "Failed to delete.");
    }
  };

  const filtered = services.filter((s) =>
    !search || s.name.toLowerCase().includes(search.toLowerCase()) || s.category.toLowerCase().includes(search.toLowerCase())
  );

  const activeCount = services.filter(s => s.active).length;

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold" style={{ color: "var(--black)" }}>Services</h2>
          <p className="text-sm" style={{ color: "var(--gray-text)" }}>
            {loading ? "Loading…" : `${activeCount} active · ${services.length} total`}
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
        </div>
      </div>


      {/* Edit Form */}
      {editing && (
        <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--primary)", boxShadow: "0 0 0 3px var(--primary-light)" }}>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold" style={{ color: "var(--black)" }}>Edit Service</p>
            <button onClick={() => setEditing(null)} style={{ color: "var(--gray-text)" }}><X size={18} /></button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>Service Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all bg-white"
                style={{ border: "1px solid var(--gray-border)" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
              />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>Category</label>
              <select
                value={form.category}
                onChange={(e) => setForm(f => ({ ...f, category: e.target.value }))}
                className="w-full rounded-xl px-4 py-2.5 text-sm outline-none"
                style={{ border: "1px solid var(--gray-border)", background: "#fff", color: "var(--black)" }}
              >
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>CTA Text</label>
              <input
                type="text"
                value={form.cta}
                onChange={(e) => setForm(f => ({ ...f, cta: e.target.value }))}
                className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all bg-white"
                style={{ border: "1px solid var(--gray-border)" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>Short Description <span style={{ color: "var(--gray-text)", fontWeight: 400 }}>(optional)</span></label>
              <input
                type="text"
                value={form.description}
                onChange={(e) => setForm(f => ({ ...f, description: e.target.value }))}
                placeholder="Brief description..."
                className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all bg-white"
                style={{ border: "1px solid var(--gray-border)" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button onClick={() => setEditing(null)} className="px-4 py-2 rounded-xl text-sm font-semibold" style={{ border: "1px solid var(--gray-border)", color: "var(--black)" }}>Cancel</button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-4 py-2 rounded-xl text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60"
              style={{ background: "var(--primary)" }}
            >
              {saving ? "Saving…" : "Save Changes"}
            </button>
          </div>
        </div>
      )}

      {/* Search */}
      <div className="bg-white rounded-2xl p-4" style={{ border: "1px solid var(--gray-border)" }}>
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--gray-text)" }} />
          <input
            type="text"
            placeholder="Search services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none transition-all"
            style={{ border: "1px solid var(--gray-border)", background: "var(--gray-light)" }}
            onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
            onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
          />
        </div>
      </div>

      {/* Services Table */}
      <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid var(--gray-border)" }}>
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <RefreshCw size={20} className="animate-spin" style={{ color: "var(--gray-text)" }} />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16 text-sm" style={{ color: "var(--gray-text)" }}>No services found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "var(--gray-light)", borderBottom: "1px solid var(--gray-border)" }}>
                  {["Service Name", "Category", "Status", "Actions"].map((h) => (
                    <th key={h} className="text-left text-xs font-semibold px-4 py-3" style={{ color: "var(--gray-text)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((s, i) => (
                  <tr
                    key={s._id}
                    style={{ borderBottom: i < filtered.length - 1 ? "1px solid var(--gray-light)" : "none" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#FAFAFA")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                  >
                    <td className="px-4 py-3.5">
                      <p className="text-sm font-semibold" style={{ color: "var(--black)" }}>{s.name}</p>
                      {s.description && <p className="text-xs mt-0.5 truncate max-w-[260px]" style={{ color: "var(--gray-text)" }}>{s.description}</p>}
                    </td>
                    <td className="px-4 py-3.5">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "var(--primary-light)", color: "var(--primary)" }}>{s.category}</span>
                    </td>
                    <td className="px-4 py-3.5">
                      <button
                        onClick={() => handleToggle(s._id)}
                        className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all hover:opacity-80"
                        style={s.active
                          ? { background: "rgba(5,150,105,0.1)", color: "#059669" }
                          : { background: "var(--gray-light)", color: "var(--gray-text)", border: "1px solid var(--gray-border)" }
                        }
                        title={s.active ? "Click to deactivate (hides from website)" : "Click to activate (shows on website)"}
                      >
                        <span className="w-2 h-2 rounded-full" style={{ background: s.active ? "#059669" : "var(--gray-border)" }} />
                        {s.active ? "Active" : "Inactive"}
                      </button>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => openEdit(s)}
                          className="w-7 h-7 rounded-lg flex items-center justify-center hover:opacity-80"
                          style={{ background: "var(--primary-light)", color: "var(--primary)" }}
                          title="Edit"
                        >
                          <Edit2 size={12} strokeWidth={2.5} />
                        </button>
                        <button
                          onClick={() => handleDelete(s._id)}
                          className="w-7 h-7 rounded-lg flex items-center justify-center hover:opacity-80"
                          style={{ background: "var(--danger-light)", color: "var(--danger)" }}
                          title="Delete"
                        >
                          <Trash2 size={12} strokeWidth={2.5} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
