import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Typography } from "../Typography";
import { Button } from "../Button";
import { Container } from "../Container";

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
        "#about-us-hero .container > header",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: "power1.in",
          duration: 0.4,
        }
      )
      .fromTo(
        "#about-us-hero .container > div",
        {
          opacity: 0,
        },
        {
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

      <Container className="space-y-8">
        <header className="max-w-4xl mx-auto text-center">
          <Typography as="h1">Conheça a Gaia Future Lab</Typography>
          <Typography as="subtitle" className="text-zic-100">
            Na Gaia Future Lab, acreditamos que a transparência e a inovação são
            fundamentais para o sucesso de qualquer projeto. Nossa missão é
            transformar ideias em soluções tecnológicas eficientes e
            sustentáveis, sempre com um olhar para o futuro.
          </Typography>
        </header>

        <div className="flex gap-2 w-fit mx-auto">
          <Button>Saber mais</Button>
          <Button variant="secondary">Entrar em contato</Button>
        </div>
      </Container>
    </section>
  );
};
