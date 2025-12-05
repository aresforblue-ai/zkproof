import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Conductme",
  description: "Conduct your AI ensemble with cryptographic trust."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">{children}</body>
    </html>
  );
}

