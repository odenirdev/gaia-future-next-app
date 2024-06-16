import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Typography } from "./Typography";
import { Button } from "./Button";

export const AboutUsHero = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#about-us-hero",
          toggleActions: "play reverse play none",
          start: "top center",
          end: "90% center",
        },
      })
      .fromTo(
        "#about-us-hero section header h1",
        {
          opacity: 0,
          x: -100,
        },
        {
          x: 0,
          opacity: 1,
          ease: "power1.in",
          duration: 0.6,
        }
      )
      .fromTo(
        "#about-us-hero section header p",
        {
          opacity: 0,
          x: -100,
        },
        {
          x: 0,
          opacity: 1,
          ease: "power1.in",
          duration: 0.6,
        }
      )
      .fromTo(
        "#about-us-hero section section section",
        { opacity: 0, x: -100 },
        {
          x: 0,
          opacity: 1,
          ease: "power1.in",
          duration: 0.6,
        }
      )
      .fromTo(
        "#about-us-hero section section footer",
        { opacity: 0, x: -100 },
        {
          x: 0,
          opacity: 1,
          ease: "power1.in",
          duration: 0.6,
        }
      );
  }, []);

  return (
    <section
      id="about-us-hero"
      className="w-full min-h-[calc(100vh-4rem)] pt-[6.875rem] pb-[3rem] md:pb-[6.875rem] relative flex items-center"
    >
      <div className="absolute inset-0 z-[-1] mix-blend-overlay">
        <Image
          width={1920}
          height={1080}
          src="/assets/bg-hero.gif"
          alt=""
          className="object-cover h-full w-full"
          unoptimized
          priority
        />
      </div>

      <section className="max-w-5xl w-full mx-auto flex flex-col px-8 md:flex-row gap-8 md:gap-4 items-center">
        <div className="grid max-w-5xl mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
          <header>
            <Typography as="h1">Codificando o Futuro</Typography>
            <Typography as="p" className="text-lg md:text-xl text-gray-200">
              Somos uma empresa de engenharia de software preocupada com o
              futuro verde do planeta.
            </Typography>
          </header>

          <section className="flex flex-col items-start space-y-4">
            <section className="space-y-2">
              <Typography as="pre-title">Nossa Missão</Typography>
              <Typography as="p" className="text-gray-200">
                Impulsionar a inovação tecnológica em direção a um futuro
                sustentável. Nosso compromisso é desenvolver soluções de
                software e data science que capacitem o setor privado e público
                a enfrentar os desafios globais, promovendo o desenvolvimento
                ambiental, social e econômico.
              </Typography>
            </section>

            <footer className="space-x-4">
              <Link href="#our-values" prefetch={false}>
                <Button>Saber mais</Button>
              </Link>
              <Link href="#get-in-touch" prefetch={false}>
                <Button variant="secondary">Entrar em contato</Button>
              </Link>
            </footer>
          </section>
        </div>
      </section>
    </section>
  );
};
