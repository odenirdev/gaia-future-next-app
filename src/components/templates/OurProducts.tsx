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

export const OurProducts = ({ className, ...props }: ServicesProps) => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#our-products",
        start: "top 40%",
        end: "bottom bottom",
      },
    });

    tl.fromTo(
      "#our-products header",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    ).fromTo(
      "#our-products .card-container",
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
      id="our-products"
      className={twMerge("w-full py-8 md:py-12", className)}
      {...props}
    >
      <Container className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <header className="flex flex-col space-y-2">
            <Typography as="pre-title">Nossos Produtos</Typography>

            <Typography as="h2" className="text-zinc-100">
              Conheça nossos{" "}
              <span className="text-green-600">Produtos de Software</span>
            </Typography>
            <Typography as="p" className="text-zinc-100">
              Nós vamos te mostrar como usar todo o potencial da tecnologia na
              sua empresa.
            </Typography>
          </header>

          <div className="card-container">
            <ServiceCard
              imageUrl="/assets/service-1.svg"
              title="Roadmap"
              description=""
            />
          </div>

          <div className="card-container">
            <ServiceCard
              imageUrl="/assets/service-5.svg"
              title="MVP"
              description=""
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
