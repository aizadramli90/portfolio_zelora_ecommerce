import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./fanta.css";
import Head from "./head";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Zelora E-Shop",
  description: "Honest shopping, happy living",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body>{children}</body>
    </html>
  );
}
