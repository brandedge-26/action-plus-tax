"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, Search, X, Check } from "lucide-react";

const initial = [
  { id: 1, name: "Tax Preparation & Filing",             category: "Tax Services",      cta: "Start My Tax Filing",         active: true,  apps: 18 },
  { id: 2, name: "Self-Employed & Freelance Tax Filing",  category: "Tax Services",      cta: "File My Self-Employed Taxes", active: true,  apps: 5  },
  { id: 3, name: "Cryptocurrency & Investment Tax",        category: "Tax Services",      cta: "Report My Crypto",            active: true,  apps: 3  },
  { id: 4, name: "Tax Extensions",                        category: "Tax Services",      cta: "Apply for Extension",         active: true,  apps: 2  },
  { id: 5, name: "Amended Tax Returns",                   category: "Tax Services",      cta: "Amend My Return",             active: false, apps: 1  },
  { id: 6, name: "Tax Resolution & IRS Issue Support",    category: "Tax Resolution",    cta: "Resolve My Tax Issue",        active: true,  apps: 4  },
  { id: 7, name: "IRS Audit Support & Representation",    category: "Tax Resolution",    cta: "Get Audit Support",           active: true,  apps: 8  },
  { id: 8, name: "Tax Planning & Consultation",           category: "Tax Planning",      cta: "Schedule Consultation",       active: true,  apps: 10 },
  { id: 9, name: "Bookkeeping & Payroll Services",        category: "Business Services", cta: "Manage My Finances",          active: true,  apps: 6  },
  { id: 10, name: "Business Valuation",                   category: "Business Services", cta: "Get My Business Valued",      active: false, apps: 0  },
];

const categories = ["Tax Services", "Tax Resolution", "Tax Planning", "Business Services"];

type Service = typeof initial[0];

export default function ServicesPage() {
  const [services, setServices] = useState(initial);
  const [search, setSearch]     = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing]   = useState<Service | null>(null);
  const [form, setForm]         = useState({ name: "", category: "Tax Services", cta: "", active: true });
  const [saved, setSaved]       = useState(false);

  const filtered = services.filter((s) =>
    !search || s.name.toLowerCase().includes(search.toLowerCase()) || s.category.toLowerCase().includes(search.toLowerCase())
  );

  const openAdd = () => {
    setEditing(null);
    setForm({ name: "", category: "Tax Services", cta: "", active: true });
    setShowForm(true);
  };

  const openEdit = (s: Service) => {
    setEditing(s);
    setForm({ name: s.name, category: s.category, cta: s.cta, active: s.active });
    setShowForm(true);
  };

  const handleSave = () => {
    if (!form.name.trim()) return;
    if (editing) {
      setServices(prev => prev.map(s => s.id === editing.id ? { ...s, ...form } : s));
    } else {
      setServices(prev => [...prev, { id: Date.now(), ...form, apps: 0 }]);
    }
    setShowForm(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleDelete = (id: number) => {
    setServices(prev => prev.filter(s => s.id !== id));
  };

  const toggleActive = (id: number) => {
    setServices(prev => prev.map(s => s.id === id ? { ...s, active: !s.active } : s));
  };

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold" style={{ color: "var(--black)" }}>Services</h2>
          <p className="text-sm" style={{ color: "var(--gray-text)" }}>{services.filter(s => s.active).length} active · {services.length} total</p>
        </div>
        <div className="flex items-center gap-2">
          {saved && (
            <span className="flex items-center gap-1 text-xs text-green-600 font-semibold">
              <Check size={12} strokeWidth={2.5} /> Saved!
            </span>
          )}
          <button onClick={openAdd} className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-xl text-white hover:opacity-90" style={{ background: "var(--primary)" }}>
            <Plus size={15} strokeWidth={2.5} />
            Add Service
          </button>
        </div>
      </div>

      {/* Add / Edit Form */}
      {showForm && (
        <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid var(--primary)", boxShadow: "0 0 0 3px var(--primary-light)" }}>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-bold" style={{ color: "var(--black)" }}>{editing ? "Edit Service" : "Add New Service"}</p>
            <button onClick={() => setShowForm(false)} style={{ color: "var(--gray-text)" }}><X size={18} /></button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--black)" }}>Service Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                placeholder="e.g. Tax Preparation & Filing"
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
                placeholder="e.g. Start My Tax Filing"
                className="w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all bg-white"
                style={{ border: "1px solid var(--gray-border)" }}
                onFocus={(e) => (e.target.style.borderColor = "var(--primary)")}
                onBlur={(e) => (e.target.style.borderColor = "var(--gray-border)")}
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={form.active} onChange={(e) => setForm(f => ({ ...f, active: e.target.checked }))} className="sr-only peer" />
              <div className="w-10 h-5 rounded-full transition-all bg-gray-200 peer-checked:bg-[var(--primary)] relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-5" />
              <span className="text-xs font-semibold" style={{ color: "var(--black)" }}>Active on website</span>
            </label>
            <div className="flex gap-2">
              <button onClick={() => setShowForm(false)} className="px-4 py-2 rounded-xl text-sm font-semibold" style={{ border: "1px solid var(--gray-border)", color: "var(--black)" }}>Cancel</button>
              <button onClick={handleSave} className="px-4 py-2 rounded-xl text-sm font-semibold text-white hover:opacity-90" style={{ background: "var(--primary)" }}>
                {editing ? "Save Changes" : "Add Service"}
              </button>
            </div>
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

      {/* Services list */}
      <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid var(--gray-border)" }}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "var(--gray-light)", borderBottom: "1px solid var(--gray-border)" }}>
                {["Service Name", "Category", "CTA Text", "Applications", "Status", "Actions"].map((h) => (
                  <th key={h} className="text-left text-xs font-semibold px-4 py-3" style={{ color: "var(--gray-text)" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((s, i) => (
                <tr key={s.id} style={{ borderBottom: i < filtered.length - 1 ? "1px solid var(--gray-light)" : "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#FAFAFA")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "")}>
                  <td className="px-4 py-3.5 text-sm font-semibold" style={{ color: "var(--black)" }}>{s.name}</td>
                  <td className="px-4 py-3.5">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: "var(--primary-light)", color: "var(--primary)" }}>{s.category}</span>
                  </td>
                  <td className="px-4 py-3.5 text-xs" style={{ color: "var(--gray-text)" }}>{s.cta}</td>
                  <td className="px-4 py-3.5 text-sm font-bold" style={{ color: "var(--black)" }}>{s.apps}</td>
                  <td className="px-4 py-3.5">
                    <button onClick={() => toggleActive(s.id)} className="flex items-center gap-1.5 text-xs font-semibold">
                      <span className="w-2 h-2 rounded-full" style={{ background: s.active ? "var(--success)" : "var(--gray-border)" }} />
                      <span style={{ color: s.active ? "var(--success)" : "var(--gray-text)" }}>{s.active ? "Active" : "Inactive"}</span>
                    </button>
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-1.5">
                      <button onClick={() => openEdit(s)} className="w-7 h-7 rounded-lg flex items-center justify-center hover:opacity-80"
                        style={{ background: "var(--primary-light)", color: "var(--primary)" }}>
                        <Edit2 size={12} strokeWidth={2.5} />
                      </button>
                      <button onClick={() => handleDelete(s.id)} className="w-7 h-7 rounded-lg flex items-center justify-center hover:opacity-80"
                        style={{ background: "var(--danger-light)", color: "var(--danger)" }}>
                        <Trash2 size={12} strokeWidth={2.5} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
