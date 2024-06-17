import Head from "next/head";

import { AboutUsHero } from "@/components/templates/AboutUsHero";
import { OurValues } from "@/components/templates/OurValues";
import { OurTeam } from "@/components/templates/OurTeam";
import { GetInTouch } from "@/components/templates/GetInTouch";
import { Services } from "@/components/templates/Services";

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

        <Services />

        <GetInTouch className="bg-zinc-800" />
      </main>
    </>
  );
}
