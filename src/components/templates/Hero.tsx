import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { useAnimations } from "@/hooks/useAnimations";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Typography } from "../atoms/Typography";
import { Button } from "../atoms/Button";
import { Container } from "../molecules/Container";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const { onMousePerspectiveAnimation } = useAnimations();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top 80%",
        end: "bottom 20%",
      },
    });

    tl.fromTo(
      "#hero h1",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power1.inOut", delay: 0.6 }
    )
      .fromTo(
        "#hero figure",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "power1.inOut", delay: 0.2 },
        "-=0.5"
      )
      .fromTo(
        "#hero button",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power1.out",
          stagger: 0.2,
          delay: 0.2,
        }
      );
  }, []);

  return (
    <section
      id="hero"
      className="w-full min-h-[50vh] pt-[6.875rem] flex items-center"
    >
      <Container className="flex flex-col px-8 md:flex-row gap-8 md:gap-16 items-center">
        <section className="flex flex-col gap-8 py-8">
          <div className="space-y-2 max-w-xl">
            <Typography
              as="h1"
              className="text-zinc-100 font-light tracking-normal"
            >
              <span className="text-green-500 font-bold">
                Codificando o Futuro!
              </span>{" "}
              A solução do seu amanhã está aqui
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
          className="w-[260px] h-[260px] md:w-[360px] md:h-[360px]"
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
