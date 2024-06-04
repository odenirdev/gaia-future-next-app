import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Ubuntu_Mono, Inter } from "next/font/google";

const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ubuntu-mono",
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${ubuntuMono.variable} ${inter.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
