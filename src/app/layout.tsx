import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./provider/provider";
import NavBarComponent from "@/components/navBar";

export const metadata: Metadata = {
  title: "Tenno hub",
  description:
    "Tenno Hub is a feature-rich app designed to provide detailed insights and stats for Warframe enthusiasts. Explore Warframe details, weapon stats, mod recommendations, and more",
  icons: "/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <Providers>
          <NavBarComponent />
          {children}
        </Providers>
      </body>
    </html>
  );
}
