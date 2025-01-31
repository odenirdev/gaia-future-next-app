import Image from "next/image";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Typography } from "../atoms/Typography";
import { Container } from "../molecules/Container";
import { useAnimations } from "@/hooks/useAnimations";

export const Sustainability = () => {
  const { splitText, onMouseLightAnimation, removeMouseLight } =
    useAnimations();

  const headerTitleRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const heroTextEl = headerTitleRef.current;
    if (heroTextEl) {
      const chars = splitText(heroTextEl, "char");

      gsap.registerPlugin(ScrollTrigger);
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#sustainability",
            toggleActions: "play reverse play reverse",
            start: "5% center",
            end: "80% center",
          },
        })
        .staggerFrom(chars, 0.02, { opacity: 0 }, 0.08);
    }
  }, [headerTitleRef]);

  return (
    <section id="sustainability" className="w-full py-12 md:py-24">
      <Container className="flex flex-col md:flex-row gap-8 items-center justify-between">
        <div className="w-full max-w-[36rem]">
          <header className="mb-4">
            <Typography as="pre-title">Sobre nós</Typography>
            <Typography
              as="h2"
              ref={headerTitleRef}
              className="text-3xl md:text-3xl"
            >
              Comprometidos com um futuro mais verde
            </Typography>
          </header>

          <section>
            <div className="space-y-4">
              <Typography as="p">
                Na Gaia Future Lab, acreditamos que a tecnologia é uma força
                poderosa para promover mudanças positivas. Nosso compromisso é
                desenvolver soluções inovadoras que não apenas impulsionam o
                sucesso dos nossos clientes, mas também contribuem para um mundo
                melhor.
              </Typography>
              <Typography as="p">
                Adotamos práticas empresariais responsáveis que visam a
                construção de um futuro mais saudável e sustentável. Cada
                projeto é concebido com a excelência e a inovação como pilares,
                garantindo que nossas soluções tenham um impacto positivo e
                duradouro.
              </Typography>
              <Typography as="p">
                Nosso objetivo é integrar sustentabilidade em todas as etapas do
                desenvolvimento, desde a concepção até a entrega, promovendo a
                responsabilidade ambiental e social em tudo o que fazemos. Na
                Gaia Future Lab, estamos empenhados em fazer a diferença,
                utilizando a tecnologia para criar um futuro mais verde e
                promissor para todos.
              </Typography>
            </div>

            <div className="flex gap-2 mt-8">
              {/* <Link
          href="#"
          className="inline-flex h-10 px-8 items-center justify-center rounded-md text-sm font-medium shadow transition-colors bg-green-600 text-zinc-50 hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-600"
          prefetch={false}
        >
          Saber mais
        </Link> */}
            </div>
          </section>
        </div>

        <figure
          className="w-full max-w-[380px] h-[380px] mx-auto overflow-hidden rounded-3xl"
          onMouseMove={(event) => {
            onMouseLightAnimation(event as unknown as MouseEvent);
          }}
          onMouseOut={removeMouseLight}
        >
          <Image
            src="/assets/hero.jpg"
            width="600"
            height="600"
            alt="Hero"
            className="h-full w-full object-cover"
          />
        </figure>
      </Container>
    </section>
  );
};
