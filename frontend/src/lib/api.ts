const BASE_URL = "http://localhost:5510/api/auth";

type FetchOptions = {
  method?: string;
  body?: object;
  token?: string;
};

export async function apiFetch(path: string, options: FetchOptions = {}) {
  const { method = "GET", body, token } = options;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    credentials: "include", // sends cookies (refreshToken)
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json();
  if (!res.ok) {
    const msg = data?.message || data?.error?.message || "Something went wrong.";
    throw new Error(msg);
  }

  return data;
}
