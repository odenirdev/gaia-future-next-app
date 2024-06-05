import Head from "next/head";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contato | Gaia Future Lab</title>
      </Head>
      <main className="flex-1">
        <article className="w-full min-h-[calc(100vh-5.5rem)] pt-[6.875rem] pb-[3rem] md:pb-[6.875rem] relative flex items-center relative">
          <Image
            width={1920}
            height={1080}
            src="/assets/bg-hero.gif"
            alt=""
            className="absolute z-[-1] object-cover top-0 left-0 h-full w-full mix-blend-overlay"
            unoptimized
            priority
          />

          <div className="container grid md:grid-cols-2 gap-8 px-4 md:px-6 max-w-5xl w-full mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Gaia Future lab.
                </h1>
                <p className="text-zinc-400 md:text-xl">
                  Construímos soluções de software personalizadas para empresas
                  de todos os tamanhos.
                </p>
                <p className="text-zinc-400 md:text-xl">
                  Quer desenvolver um software sob medida para o seu negócio?
                  Fale com a nossa equipe e vamos discutir seu projeto.
                </p>
              </div>

              <a
                href="https://forms.gle/kKBrNuLc1gpKXJC89"
                target="_blank"
                className="inline-block"
              >
                <button
                  type="button"
                  className="inline-flex h-10 px-8 items-center justify-center rounded-md text-sm font-medium shadow transition-colors bg-green-600 text-zinc-50 hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-600"
                >
                  Formulário para contato
                </button>
              </a>
            </div>
            <div
              className="h-[14rem] w-full max-w-[25rem] bg-white/5 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 space-y-4"
              onMouseMove={(event) => {
                if (window.innerWidth < 768) return;

                const SCALE_X = 4;
                const SCALE_Y = 8;
                const card = event.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                const mousePosition = { x, y };
                const cardSize = {
                  width: card.offsetWidth || 0,
                  height: card.offsetHeight || 0,
                };
                card.style.transform = `perspective(1000px) rotateX(${
                  (mousePosition.y / cardSize.height) * -(SCALE_Y * 2) + SCALE_Y
                }deg) rotateY(${
                  (mousePosition.x / cardSize.width) * (SCALE_X * 2) - SCALE_X
                }deg) translateZ(10px)`;
              }}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Entrar em contato</h2>
                <div className="w-12 h-12">
                  <Image
                    src="/assets/logo.svg"
                    alt="Gaia Future Lab Logo"
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  {/* <MailIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" /> */}
                  <p className="text-gray-400 dark:text-gray-400">
                    contato@gaiafuture.com.br
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {/* <PhoneIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" /> */}
                  <p className="text-gray-400 dark:text-gray-400">
                    (11) 95042-1954
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
