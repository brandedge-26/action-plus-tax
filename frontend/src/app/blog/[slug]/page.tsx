import type { Metadata } from "next";
import BlogDetail from "./BlogDetail";

const API = "http://localhost:5510";

async function getBlog(slug: string) {
  try {
    const res = await fetch(`${API}/api/blogs/slug/${slug}`, { cache: "no-store" });
    const json = await res.json();
    return json.success ? json.blog : null;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Action Plus Tax",
      description: "The blog post you are looking for does not exist.",
    };
  }

  const plainText  = (blog.content ?? "").replace(/<[^>]*>/g, "").slice(0, 160).trim();
  const title      = blog.metaTitle || blog.title;
  const description = blog.metaDescription || plainText;

  return {
    title: `${title} | Action Plus Tax`,
    description,
    keywords: blog.tags?.join(", "),
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: blog.createdAt,
      ...(blog.coverImage && { images: [{ url: blog.coverImage, alt: blog.title }] }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(blog.coverImage && { images: [blog.coverImage] }),
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <BlogDetail slug={slug} />;
}
