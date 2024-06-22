import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useAnimations } from "@/hooks/useAnimations";

import { Typography } from "../Typography";
import { Container } from "../Container";
import { MemberCard } from "../organisms/MemberCard";

export const OurTeam = () => {
  const { onMousePerspectiveAnimation } = useAnimations();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#our-team",
          toggleActions: "play reverse play reverse",
          start: "5% center",
          end: "95% center",
        },
      })
      .fromTo(
        "#our-team header",
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
        "#our-team section",
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
    <section className="bg-zinc-800 w-full py-12 md:py-24" id="our-team">
      <Container className="space-y-12">
        <header className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Typography as="pre-title">Nossa Equipe</Typography>
            <Typography as="h2">Conheça a equipe do Gaia Future Lab</Typography>
            <Typography as="subtitle" className="max-w-4xl">
              Nossa equipe de profissionais apaixonados e experientes está
              dedicada a criar um futuro sustentável através de soluções
              inovadoras Soluções de software.
            </Typography>
          </div>
        </header>

        <section className="flex gap-8 flex-wrap justify-center">
          <MemberCard
            avatar="/assets/avatar-1.jpg"
            name="Jonas Forte"
            role="Software Engineer"
            about={[
              "Jonas Forte, fundador da Gaia Future Lab, possui bacharelado em Ciência da Computação pela UEMS, Engenharia da Computação pela UFGD e especialização em Ciência e Análise de Dados pela USP. Com 12 anos de experiência, Jonas se destacou como gestor de equipes ágeis e arquiteto de soluções tecnológicas.",
              "Jonas sempre sonhou em usar a tecnologia para criar soluções inovadoras. Na Gaia Future Lab, ele lidera a definição de projetos, promove a inovação e facilita a comunicação entre o negócio e o software, garantindo que as soluções entregues atendam perfeitamente às necessidades dos clientes. Sua experiência e visão estratégica asseguram que cada projeto seja bem-sucedido e alinhado com os objetivos dos clientes.",
            ]}
          />

          <MemberCard
            avatar="/assets/avatar-2.jpg"
            name="Noé Machado"
            role="Product Manager"
            about={[
              "Noé Machado, é Engenheiro Físico e PhD em Tecnologia Nuclear pela USP, é conhecido por seu rigor técnico-científico. Com vasta experiência em ESG, normas técnicas e desenvolvimento de projetos, ele se uniu à Gaia Future Lab para aplicar sua expertise na criação de soluções eficientes e eficazes.",
              "Noé é responsável por entender e documentar as necessidades dos clientes, garantindo que as soluções propostas sejam as mais adequadas e que a observabilidade necessária esteja presente para a tomada de decisões precisas. Sua abordagem analítica e detalhista assegura que cada projeto seja executado com excelência, agregando valor significativo aos clientes.",
            ]}
          />

          <MemberCard
            avatar="/assets/avatar-3.jpg"
            name="Odenir Gomes"
            role="Software Engineer"
            about={[
              "Odenir Gomes é especialista em Análise e Desenvolvimento de Software. Formado pelo Instituto Federal de São Paulo (IFSP) e entusiasta de Educação em Tecnologia. Palestrante em diversos encontros e eventos da área. Sua habilidade em codificação e paixão por tecnologia o tornam fundamental para a Gaia Future Lab, onde atua como líder de desenvolvimento e arquitetura de aplicação.",
              "Odenir gerencia e executa projetos, sempre buscando as tecnologias mais adequadas para cada cenário. Ele transforma ideias em soluções práticas e eficientes, garantindo a entrega de projetos de alta qualidade. Sua capacidade de coordenar o desenvolvimento e liderar equipes técnicas asseguram que os projetos sejam entregues dentro do prazo e superem as expectativas dos clientes.",
            ]}
          />

          {/* <div className="space-y-4 px-6 py-4 h-full">
            <div className="flex justify-center">
              <Image
                src="/assets/avatar-1.jpg"
                width="300"
                height="300"
                alt="Team Member"
                className="aspect-square object-cover rounded-3xl overflow-hidden"
                onMouseMove={onMousePerspectiveAnimation}
              />
            </div>
            <div className="space-y-2">
              <div>
                <Typography as="h3">Jonas Forte</Typography>
                <Typography as="p">Lead Software Engineer</Typography>
              </div>

              <Typography as="p" className="text-sm">
                Jonas sempre sonhou em usar a tecnologia para criar soluções
                inovadoras. Na Gaia Future Lab, ele lidera a definição de
                projetos, promove a inovação e facilita a comunicação entre o
                negócio e o software, garantindo que as soluções entregues
                atendam perfeitamente às necessidades dos clientes. Sua
                experiência e visão estratégica asseguram que cada projeto seja
                bem-sucedido e alinhado com os objetivos dos clientes.
              </Typography>
            </div>
          </div>

          <div className="space-y-4 px-6 py-4 h-full">
            <div className="flex justify-center">
              <Image
                src="/assets/avatar-2.jpg"
                width="300"
                height="300"
                alt="Team Member"
                className="aspect-square object-cover rounded-3xl overflow-hidden"
                onMouseMove={onMousePerspectiveAnimation}
              />
            </div>
            <div className="space-y-2">
              <div>
                <Typography as="h3"></Typography>
                <Typography as="p">Product Onwer Senior</Typography>
              </div>

              <Typography as="p" className="text-sm">
                Noé é responsável por entender e documentar as necessidades dos
                clientes, garantindo que as soluções propostas sejam as mais
                adequadas e que a observabilidade necessária esteja presente
                para a tomada de decisões precisas. Sua abordagem analítica e
                detalhista assegura que cada projeto seja executado com
                excelência, agregando valor significativo aos clientes.
              </Typography>
            </div>
          </div>

          <div className="space-y-4 px-6 py-4 h-full">
            <div className="flex justify-center">
              <Image
                src="/assets/avatar-3.jpg"
                width="300"
                height="300"
                alt="Team Member"
                className="aspect-square object-cover rounded-3xl overflow-hidden"
                onMouseMove={onMousePerspectiveAnimation}
              />
            </div>
            <div className="space-y-2">
              <div>
                <Typography as="h3">Odenir Gomes</Typography>
                <Typography as="p">Software Engineer Senior</Typography>
              </div>

              <Typography as="p" className="text-sm">
                Odenir gerencia e executa projetos, sempre buscando as
                tecnologias mais adequadas para cada cenário. Ele transforma
                ideias em soluções práticas e eficientes, garantindo a entrega
                de projetos de alta qualidade. Sua capacidade de coordenar o
                desenvolvimento e liderar equipes técnicas asseguram que os
                projetos sejam entregues dentro do prazo e superem as
                expectativas dos clientes.
              </Typography>
            </div>
          </div> */}
        </section>
      </Container>
    </section>
  );
};
