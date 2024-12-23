import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Main App",
  description: "Main application",
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
          <Link href="/">Home</Link>
          <div className="space-x-4">
            <Link href="/shop">Shop</Link>
            <Link href="/admin">Admin</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
