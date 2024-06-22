import Head from "next/head";

import { AboutUsHero } from "@/components/templates/AboutUsHero";
import { OurTeam } from "@/components/templates/OurTeam";
import { GetInTouch } from "@/components/templates/GetInTouch";
import { Services } from "@/components/templates/Services";
import { HowWeWork } from "@/components/templates/HowWeWork";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Sobre nós | Gaia Future lab.</title>
      </Head>
      <main className="flex-1">
        <AboutUsHero />

        <HowWeWork />

        <OurTeam />

        <Services />

        <GetInTouch className="bg-zinc-800" />
      </main>
    </>
  );
}
