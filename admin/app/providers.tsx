"use client";

import { Toaster } from "react-hot-toast";
import { ReactNode } from "react";

export default function AdminProviders({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#fff",
            color: "#0A0A0A",
            border: "1px solid #E5E7EB",
            borderRadius: "12px",
            fontSize: "14px",
            fontWeight: "500",
          },
          success: { iconTheme: { primary: "#0046BE", secondary: "#fff" } },
          error:   { iconTheme: { primary: "#DC2626", secondary: "#fff" } },
        }}
      />
    </>
  );
}
