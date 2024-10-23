import { ComponentProps } from "react";

import { Button } from "../atoms/Button";
import { Typography } from "../atoms/Typography";
import { Container } from "../molecules/Container";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

type GetInTouchProps = ComponentProps<"section">;

export const GetInTouch = ({ className, ...props }: GetInTouchProps) => {
  return (
    <section
      id="get-in-touch"
      className={twMerge("w-full py-24 bg-zinc-900", className)}
      {...props}
    >
      <Container className="space-y-8">
        <header className="space-y-1 md:space-y-2 text-center">
          <Typography as="h2" className="text-zinc-200">
            Entre em contato
          </Typography>
          <Typography as="p" className="max-w-[44rem] mx-auto text-zinc-400">
            Quer desenvolver um software sob medida para o seu negócio? Fale com
            a nossa equipe e vamos discutir seu projeto.
          </Typography>
        </header>

        <div className="mx-auto w-full max-w-sm space-y-2">
          <Link href="/contact" className="mx-auto w-fit block">
            <Button>Entrar em contato</Button>
          </Link>
          {/* <a
            href="https://forms.gle/kKBrNuLc1gpKXJC89"
            target="_blank"
            className="mx-auto w-fit block"
          >
            <Button>Formulário para contato</Button>
          </a> */}
          {/* <Typography as="p" className="text-xs md:text-xs text-center">
            Entraremos em contato com você o mais breve possível.
          </Typography> */}
        </div>
      </Container>
    </section>
  );
};
