import { useEffect } from "react";
import { ComponentProps } from "react";
import { Typography } from "../atoms/Typography";
import { twMerge } from "tailwind-merge";
import { Container } from "../molecules/Container";
import { ServiceCard } from "../organisms/ServiceCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ServicesProps = ComponentProps<"section">;

export const Services = ({ className, ...props }: ServicesProps) => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#services",
        start: "top 80%",
        end: "bottom 20%",
      },
    });

    tl.fromTo(
      "#services header",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    ).fromTo(
      "#services .card-container",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <section
      id="services"
      className={twMerge("w-full py-12 md:py-24", className)}
      {...props}
    >
      <Container className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <header className="flex flex-col space-y-2">
            <Typography as="pre-title">Nossos Serviços</Typography>

            <Typography as="h2" className="text-zinc-100">
              O que <span className="text-green-500">fazemos</span>
            </Typography>
            <Typography as="p" className="text-zinc-100">
              Somos seu parceiro na construção de um futuro sustentável, usando
              a transformação digital para ajudar empresas e governos a
              enfrentar desafios e impulsionar o crescimento.
            </Typography>
          </header>

          <div className="card-container">
            <ServiceCard
              imageUrl="/assets/service-1.svg"
              title="Soluções Personalizadas"
              description="Criamos soluções sob medida para atender às necessidades específicas do seu negócio, maximizando resultados e eficiência."
            />
          </div>

          <div className="card-container">
            <ServiceCard
              imageUrl="/assets/service-5.svg"
              title="Automação de Processos"
              description="Automatizamos processos para aumentar a produtividade, reduzir custos e otimizar operações em todos os setores da sua empresa."
            />
          </div>

          <div className="card-container">
            <ServiceCard
              imageUrl="/assets/service-2.svg"
              title="Aplicação de Inteligência Artificial e Business Intelligence
                    (IA e BI)"
              description="Utilizamos IA e BI para transformar dados em insights valiosos, melhorando a tomada de decisões e impulsionando o crescimento do seu negócio."
            />
          </div>

          <div className="card-container">
            <ServiceCard
              imageUrl="/assets/service-4.svg"
              title="Consultoria Estratégica em TI"
              description="Ajudamos sua empresa a desenvolver estratégias de TI que impulsionam a inovação e garantem vantagem competitiva no mercado."
            />
          </div>

          <div className="card-container">
            <ServiceCard
              imageUrl="/assets/service-4.svg"
              title="Consultoria em ESG e Melhores Práticas"
              description="Orientamos empresas na adoção de práticas ESG, alinhando crescimento econômico com responsabilidade ambiental e social."
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
