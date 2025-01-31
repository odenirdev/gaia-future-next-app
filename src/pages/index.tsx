"use client";

import Head from "next/head";

import { Hero } from "@/components/templates/Hero";
import { Sustainability } from "@/components/templates/Sustainability";
import { GetInTouch } from "@/components/templates/GetInTouch";
import { Services } from "@/components/templates/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Gaia Future lab.</title>
      </Head>
      <main className="flex-1">
        <div className="relative">
          <div className="absolute inset-0 z-[-1] ">
            <div className="absolute bottom-0 top-[40%] left-0 right-0 bg-gradient-to-b from-transparent to-green-950 to-25%"></div>
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.62)]"></div>
            <Image
              width={1920}
              height={1080}
              src="/assets/bg-hero.gif"
              alt=""
              className="object-cover h-full w-full"
              unoptimized
              priority
            />
          </div>

          <Hero />

          <Services />
        </div>

        {/* <div className="relative">
          <div className="absolute inset-0 z-[-1] ">
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.62)]"></div>
            <Image
              width={1920}
              height={1080}
              src="/assets/bg-products.gif"
              alt=""
              className="object-cover bg-center h-full w-full"
              unoptimized
              priority
            />
          </div>

          <OurProducts />
        </div> */}

        <Sustainability />

        <GetInTouch />
      </main>
    </>
  );
}
