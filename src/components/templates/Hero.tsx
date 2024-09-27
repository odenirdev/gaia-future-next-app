import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap, { SteppedEase, TimelineMax } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useAnimations } from "@/hooks/useAnimations";

import { Typography } from "../Typography";
import { Button } from "../Button";
import { Container } from "../Container";

export const Hero = () => {
  const { onMousePerspectiveAnimation, splitText } = useAnimations();

  const headerTitleRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const heroTextEl = headerTitleRef.current;
    if (heroTextEl) {
      const chars = splitText(heroTextEl, "char");

      gsap.registerPlugin(ScrollTrigger);
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#hero",
            toggleActions: "play reverse play none",
            start: "top center",
            end: "bottom center",
          },
        })
        .staggerFrom(chars, 0.02, { opacity: 0 }, 0.08);
    }
  }, [headerTitleRef]);

  return (
    <section
      id="hero"
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

      <Container className="flex flex-col px-8 md:flex-row gap-8 md:gap-4 items-center">
        <section className="flex flex-col gap-8">
          <div className="space-y-2 max-w-xl flex-1">
            <Typography as="h1" ref={headerTitleRef}>
              Gaia Future lab.
            </Typography>
            <Typography as="subtitle" className="text-zinc-100">
              Codificando o Futuro. Somos a empresa de engenharia de software
              preocupada com o futuro verde do planeta. A solução do seu amanhã
              está aqui!
            </Typography>
          </div>

          <div className="flex flex-col md:flex-row gap-2 ">
            <Link href="#get-in-touch" prefetch={false}>
              <Button className="w-full">Entrar em contato</Button>
            </Link>
            <Link href="#services" prefetch={false}>
              <Button variant="secondary" className="w-full">
                Saber mais
              </Button>
            </Link>
          </div>
        </section>

        <figure
          className="w-[260px] h-[260px] md:w-[360px] md:h-[360px] mx-auto"
          onMouseMove={onMousePerspectiveAnimation}
        >
          <Image
            src="/assets/logo.svg"
            width="600"
            height="600"
            alt="Hero"
            className="h-full w-full object-center drop-shadow-xl"
          />
        </figure>
      </Container>
    </section>
  );
};
