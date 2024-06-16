import Image from "next/image";
import { ComponentProps, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Typography } from "./Typography";
import { Card } from "./Card";
import { twMerge } from "tailwind-merge";

type ServicesProps = ComponentProps<"section">;

export const Services = ({ className, ...props }: ServicesProps) => {
  useEffect(() => {
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
      .fromTo(
        "#services > div > header",
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
        "#services > div > div",
        { opacity: 0, y: 100 },
        {
          y: 0,
          opacity: 1,
          ease: "power1.in",
          duration: 0.4,
        }
      );
  }, []);

  return (
    <section
      id="services"
      className={twMerge("w-full py-12 md:py-24 bg-zinc-800", className)}
      {...props}
    >
      <div className="mx-auto max-w-5xl px-4 space-y-8">
        <header className="flex flex-col items-center justify-center text-center space-y-2">
          <Typography as="pre-title">Nossos Serviços</Typography>

          <Typography as="h2">Soluções de Software</Typography>
          <Typography as="p" className="md:text-2xl">
            Desde aplicações web personalizadas até aplicações móveis,
            oferecemos soluções digitais de ponta que impulsionam mudanças
            positivas para seu negócio.
          </Typography>
        </header>

        <div className="mx-auto max-w-5xl items-center gap-6">
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
                    Desenvolvimento de soluções personalizadas
                  </Card.Title>
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
                    Aplicação de Inteligência Artificial (IA) para o contexto do
                    seu negócio
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
              <li className="md:col-span-2">
                <Card.Root className="flex gap-4 items-center w-full max-w-[33.75rem] m-auto">
                  <Image
                    src="/assets/service-5.svg"
                    alt=""
                    className="w-14"
                    width={96}
                    height={96}
                  />

                  <Card.Title as="h4">Resoluções ágeis de problemas</Card.Title>
                </Card.Root>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
