import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop App",
  description: "Shop application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex justify-between px-4 py-2">
          <Link href="http://localhost:3000">[Main App]</Link>
          <Link href="/shop">Shop Home</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
