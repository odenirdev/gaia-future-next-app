import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <>
      <main className="flex-1">
        <section
          id="hero"
          className="w-full min-h-[calc(100vh-4rem)] pt-[6.875rem] pb-[3rem] md:pb-[6.875rem] relative flex items-center"
        >
          <div className="absolute inset-0 z-[-1] mix-blend-overlay">
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

          <div className="max-w-5xl w-full mx-auto flex flex-col px-8 md:flex-row gap-8 md:gap-4 items-center">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl">
                  Codificando o Futuro
                </h1>
                <p className="mx-auto max-w-[700px] text-lg md:text-xl dark:text-gray-400 mt-4">
                  Somos uma empresa de engenharia de software preocupada com o
                  futuro verde do planeta.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-green-900 px-3 py-1 text-sm">
                  Nossa Missão
                </div>
                <p className="mx-auto max-w-[700px] text-lg md:text-xl dark:text-gray-400">
                  Impulsionar a inovação tecnológica em direção a um futuro
                  sustentável. Nosso compromisso é desenvolver soluções de
                  software e data science que capacitem o setor privado e
                  público a enfrentar os desafios globais, promovendo o
                  desenvolvimento ambiental, social e econômico.
                </p>
                <div className="space-x-4">
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
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-900 px-3 py-1 text-sm">
                  Nossos Valores
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Driving Positive Change
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  At GaiaFuture, we are guided by a set of core values that
                  shape our approach to sustainable technology and environmental
                  responsibility.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-4">
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    width="300"
                    height="300"
                    alt="Value"
                    className="aspect-square object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Innovation</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We are committed to pushing the boundaries of sustainable
                    technology, constantly exploring new and innovative
                    solutions to drive positive change.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    width="300"
                    height="300"
                    alt="Value"
                    className="aspect-square object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Sustainability</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Sustainability is at the core of everything we do. We are
                    dedicated to developing solutions that minimize our
                    environmental impact and promote long-term sustainability.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    width="300"
                    height="300"
                    alt="Value"
                    className="aspect-square object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Collaboration</h3>
                  <p className="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-800 w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-900 px-3 py-1 text-sm">
                  Nosso Time
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Conheça a equipe do Gaia Future Lab
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Nossa equipe de profissionais apaixonados e experientes está
                  dedicada a criar um futuro sustentável através de soluções
                  inovadoras Soluções de software.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-4">
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    width="300"
                    height="300"
                    alt="Team Member"
                    className="aspect-square object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Jane Doe</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Lead Software Engineer
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Jane is a seasoned software engineer with a passion for
                    building sustainable, eco-friendly applications.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    width="300"
                    height="300"
                    alt="Team Member"
                    className="aspect-square object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">John Smith</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Senior Software Engineer
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    John is an expert in sustainable software development and
                    has a deep understanding of green technology.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg"
                    width="300"
                    height="300"
                    alt="Team Member"
                    className="aspect-square object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold">Sarah Lee</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Sustainability Consultant
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Sarah is an expert in sustainable business practices and
                    helps our clients integrate eco-friendly solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <article id="services" className="w-full py-12 md:py-24">
          <div className="max-w-5xl mx-auto px-4">
            <header className="flex flex-col items-center justify-center text-center">
              <div className="inline-block rounded-lg bg-green-900 px-3 py-1 text-sm">
                Nossos Serviços
              </div>

              <h2 className="text-4xl md:text-6xl/tight font-bold tracking-tighter">
                Soluções de Software
              </h2>
              <p className="max-w-[900px] text-zinc-500 text-md md:text-xl/relaxed">
                Desde aplicações web personalizadas até aplicações móveis,
                oferecemos soluções digitais de ponta que impulsionam mudanças
                positivas para seu negócio.
              </p>
            </header>

            <div className="mx-auto max-w-5xl items-center gap-6 pt-6 md:pt-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                  <li>
                    <div className="bg-zinc-800 px-6 py-4 rounded-2xl flex gap-4 items-center h-full">
                      <Image
                        src="/assets/service-1.svg"
                        alt=""
                        className="w-14"
                        width={96}
                        height={96}
                      />

                      <h3 className="text-md">
                        Desenvolvimento de soluções personalizadas
                      </h3>
                    </div>
                  </li>
                  <li>
                    <div className="bg-zinc-800 px-6 py-4 rounded-2xl flex gap-4 items-center h-full">
                      <Image
                        src="/assets/service-2.svg"
                        alt=""
                        className="w-14"
                        width={96}
                        height={96}
                      />

                      <h3 className="text-md">
                        Aplicação de Inteligência Artificial (IA) para o
                        contexto do seu negócio
                      </h3>
                    </div>
                  </li>
                  <li>
                    <div className="bg-zinc-800 px-6 py-4 rounded-2xl flex gap-4 items-center h-full">
                      <Image
                        src="/assets/service-3.svg"
                        alt=""
                        className="w-14"
                        width={96}
                        height={96}
                      />

                      <h3 className="text-md">
                        Integrações com Redes Blockchain
                      </h3>
                    </div>
                  </li>
                </ul>

                <ul className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center">
                  <li>
                    <div className="bg-zinc-800 px-6 py-4 rounded-2xl flex gap-4 items-center h-full">
                      <Image
                        src="/assets/service-4.svg"
                        alt=""
                        className="w-14"
                        width={96}
                        height={96}
                      />

                      <h3 className="text-md">Consultoria Estratégica em TI</h3>
                    </div>
                  </li>
                  <li>
                    <div className="bg-zinc-800 px-6 py-4 rounded-2xl flex gap-4 items-center h-full">
                      <Image
                        src="/assets/service-5.svg"
                        alt=""
                        className="w-14"
                        width={96}
                        height={96}
                      />

                      <h3 className="text-md">Resoluções ágeis de problemas</h3>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <article id="get-in-touch" className="bg-zinc-800 w-full py-24">
          <div className="max-w-5xl mx-auto px-4 flex flex-col gap-4">
            <header className="space-y-1 md:space-y-2 text-center">
              <h2 className="text-3xl md:text-5xl font-bold">
                Entrar em contato
              </h2>
              <p className="text-md md:text-lg mx-auto max-w-[700px] text-zinc-500">
                Quer desenvolver um software sob medida para o seu negócio? Fale
                com a nossa equipe e vamos discutir seu projeto.
              </p>
            </header>

            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col md:flex-row gap-2">
                {/* <input
                type="email"
                placeholder="Digite seu e-mail"
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1 bg-zinc-900 text-zinc-200 border-zinc-700 placeholder:text-zinc-500"
              /> */}
                <a
                  href="https://forms.gle/kKBrNuLc1gpKXJC89"
                  target="_blank"
                  className="mx-auto"
                >
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
    </>
  );
}
