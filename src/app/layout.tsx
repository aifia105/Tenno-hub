import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Tenno Hub",
  description:
    "Tenno Hub is a feature-rich app designed to provide detailed insights and stats for Warframe enthusiasts. Explore Warframe details, weapon stats, mod recommendations, and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`} suppressHydrationWarning>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
