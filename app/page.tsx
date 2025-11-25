import { Metadata } from "next";
import Intro from "@/features/intro/intro.page";

export const metadata: Metadata = {
  title: "Welcome to Aawix Website | Intro",
  description:
    "Welcome to Aawix Website. Discover amazing products, connect with users, and explore our platform features.",
  keywords: ["home", "products", "users", "platform"],
  authors: [{ name: "Aawix" }],
  openGraph: {
    title: "Welcome to Aawix Website | Home",
    description:
      "Welcome to Aawix Website. Discover amazing products, connect with users, and explore our platform features.",
    url: "https://aawix.com",
    siteName: "Aawix Website",
    images: [
      {
        url: "https://aawix.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aawix Home",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Welcome to Aawix Website | Home",
    description:
      "Welcome to Aawix Website. Discover amazing products, connect with users, and explore our platform features.",
    images: ["https://aawix.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://aawix.com",
  },
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center relative">
      <main className="flex justify-center min-h-screen w-full gap-4 items-center px-4 sm:px-6 lg:px-16 sm:items-start">
        <Intro />
      </main>
    </div>
  );
}
