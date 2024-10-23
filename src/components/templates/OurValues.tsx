import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Typography } from "../atoms/Typography";
import { Card } from "../molecules/Card";
import { Container } from "../molecules/Container";

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
    <section className="w-full py-12 md:py-24 bg-zinc-700" id="our-values">
      <Container className="space-y-12">
        <header className="flex flex-col items-center justify-center text-center space-y-2">
          <Typography as="pre-title">Nossos Valores</Typography>
          <Typography as="h2">Impulsionando mudanças positivas</Typography>
          <Typography as="subtitle">
            Na GaiaFuture, somos guiados por um conjunto de valores fundamentais
            que moldar nossa abordagem à tecnologia sustentável e ao meio
            ambiente responsabilidade.
          </Typography>
        </header>

        <section className="mx-auto grid max-w-5xl md:max-w-[1440px] items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <Card.Root className="space-y-4">
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
              <Card.Description as="p" className="text-zinc-400">
                Estamos empenhados em ultrapassar os limites da tecnologia
                sustentável, explorando constantemente soluções novas e
                inovadoras para impulsionar mudanças positivas.
              </Card.Description>
            </div>
          </Card.Root>

          <Card.Root className="space-y-4">
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
              <Card.Description as="p" className="text-zinc-400">
                A sustentabilidade está no centro de tudo o que fazemos.
                Dedicamo-nos a desenvolver soluções que minimizem o nosso
                impacto ambiental e promovam a sustentabilidade a longo prazo.
              </Card.Description>
            </div>
          </Card.Root>

          <Card.Root className="space-y-4">
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
              <Card.Description as="p" className="text-zinc-400">
                Acreditamos que trabalhando juntos, podemos alcançar coisas
                maiores. Nossa abordagem colaborativa promove a comunicação
                aberta, o conhecimento compartilhado e a resolução coletiva de
                problemas, permitindo-nos entregar resultados excepcionais.
              </Card.Description>
            </div>
          </Card.Root>
        </section>
      </Container>
    </section>
  );
};
