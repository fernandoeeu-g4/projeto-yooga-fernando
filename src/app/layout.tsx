import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";

import "./tailwind.css";
import Providers from "./providers";
import bodyBackground from "../../public/body-background.webp";
import { Search } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased font-[Inter] mt-[18vh]`}
        style={{
          backgroundImage: `url(${bodyBackground.src})`,
          backgroundSize: "100%",
          backgroundPosition: "center -200px",
          backgroundRepeat: "no-repeat",
          height: "100vh", // Ensure the body takes up the full viewport height
          width: "100vw", // Ensure the body takes up the full viewport width
        }}
      >
        <Providers>{children}</Providers>
        <div className="size-12 rounded-lg bg-[#E5E7E9] flex items-center justify-center fixed shadow-sm top-4 right-4">
          <Search className="size-5 text-primary" />
        </div>
      </body>
    </html>
  );
}
