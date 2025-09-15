import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import FloatingShapes from "@/components/floating-shapes";
import Navbar from "@/components/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/providers/convex-client-provider";
import { shadesOfPurple } from "@clerk/themes";
import CursorFollower from "@/components/CursorFollower";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Editopia",
  description: "AI Image Editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProvider appearance={{ baseTheme: shadesOfPurple }}>
            <ConvexClientProvider>
              <main className="min-h-[5000px] overflow-x-hidden bg-slate-900 text-white">
                <Navbar />
                <CursorFollower />
                <FloatingShapes />
                <Toaster richColors position="bottom-right" />
                {children}
              </main>
            </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
