import { ComponentProps, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Button } from "../Button";
import { Typography } from "../Typography";
import { Container } from "../Container";
import { twMerge } from "tailwind-merge";
import { useAnimations } from "@/hooks/useAnimations";

type GetInTouchProps = ComponentProps<"section">;

export const GetInTouch = ({ className, ...props }: GetInTouchProps) => {
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
            trigger: "#get-in-touch",
            toggleActions: "play none reverse none",
            start: "top 600",
            end: "150 600",
          },
        })
        .staggerFrom(chars, 0.02, { opacity: 0 }, 0.08);
    }
  }, [headerTitleRef]);

  return (
    <section
      id="get-in-touch"
      className={twMerge("w-full py-24 bg-zinc-700", className)}
      {...props}
    >
      <Container className="space-y-8">
        <header className="space-y-1 md:space-y-2 text-center">
          <Typography as="h2" ref={headerTitleRef}>
            Entrar em contato
          </Typography>
          <Typography as="p" className="max-w-[44rem] mx-auto">
            Quer desenvolver um software sob medida para o seu negócio? Fale com
            a nossa equipe e vamos discutir seu projeto.
          </Typography>
        </header>

        <div className="mx-auto w-full max-w-sm space-y-2">
          <a
            href="https://forms.gle/kKBrNuLc1gpKXJC89"
            target="_blank"
            className="mx-auto w-fit block"
          >
            <Button>Formulário para contato</Button>
          </a>
          <Typography as="p" className="text-xs md:text-xs text-center">
            Entraremos em contato com você o mais breve possível.
          </Typography>
        </div>
      </Container>
    </section>
  );
};
