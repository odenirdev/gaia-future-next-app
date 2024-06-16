import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Typography } from "./Typography";
import { Card } from "./Card";

export const OurValues = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#our-values",
          toggleActions: "play reverse play reverse",
          start: "5% center",
          end: "95% center",
        },
      })
      .fromTo(
        "#our-values header",
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
        "#our-values section",
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
    <section className="w-full py-12 md:py-24" id="our-values">
      <div className="container px-4 md:px-6 space-y-12 mx-auto max-w-5xl">
        <header className="flex flex-col items-center justify-center text-center space-y-2">
          <Typography as="pre-title">Nossos Valores</Typography>
          <Typography as="h2">Impulsionando mudanças positivas</Typography>
          <Typography as="p" className="max-w-3xl text-lg md:text-xl">
            Na GaiaFuture, somos guiados por um conjunto de valores fundamentais
            que moldar nossa abordagem à tecnologia sustentável e ao meio
            ambiente responsabilidade.
          </Typography>
        </header>

        <section className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <Card.Root className="space-y-4 bg-zinc-800">
            <div className="flex justify-center">
              <Image
                src="/assets/value-1.svg"
                width="124"
                height="124"
                alt="Value"
                className="aspect-square object-cover"
              />
            </div>
            <div className="space-y-1">
              <Card.Title as="h3">Inovação</Card.Title>
              <Card.Description as="p">
                Estamos empenhados em ultrapassar os limites da tecnologia
                sustentável, explorando constantemente soluções novas e
                inovadoras para impulsionar mudanças positivas.
              </Card.Description>
            </div>
          </Card.Root>

          <Card.Root className="space-y-4 bg-zinc-800">
            <div className="flex justify-center">
              <Image
                src="/assets/value-2.svg"
                width="124"
                height="124"
                alt="Value"
                className="aspect-square object-cover"
              />
            </div>
            <div className="space-y-1">
              <Card.Title as="h3">Sustentabilidade</Card.Title>
              <Card.Description as="p">
                A sustentabilidade está no centro de tudo o que fazemos.
                Dedicamo-nos a desenvolver soluções que minimizem o nosso
                impacto ambiental e promovam a sustentabilidade a longo prazo.
              </Card.Description>
            </div>
          </Card.Root>

          <Card.Root className="space-y-4 bg-zinc-800">
            <div className="flex justify-center">
              <Image
                src="/assets/value-3.svg"
                width="124"
                height="124"
                alt="Value"
                className="aspect-square object-cover"
              />
            </div>
            <div className="space-y-1">
              <Card.Title as="h3">Colaboração</Card.Title>
              <Card.Description as="p">
                Acreditamos que trabalhando juntos, podemos alcançar coisas
                maiores. Nossa abordagem colaborativa promove a comunicação
                aberta, o conhecimento compartilhado e a resolução coletiva de
                problemas, permitindo-nos entregar resultados excepcionais.
              </Card.Description>
            </div>
          </Card.Root>
        </section>
      </div>
    </section>
  );
};
