import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./fanta.css";
import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";

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
      <body>
        <div id="portal" />
        <div id="app">
          <header>
            <div className="header-content">
              <Link href="/">
                <h1>Zelora</h1>
              </Link>
              <h4 className="mid-text">Honest shopping, happy living</h4>
              <Cart />
            </div>
          </header>
          <main>{children}</main>
          <div className="hr" />
          <footer>
            <div className="email-container">
              <h5>
                Be the first to discover new arrivals, exclusive deals, and
                exciting offers — all in one place
              </h5>
              <EmailInput />
            </div>
            <div className="link-container">
              <h3>Aizadramli</h3>
              <Link></Link>
            </div>
            <div className="socials"></div>
          </footer>
        </div>
      </body>
    </html>
  );
}
