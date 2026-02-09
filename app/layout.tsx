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
  title: "FitFusion Gym – Gymnastics & Performance Training",
  description:
    "Professional gymnastics, strength & conditioning and performance training for kids and adults. Train smarter, move better, perform stronger with FitFusion.",

  openGraph: {
    title: "FitFusion Gym",
    description:
      "Gymnastics, strength & performance training programs for all levels.",
    url: "https://fitfusion.vercel.app",
    siteName: "FitFusion",
    images: [
      {
        url: "/img05.jpg",
        width: 1200,
        height: 630,
        alt: "FitFusion Gym Training",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
