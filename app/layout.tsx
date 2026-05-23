import type { Metadata } from "next";
import "./globals.css";
import { BackgroundScene } from "@/components/BackgroundScene";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Kevin Novantino Hindiarto | Frontend Developer Portfolio",
  description:
    "Portfolio pribadi Kevin Novantino Hindiarto, Computer Engineering Student dan Frontend Developer dengan fokus React.js, UI/UX, software development, dan multimedia.",
  keywords: [
    "Kevin Novantino Hindiarto",
    "Frontend Developer",
    "Computer Engineering",
    "React.js",
    "Next.js",
    "Portfolio"
  ],
  authors: [{ name: "Kevin Novantino Hindiarto" }],
  openGraph: {
    title: "Kevin Novantino Hindiarto | Frontend Developer Portfolio",
    description:
      "Computer Engineering Student & Frontend Developer focused on clean, modern, and responsive digital experiences.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="font-sans antialiased">
        <BackgroundScene />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
