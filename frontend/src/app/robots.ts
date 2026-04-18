import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/auth-success", "/auth-error", "/verify-otp"],
      },
    ],
    sitemap: "https://actionplustax.com/sitemap.xml",
  };
}
