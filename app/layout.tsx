import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anime Vault",
  description: "Your favorite animes, all in one place.",
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}

export default Layout;
