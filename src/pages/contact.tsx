import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/molecules/Container";
import { Typography } from "@/components/atoms/Typography";
import { useAnimations } from "@/hooks/useAnimations";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Contact() {
  const { onMousePerspectiveAnimation, splitText } = useAnimations();

  return (
    <>
      <Head>
        <title>Contato | Gaia Future Lab</title>
      </Head>
      <main className="flex-1">
        <article className="w-full min-h-[calc(100vh-5.5rem)] pt-[6.875rem] pb-[3rem] md:pb-[6.875rem] flex items-center relative">
          <div className="absolute inset-0 z-[-2] overflow-hidden">
            <div className="absolute  bg-[rgba(0,0,0,0.6)] inset-0 z-[-1]"></div>
            <Image
              width={1920}
              height={1080}
              src="/assets/bg-hero.gif"
              alt=""
              className="object-cover   h-full w-full scale-125 mix-blend-overlay"
              unoptimized
              priority
            />
          </div>

          <Container className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <Typography
                as="h2"
                className="text-zinc-100 font-light tracking-normal"
              >
                Entre em contato e um dos{" "}
                <span className="text-green-500">nossos especialistas</span> irá
                atendê-lo
              </Typography>
              {/* <div className="space-y-4">
                <Typography as="h1" ref={headerTitleRef}>
                  Gaia Future lab.
                </Typography>
                <Typography as="p" className="text-zinc-100">
                  Construímos soluções de software personalizadas para empresas
                  de todos os tamanhos.
                </Typography>
                <Typography as="p" className="text-zinc-100">
                  Quer desenvolver um software sob medida para o seu negócio?
                  Fale com a nossa equipe e vamos discutir seu projeto.
                </Typography>
              </div> */}

              {/* <a
                href="https://forms.gle/kKBrNuLc1gpKXJC89"
                target="_blank"
                className="inline-block"
              >
                <Button>Formulário para contato</Button>
              </a> */}
            </div>

            <div
              className="h-[14rem] w-full max-w-[25rem] bg-white/5 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-8 space-y-4"
              onMouseMove={(event) =>
                onMousePerspectiveAnimation(
                  event.currentTarget,
                  event as unknown as MouseEvent
                )
              }
            >
              <div className="flex items-center justify-between">
                <Typography as="h2" className="md:text-md text-zinc-100">
                  Entrar em contato
                </Typography>

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
                  <Typography as="p" className="text-zinc-300">
                    contato@gaiafuture.com.br
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  {/* <PhoneIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" /> */}
                  <Typography as="p" className="text-zinc-300">
                    (11) 95042-1954
                  </Typography>
                </div>
              </div>
            </div>
          </Container>
        </article>
      </main>
    </>
  );
}
