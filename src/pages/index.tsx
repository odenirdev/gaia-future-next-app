"use client";

import Head from "next/head";

import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Sustainability } from "@/components/Sustainability";
import { GetInTouch } from "@/components/GetInTouch";

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
