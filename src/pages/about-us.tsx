import Head from "next/head";

import { AboutUsHero } from "@/components/AboutUsHero";
import { OurValues } from "@/components/OurValues";
import { OurTeam } from "@/components/OurTeam";
import { Services } from "@/components/Services";
import { GetInTouch } from "@/components/GetInTouch";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Sobre nós | Gaia Future lab.</title>
      </Head>
      <main className="flex-1">
        <AboutUsHero />

        <OurValues />

        <OurTeam />

        <Services className="bg-zinc-900" />

        <GetInTouch />
      </main>
    </>
  );
}
