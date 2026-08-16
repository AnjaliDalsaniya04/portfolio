import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { personalData } from "./data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: `${personalData.name} | ${personalData.designation}`,
  description: personalData.description,
  openGraph: {
    title: `${personalData.name} | ${personalData.designation}`,
    description: personalData.description,
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0d1117",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-navy text-gray-300">
        {children}
      </body>
    </html>
  );
}
