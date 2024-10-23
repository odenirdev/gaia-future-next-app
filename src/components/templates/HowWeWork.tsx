import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Container } from "../molecules/Container";
import { Typography } from "../atoms/Typography";

import { useEffect } from "react";

export const HowWeWork = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#focus-objective",
          toggleActions: "play reverse play reverse",
          start: "5% center",
          end: "80% center",
        },
      })
      .fromTo(
        "#focus-objective > div",
        {
          opacity: 0,
          x: -25,
        },
        {
          x: 0,
          opacity: 1,
          ease: "power1.in",
          duration: 0.4,
        }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#methodology",
          toggleActions: "play reverse play reverse",
          start: "5% center",
          end: "80% center",
        },
      })
      .fromTo(
        "#methodology > div",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          ease: "power1.in",
          duration: 0.4,
        }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#transparency",
          toggleActions: "play reverse play reverse",
          start: "5% center",
          end: "80% center",
        },
      })
      .fromTo(
        "#transparency > div",
        {
          x: -25,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          ease: "power1.in",
          duration: 0.6,
        }
      );
  }, []);

  return (
    <>
      <section id="transparency" className="w-full py-12 md:py-24 bg-zinc-700">
        <Container>
          <section className="grid grid-cols-1 md:grid-cols-[1fr_480px] gap-8">
            <div className="space-y-8">
              <header>
                <Typography as="h2">Transparência nos Processos</Typography>
                <Typography as="subtitle">
                  Cada etapa do trabalho é compartilhada com o cliente,
                  garantindo clareza e confiança.
                </Typography>
              </header>

              <section className="space-y-4">
                <div>
                  <Typography as="h3">Comunicação aberta</Typography>
                  <Typography as="p">
                    Acreditamos na comunicação transparente e aberta com nossos
                    clientes. Você sempre saberá o que está acontecendo com seu
                    projeto.
                  </Typography>
                </div>

                <div>
                  <Typography as="h3">Abordagem colaborativa</Typography>
                  <Typography as="p">
                    Nossa equipe trabalha em estreita colaboração com você para
                    garantir que suas necessidades e objetivos sejam atendidos.
                    Estamos aqui para apoiá-lo em cada etapa do caminho.
                  </Typography>
                </div>

                <div>
                  <Typography as="h3">Relatórios detalhados</Typography>
                  <Typography as="p">
                    Fornecemos relatórios de progresso detalhados e
                    atualizações, para que você sempre saiba o status do seu
                    projeto.
                  </Typography>
                </div>
              </section>
            </div>

            <div className="hidden max-h-[500px] md:block overflow-hidden rounded-3xl">
              <Image
                src="/assets/how-we-work-3.svg"
                alt=""
                width={480}
                height={480}
                className="object-contain w-full h-full"
              />
            </div>
          </section>
        </Container>
      </section>

      <section id="methodology" className="w-full py-12 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-[480px_1fr] gap-8">
            <div className="hidden max-h-[500px] md:block overflow-hidden rounded-3xl">
              <img
                src="/assets/how-we-work-2.svg"
                className="object-contain w-full h-full"
                alt=""
              />
            </div>

            <section className="space-y-8">
              <header>
                <Typography as="h2">Metodologia Ágil (Scrum)</Typography>
                <Typography as="subtitle">
                  A empresa utiliza o framework Scrum para gerenciar projetos,
                  permitindo flexibilidade, adaptação contínua e entregas
                  rápidas.
                </Typography>
              </header>

              <section className="space-y-4">
                <div>
                  <Typography as="h3">Flexível e Adaptável</Typography>
                  <Typography as="p">
                    Nossa abordagem baseada em Scrum nos permite adaptar-nos
                    rapidamente às mudanças de requisitos e prioridades,
                    garantindo que seu projeto permaneça no caminho certo.
                  </Typography>
                </div>

                <div>
                  <Typography as="h3">Iterações Rápidas</Typography>
                  <Typography as="p">
                    Trabalhamos em sprints curtos e focados para entregar valor
                    incremental rapidamente, obtendo feedback e ajustando à
                    medida que avançamos.
                  </Typography>
                </div>

                <div>
                  <Typography as="h3">Cerimônias Colaborativas</Typography>
                  <Typography as="p">
                    Nossas cerimônias Scrum, como reuniões diárias e
                    retrospectivas, mantêm todos alinhados e melhorando
                    continuamente.
                  </Typography>
                </div>
              </section>
            </section>
          </div>
        </Container>
      </section>

      <section
        id="focus-objective"
        className="w-full py-12 md:py-24 bg-zinc-700"
      >
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_480px] gap-8">
            <div className="space-y-8">
              <header>
                <Typography as="pre-title">Como trabalhamos</Typography>
                <Typography as="h2">Foco no Objetivo</Typography>
                <Typography as="subtitle">
                  Trabalhamos lado a lado com você para entender suas
                  necessidades e objetivos, garantindo que cada solução entregue
                  seja perfeitamente alinhada às suas expectativas.
                </Typography>
              </header>

              <section className="space-y-4">
                <div>
                  <Typography as="h3">Abordagem Centrada no Cliente</Typography>
                  <Typography as="p">
                    Dedicamos tempo para entender profundamente seu negócio,
                    seus desafios e seus objetivos, para que possamos fornecer
                    soluções que realmente atendam às suas necessidades.
                  </Typography>
                </div>

                <div>
                  <Typography as="h3">Soluções sob medida</Typography>
                  <Typography as="p">
                    Nossa equipe cria soluções personalizadas que estão
                    perfeitamente alinhadas com seus objetivos, garantindo que
                    você obtenha o máximo valor de nossa parceria.
                  </Typography>
                </div>

                <div>
                  <Typography as="h3">Colaboração contínua</Typography>
                  <Typography as="p">
                    Trabalhamos em estreita colaboração com você durante todo o
                    ciclo de vida do projeto para garantir que estejamos sempre
                    no caminho certo e entregando os resultados que você
                    precisa.
                  </Typography>
                </div>
              </section>
            </div>

            <div className="hidden md:block overflow-hidden rounded-3xl">
              <img
                src="/assets/how-we-work-1.svg"
                className="object-contain w-full h-full"
                alt=""
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
