"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import toast from "react-hot-toast";
import { apiFetch } from "@/lib/api";

// ─── Types ───────────────────────────────────────────────────────────────────

export type AuthUser = {
  userId: string;
  name: string;
  email: string;
  phone: string;
  profilePicture: string | null;
  role: string;
};

type AuthContextType = {
  user: AuthUser | null;
  accessToken: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, phone: string, password: string) => Promise<void>;
  verifyOtp: (email: string, otp: string) => Promise<boolean>;
  resendOtp: (email: string) => Promise<void>;
  logout: () => Promise<void>;
};

// ─── Context ─────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // On mount: restore session
  useEffect(() => {
    const restore = async () => {
      try {
        const storedToken = localStorage.getItem("apt_access_token");
        if (storedToken) {
          try {
            const data = await apiFetch("/me", { token: storedToken });
            setUser(data.user);
            setAccessToken(storedToken);
          } catch {
            // Token expired — try refresh via httpOnly cookie
            try {
              const refreshData = await apiFetch("/refresh-token", { method: "POST" });
              const newToken = refreshData.accessToken;
              localStorage.setItem("apt_access_token", newToken);
              const meData = await apiFetch("/me", { token: newToken });
              setUser(meData.user);
              setAccessToken(newToken);
            } catch {
              localStorage.removeItem("apt_access_token");
            }
          }
        }
      } finally {
        setLoading(false);
      }
    };
    restore();
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const data = await apiFetch("/login", { method: "POST", body: { email, password } });
    setUser(data.user);
    setAccessToken(data.accessToken);
    localStorage.setItem("apt_access_token", data.accessToken);
    toast.success(`Welcome back, ${data.user.name.split(" ")[0]}!`);
  }, []);

  const register = useCallback(
    async (name: string, email: string, phone: string, password: string) => {
      await apiFetch("/register", { method: "POST", body: { name, email, phone, password } });
      toast.success("Account created! Check your email for the OTP.");
    },
    []
  );

  // verifyOtp: verify then auto-login using stored temp credentials
  // Returns true if auto-login succeeded, false otherwise
  const verifyOtp = useCallback(async (email: string, otp: string): Promise<boolean> => {
    await apiFetch("/verify-otp", { method: "POST", body: { email, otp } });

    const tmpCreds = sessionStorage.getItem("apt_tmp_creds");
    if (tmpCreds) {
      try {
        const { password } = JSON.parse(tmpCreds);
        sessionStorage.removeItem("apt_tmp_creds");
        const data = await apiFetch("/login", { method: "POST", body: { email, password } });
        setUser(data.user);
        setAccessToken(data.accessToken);
        localStorage.setItem("apt_access_token", data.accessToken);
        toast.success(`Email verified! Welcome, ${data.user.name.split(" ")[0]}!`);
        return true;
      } catch {
        toast.success("Email verified! Please sign in.");
        return false;
      }
    } else {
      toast.success("Email verified! Please sign in.");
      return false;
    }
  }, []);

  const resendOtp = useCallback(async (email: string) => {
    await apiFetch("/resend-otp", { method: "POST", body: { email } });
    toast.success("New OTP sent to your email!");
  }, []);

  const logout = useCallback(async () => {
    try {
      await apiFetch("/logout", { method: "POST" });
    } catch {
      // ignore
    }
    setUser(null);
    setAccessToken(null);
    localStorage.removeItem("apt_access_token");
    toast.success("Signed out successfully.");
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, accessToken, loading, login, register, verifyOtp, resendOtp, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}

export function getAvatarInitials(name: string): string {
  const words = name.trim().split(/\s+/);
  const first = words[0]?.[0] ?? "";
  const second = words[1]?.[0] ?? "";
  return (first + second).toUpperCase();
}
