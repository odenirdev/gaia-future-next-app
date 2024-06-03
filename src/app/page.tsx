'use client'

import Link from 'next/link'
import { useEffect } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

export default function Component() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    var tl1 = gsap.timeline()

    tl1.fromTo(
      '#hero > div > div',
      {
        opacity: 0,
        x: -100,
      },
      {
        x: 0,
        opacity: 1,
        ease: 'power1.in',
        duration: 0.6,
      },
    )
    tl1.fromTo(
      '#hero > div > figure',
      { opacity: 0, scale: 0 },
      {
        scale: 1,
        opacity: 1,
        ease: 'power1.in',
        duration: 0.6,
      },
    )

    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#services',
        toggleActions: 'play none reverse none',
        start: 'top center',
        end: '150 center',
      },
    })
    tl2.fromTo(
      '#services > div > header',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: 'power1.in',
        duration: 0.4,
      },
    )
    tl2.fromTo(
      '#services > div > div',
      { opacity: 0, y: 100 },
      {
        y: 0,
        opacity: 1,
        ease: 'power1.in',
        duration: 0.4,
      },
    )

    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '#sustainability',
        toggleActions: 'play none reverse none',
        start: 'top center',
        end: '150 center',
      },
    })
    tl3.fromTo(
      '#sustainability > div > div > header',
      {
        opacity: 0,
        x: -100,
      },
      {
        x: 0,
        opacity: 1,
        ease: 'power1.in',
        duration: 0.4,
      },
    )
    tl3.fromTo(
      '#sustainability > div > div > section',
      {
        opacity: 0,
        x: -100,
      },
      {
        x: 0,
        opacity: 1,
        ease: 'power1.in',
        duration: 0.4,
      },
    )
    tl3.fromTo(
      '#sustainability > div > figure',
      { opacity: 0, scale: 0 },
      {
        scale: 1,
        opacity: 1,
        ease: 'power1.in',
        duration: 0.6,
      },
    )

    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: '#get-in-touch',
        toggleActions: 'play none reverse none',
        start: 'top 600',
        end: 'center 600',
      },
    })
    tl4.fromTo(
      '#get-in-touch > div',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        ease: 'power1.in',
        duration: 0.8,
      },
    )
  }, [])

  return (
    <main className="flex-1">
      <article
        id="hero"
        className="w-full min-h-[calc(100vh-4rem)] pt-[6.875rem] pb-[3rem] md:pb-[6.875rem] relative flex items-center"
      >
        <video muted autoPlay loop className="absolute z-[-2] object-cover top-0 left-0 h-full w-full">
          <source src="/assets/bg-hero.mp4" type="video/mp4" />
        </video>
        <div className="bg-[#000]/[0.65] absolute z-[-2] inset-0"></div>

        <div className="max-w-5xl w-full mx-auto flex flex-col px-8 md:flex-row gap-8 md:gap-4 items-center">
          <div className="flex flex-col gap-8">
            <div className="space-y-2 max-w-xl">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">Gaia Future lab</h1>
              <p className="text-zinc-300 text-md md:text-lg">
                Desenvolvimento sustentável de software para um futuro mais verde. Criamos soluções digitais inovadoras
                com foco na responsabilidade ambiental e no impacto social.
              </p>
            </div>

            <div className="flex gap-2">
              <Link
                href="#get-in-touch"
                className="inline-flex text-center min-h-[2.5rem] py-1 px-8 items-center justify-center rounded-md text-sm font-medium shadow transition-colors bg-green-600 text-zinc-50 hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-600"
                prefetch={false}
              >
                Entrar em contato
              </Link>
              <Link
                href="#services"
                className="inline-flex text-center min-h-[2.5rem] py-1 px-8 items-center justify-center rounded-md border text-sm font-medium shadow transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-600"
                prefetch={false}
              >
                Saber mais
              </Link>
            </div>
          </div>

          <figure
            className="flex justify-center items-center w-[260px] h-[260px] md:w-[360px] md:h-[360px] aspect-video overflow-hidden rounded-3xl"
            onMouseMove={event => {
              const SCALE_X = 4
              const SCALE_Y = 8
              const card = event.currentTarget
              const rect = card.getBoundingClientRect()
              const x = event.clientX - rect.left
              const y = event.clientY - rect.top
              const mousePosition = { x, y }
              const cardSize = {
                width: card.offsetWidth || 0,
                height: card.offsetHeight || 0,
              }
              card.style.transform = `perspective(1000px) rotateX(${
                (mousePosition.y / cardSize.height) * -(SCALE_Y * 2) + SCALE_Y
              }deg) rotateY(${(mousePosition.x / cardSize.width) * (SCALE_X * 2) - SCALE_X}deg) translateZ(10px)`
            }}
          >
            <img
              src="/assets/logo.svg"
              width="600"
              height="600"
              alt="Hero"
              className="h-full w-full object-center drop-shadow-xl"
            />
          </figure>
        </div>
      </article>

      <article id="services" className="w-full py-12 md:py-24 bg-zinc-800">
        <div className="max-w-5xl mx-auto px-4">
          <header className="flex flex-col items-center justify-center text-center">
            <div className="inline-block rounded-lg bg-green-900 px-3 py-1 text-sm">Nossos Serviços</div>

            <h2 className="text-6xl/tight font-bold tracking-tighter">Soluções de Software</h2>
            <p className="max-w-[900px] text-zinc-500 text-xl/relaxed">
              Desde aplicações web personalizadas até aplicações móveis, oferecemos soluções digitais de ponta que
              impulsionam mudanças positivas para seu negócio.
            </p>
          </header>

          <div className="mx-auto max-w-5xl items-center gap-6 pt-12">
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <li>
                  <div className="h-full bg-zinc-900 px-6 py-8 rounded-2xl flex flex-col gap-4 items-center">
                    <img src="/assets/service-1.svg" alt="" className="w-24" />

                    <h3 className="text-xl font-bold">Desenvolvimento de soluções personalizadas</h3>
                  </div>
                </li>
                <li>
                  <div className="h-full bg-zinc-900 px-6 py-8 rounded-2xl flex flex-col gap-4 items-center">
                    <img src="/assets/service-2.svg" alt="" className="w-24" />

                    <h3 className="text-xl font-bold">
                      Aplicação de Inteligência Artificial (IA) para o contexto do seu negócio
                    </h3>
                  </div>
                </li>
                <li>
                  <div className="h-full bg-zinc-900 px-6 py-8 rounded-2xl flex flex-col gap-4 items-center">
                    <img src="/assets/service-3.svg" alt="" className="w-24" />

                    <h3 className="text-xl font-bold">Integrações com Redes Blockchain</h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      <article id="sustainability" className="w-full py-12 md:py-24">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div>
            <header className="mb-4">
              <div className="inline-block rounded-lg bg-green-900 px-3 py-1 text-sm">Sustentabilidade</div>
              <h2 className="text-4xl/tight font-bold">Comprometidos com um futuro mais verde</h2>
            </header>

            <section>
              <div className="space-y-4">
                <p className="max-w-[600px] text-zinc-500 text-lg">
                  Na Gaia Future Lab, acreditamos que a tecnologia pode ser uma força poderosa para mudanças positivas.
                  Por isso, nos dedicamos a desenvolver soluções inovadoras que impulsionam transformações positivas
                  para seu negócio e o mundo.
                </p>
                <p className="max-w-[600px] text-zinc-500 text-lg">
                  Estamos comprometidos com a construção de um futuro verde, adotando práticas empresariais responsáveis
                  que contribuem para um planeta mais saudável. Nossa missão é integrar excelência e inovação em tudo o
                  que fazemos, sempre com o objetivo de promover um impacto positivo e sustentável.
                </p>
              </div>

              <div className="flex gap-2 mt-8">
                {/* <Link
                  href="#"
                  className="inline-flex h-10 px-8 items-center justify-center rounded-md text-sm font-medium shadow transition-colors bg-green-600 text-zinc-50 hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-600"
                  prefetch={false}
                >
                  Saber mais
                </Link> */}
                <Link
                  href="#get-in-touch"
                  className="inline-flex h-10 px-8 items-center justify-center rounded-md border text-sm font-medium shadow transition-colors  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-600"
                  prefetch={false}
                >
                  Entrar em contato
                </Link>
              </div>
            </section>
          </div>

          <figure className="flex justify-center items-center w-full max-w-[360px] h-[360px] aspect-video overflow-hidden shadow-md rounded-3xl">
            <img src="/assets/hero.jpg" width="600" height="600" alt="Hero" className="h-full w-full object-cover" />
          </figure>
        </div>
      </article>

      <article id="get-in-touch" className="w-full py-24 bg-zinc-800">
        <div className="max-w-5xl mx-auto px-4 flex flex-col gap-4">
          <header className="space-y-3 text-center">
            <h2 className="text-5xl font-bold">Entrar em contato</h2>
            <p className="text-lg mx-auto max-w-[700px] text-zinc-500">
              Pronto para fazer parceria conosco e criar um futuro mais sustentável? Entre em contato com nossa equipe
              para discutir seu projeto.
            </p>
          </header>

          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex flex-col md:flex-row gap-2">
              {/* <input
                type="email"
                placeholder="Digite seu e-mail"
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1 bg-zinc-900 text-zinc-200 border-zinc-700 placeholder:text-zinc-500"
              /> */}
              <a href="https://forms.gle/kKBrNuLc1gpKXJC89" target="_blank" className="mx-auto">
                <button
                  type="button"
                  className="inline-flex h-10 px-8 items-center justify-center rounded-md text-sm font-medium shadow transition-colors bg-green-600 text-zinc-50 hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-600"
                >
                  Formulário para contato
                </button>
              </a>
            </form>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center">
              Entraremos em contato com você o mais breve possível.
            </p>
          </div>
        </div>
      </article>
    </main>
  )
}
