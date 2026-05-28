import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "CS Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-black dark:bg-black dark:text-white">       
        {/* Nav Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 sm:px-12 py-4 bg-transparent border-b border-gray-200 dark:border-gray-800">
          <Link href="/" className="font-bold text-lg tracking-tight hover:opacity-70 transition-opacity">
            Kenny Nguyen
          </Link>
          {/* Nav Links */}
          <div className="flex gap-6 text-sm font-medium">
            <Link href="#about" className="hover:text-gray-500 transition-colors">About</Link>
            <a href="/resume.pdf" target="_blank" className="hover:text-gray-500 transition-colors">Resume</a>
          </div>          
        </nav>
        {/* Page Contents */}
        {children}       
      </body>
    </html>
  );
}