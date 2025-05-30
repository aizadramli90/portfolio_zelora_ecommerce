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
              <div>
                <h3>Aizadramli</h3>
                <a href={"https://github.com/aizadramli90"} className="style">
                  Aizad's Ramli Github
                </a>
                <a href={"https://github.com/aizadramli90"}>Roadmap</a>
              </div>
              <div>
                <h3>Zelora</h3>
                <Link href={"/"}>Home</Link>
                <Link href={"/cart"}>Cart</Link>
              </div>
              <div>
                <h3>Support</h3>
                <Link href={"/contact"}>Contact</Link>
                <Link href={"/"}>FAQ</Link>
              </div>
            </div>
            <div className="socials">
              <p>
                ©
                <a href="https://aizadramli.com" target="_blank">
                  Aizad Ramli
                </a>{" "}
                2025 <br /> Built with Next.js
              </p>
              <div className="social-links">
                <Link href={"https://github.com/aizadramli90"} target="_blank">
                  <i className="fa-brands fa-github"></i>
                </Link>
                <Link
                  href={"https://www.facebook.com/aizadauditore/"}
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook"></i>
                </Link>
                <Link
                  href={"https://www.youtube.com/@aizadramli"}
                  target="_blank"
                >
                  <i className="fa-brands fa-youtube"></i>
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
