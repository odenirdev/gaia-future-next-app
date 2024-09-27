import Image from "next/image";
import { ComponentProps, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Typography } from "../Typography";
import { Card } from "../Card";
import { twMerge } from "tailwind-merge";
import { Container } from "../Container";
import { useAnimations } from "@/hooks/useAnimations";

type ServicesProps = ComponentProps<"section">;

export const Services = ({ className, ...props }: ServicesProps) => {
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
            trigger: "#services",
            toggleActions: "play reverse play reverse",
            start: "5% center",
            end: "80% center",
          },
        })
        .staggerFrom(chars, 0.02, { opacity: 0 }, 0.08);
    }
  }, [headerTitleRef]);

  return (
    <section
      id="services"
      className={twMerge("w-full py-12 md:py-24 bg-zinc-700", className)}
      {...props}
    >
      <Container className="space-y-8">
        <header className="flex flex-col items-center justify-center text-center space-y-2">
          <Typography as="pre-title">Nossos Serviços</Typography>

          <Typography as="h2" ref={headerTitleRef}>
            Soluções de Software
          </Typography>
          <Typography as="subtitle">
            Desde aplicações web personalizadas até aplicações móveis,
            oferecemos soluções digitais de ponta que impulsionam mudanças
            positivas para seu negócio.
          </Typography>
        </header>

        <div className="mx-auto max-w-5xl md:max-w-[1440px] items-center gap-6">
          <div className="flex flex-col space-y-4">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li>
                <Card.Root className="flex gap-4 items-center w-full">
                  <Image
                    src="/assets/service-1.svg"
                    alt=""
                    className="w-14"
                    width={96}
                    height={96}
                  />

                  <Card.Title as="h4">
                    Desenvolvimento de Soluções Personalizadas
                  </Card.Title>
                </Card.Root>
              </li>
              <li>
                <Card.Root className="flex gap-4 items-center w-full">
                  <Image
                    src="/assets/service-5.svg"
                    alt=""
                    className="w-14"
                    width={96}
                    height={96}
                  />

                  <Card.Title as="h4">Automação de Processos</Card.Title>
                </Card.Root>
              </li>
              <li>
                <Card.Root className="flex gap-4 items-center w-full">
                  <Image
                    src="/assets/service-2.svg"
                    alt=""
                    className="w-14"
                    width={96}
                    height={96}
                  />

                  <Card.Title as="h4" className="text-md">
                    Aplicação de Inteligência Artificial e Business Intelligence
                    (IA e BI)
                  </Card.Title>
                </Card.Root>
              </li>
              <li>
                <Card.Root className="flex gap-4 items-center w-full">
                  <Image
                    src="/assets/service-3.svg"
                    alt=""
                    className="w-14"
                    width={96}
                    height={96}
                  />

                  <Card.Title as="h4">
                    Integrações com Redes Blockchain
                  </Card.Title>
                </Card.Root>
              </li>
              <li>
                <Card.Root className="flex gap-4 items-center w-full">
                  <Image
                    src="/assets/service-4.svg"
                    alt=""
                    className="w-14"
                    width={96}
                    height={96}
                  />

                  <Card.Title as="h4">Consultoria Estratégica em TI</Card.Title>
                </Card.Root>
              </li>
              <li>
                <Card.Root className="flex gap-4 items-center w-full">
                  <Image
                    src="/assets/service-4.svg"
                    alt=""
                    className="w-14"
                    width={96}
                    height={96}
                  />

                  <Card.Title as="h4">
                    Consultoria em ESG e Melhores Práticas
                  </Card.Title>
                </Card.Root>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
