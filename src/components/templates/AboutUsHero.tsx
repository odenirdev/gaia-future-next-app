import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { Container } from "../molecules/Container";
import { useAnimations } from "@/hooks/useAnimations";

export const AboutUsHero = () => {
  const { splitText } = useAnimations();

  const headerTitleRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const heroTextEl = headerTitleRef.current;
    if (heroTextEl) {
      const chars = splitText(heroTextEl, "char");

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
        .staggerFrom(chars, 0.02, { opacity: 0 }, 0.08);
    }
  }, [headerTitleRef]);

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
          <Typography as="h1" ref={headerTitleRef}>
            Conheça a Gaia Future
          </Typography>
          <Typography as="subtitle">
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
