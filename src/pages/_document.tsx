"use client";

import { List } from "@phosphor-icons/react/dist/ssr";
import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Document() {
  const [openMenu, setOpenMenu] = useState(false);

  const onOpenMenuChange = () => {
    console.log(openMenu);

    setOpenMenu(!openMenu);
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="title" content="Gaia Future lab." />
        <meta
          name="description"
          content="Codificando o Futuro. Desenvolvimento sustentável de software para um futuro mais verde."
        />
        <meta
          name="keywords"
          content="desenvolvimento de software personalizado, desenvolvimento de aplicativos personalizados, soluções de software sob medida, desenvolvimento personalizado de sistemas, desenvolvimento de software corporativo, desenvolvimento de software empresarial, desenvolvimento de software à medida, desenvolvimento de software especializado, desenvolvimento de software customizado, desenvolvimento de software de qualidade, desenvolvimento de software de alta performance, desenvolvimento de software orientado a negócios, desenvolvimento de software para empresas, desenvolvimento de software profissional, desenvolvimento de software de última geração, desenvolvimento de software inovador, soluções de software adaptadas, desenvolvimento de software ágil, desenvolvimento de software de ponta, desenvolvimento de software de classe mundial"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Portuguese" />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gaia-future-lab.vercel.app" />
        <meta property="og:title" content="Gaia Future lab." />
        <meta
          property="og:description"
          content="Codificando o Futuro. Desenvolvimento sustentável de software para um futuro mais verde. Criamos soluções digitais inovadoras com foco na responsabilidade ambiental e no impacto social."
        />
        <meta property="og:image" content="/assets/hero.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Gaia Future lab." />
        <meta
          property="twitter:description"
          content="Codificando o Futuro. Desenvolvimento sustentável de software para um futuro mais verde. Criamos soluções digitais inovadoras com foco na responsabilidade ambiental e no impacto social."
        />
        <meta property="twitter:image" content="/assets/hero.jpg" />
      </Head>
      <body>
        <header className="flex items-center justify-between h-[6.875rem] w-full mx-auto px-9 absolute z-[10]">
          <Image src="/assets/logo.svg" alt="" width={44} height={44} />

          <input type="checkbox" id="menu-toggle" className="hidden peer" />
          <label htmlFor="menu-toggle" className="cursor-pointer md:hidden">
            <svg
              className="w-6 h-6 text-zinc-20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>

          <nav
            id="menu"
            className="hidden absolute left-0 top-[6.875rem] w-full px-4  md:static md:block md:w-fit"
          >
            <ul className="flex flex-1 flex-col bg-[#252525] p-4 rounded md:bg-transparent md:flex-row gap-4">
              <li>
                <Link
                  href="#services"
                  className="text-sm font-medium hover:underline underline-offset-4"
                >
                  Serviços
                </Link>
              </li>

              <li>
                <Link
                  href="#sustainability"
                  className="text-sm font-medium hover:underline underline-offset-4"
                >
                  Sustentabilidade
                </Link>
              </li>

              <li>
                <Link
                  href="#get-in-touch"
                  className="text-sm font-medium hover:underline underline-offset-4"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <Main />

        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-zinc-500">
            &copy; 2024 Gaia Future Lab. Todos os direitos reservados.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            {/* <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Termos de serviço
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
              Privacidade
            </Link> */}
          </nav>
        </footer>

        <NextScript />
      </body>
    </Html>
  );
}
