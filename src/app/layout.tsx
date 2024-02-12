import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import Header from "@/components/header.component";
import { NextAuthProvider } from "./providers";
import { Toaster } from "@/components/ui/toaster";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Hemalytix",
  description: "The new approach to diagnostics",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <NextAuthProvider>
          <Header />
            <main className="container max-w-7xl mx-auto h-full pt-12">
              {children}
            </main>
        </NextAuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
