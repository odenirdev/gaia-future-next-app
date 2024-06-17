"use client";

import Head from "next/head";

import { Hero } from "@/components/templates/Hero";
import { Sustainability } from "@/components/templates/Sustainability";
import { GetInTouch } from "@/components/templates/GetInTouch";
import { Services } from "@/components/templates/Services";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Gaia Future lab.</title>
      </Head>
      <main className="flex-1">
        <Hero />

        <Services />

        <Sustainability />

        <GetInTouch />
      </main>
    </>
  );
}
