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
