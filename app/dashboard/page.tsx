import { Metadata } from "next";
import Products from "@/features/product/product.component";
import Users from "@/features/user/users.component";

export const metadata: Metadata = {
  title: "Product & User Management Dashboard | Aawix",
  description:
    "Manage and browse products and users in your dashboard. View top users, product listings, ratings, and more.",
  keywords: ["products", "users", "dashboard", "management"],
  authors: [{ name: "aawix" }],
  openGraph: {
    title: "Product & User Management Dashboard | Aawix",
    description:
      "Manage and browse products and users in your dashboard. View top users, product listings, ratings, and more.",
    url: "https://aawix.com/dashboard",
    siteName: "aawix",
    images: [
      {
        url: "https://aawix.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dashboard Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product & User Management Dashboard | Aawix",
    description:
      "Manage and browse products and users in your dashboard. View top users, product listings, ratings, and more.",
    images: ["https://aawix.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://aawix.com/dashboard",
  },
};

const Page = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Users />
        </div>
        <div className="lg:col-span-2">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Page;
