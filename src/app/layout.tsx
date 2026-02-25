import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heimdall — Acoustic Drone Detection System",
  description:
    "Research-backed acoustic drone detection system designed for warfare conditions. Real-time direction of arrival for FPV threats — including fiber-optic controlled drones.",
  keywords: [
    "drone detection",
    "acoustic detection",
    "FPV drone",
    "C-UAS",
    "defence tech",
    "military technology",
    "direction of arrival",
    "beamforming",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#07090f] text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
