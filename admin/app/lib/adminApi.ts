const BASE = "http://localhost:5510";

export function getAdminToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("apt_admin_token");
}
export function setAdminToken(token: string) {
  localStorage.setItem("apt_admin_token", token);
}
export function clearAdminToken() {
  localStorage.removeItem("apt_admin_token");
  localStorage.removeItem("apt_admin_user");
}

export async function adminFetch(path: string, options: { method?: string; body?: object } = {}) {
  const token = getAdminToken();
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${BASE}${path}`, {
    method: options.method ?? "GET",
    headers,
    credentials: "include",
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data?.message || "Request failed.");
  return data;
}

// ── Contact (Applications) ────────────────────────────────────────────────────
export const getContacts      = ()           => adminFetch("/api/contact");
export const getContactById   = (id: string) => adminFetch(`/api/contact/${id}`);
export const updateContactStatus = (id: string, status: string) =>
  adminFetch(`/api/contact/${id}/status`, { method: "PATCH", body: { status } });
export const deleteContact    = (id: string) => adminFetch(`/api/contact/${id}`, { method: "DELETE" });

// ── Services ──────────────────────────────────────────────────────────────────
export const getAllServices  = ()                   => adminFetch("/api/services/all");
export const createService  = (body: object)       => adminFetch("/api/services",         { method: "POST",   body });
export const updateService  = (id: string, body: object) => adminFetch(`/api/services/${id}`, { method: "PATCH",  body });
export const toggleService  = (id: string)         => adminFetch(`/api/services/${id}/toggle`, { method: "PATCH" });
export const deleteService  = (id: string)         => adminFetch(`/api/services/${id}`,   { method: "DELETE" });

// ── Upload ────────────────────────────────────────────────────────────────────
export async function uploadImage(file: File): Promise<string> {
  const token = getAdminToken();
  const formData = new FormData();
  formData.append("image", file);
  const res = await fetch(`${BASE}/api/upload/cover`, {
    method: "POST",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    credentials: "include",
    body: formData,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.message || "Upload failed.");
  return data.url;
}

// ── Blogs ─────────────────────────────────────────────────────────────────────
export const getAllBlogs     = ()                   => adminFetch("/api/blogs/all");
export const getBlogById    = (id: string)         => adminFetch(`/api/blogs/admin/${id}`);
export const createBlog     = (body: object)       => adminFetch("/api/blogs",             { method: "POST",   body });
export const updateBlog     = (id: string, body: object) => adminFetch(`/api/blogs/${id}`, { method: "PUT",    body });
export const toggleBlogStatus = (id: string)       => adminFetch(`/api/blogs/${id}/toggle`, { method: "PATCH" });
export const deleteBlog     = (id: string)         => adminFetch(`/api/blogs/${id}`,       { method: "DELETE" });
