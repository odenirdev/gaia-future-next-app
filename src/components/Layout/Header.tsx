'use client'

import React from 'react'

import { List } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export const Header: React.FC = () => {
  const [show, setShow] = React.useState(false)

  const handleShow = () => {
    setShow(!show)
  }

  return (
    <header className="flex items-center justify-between h-[6.875rem] w-full mx-auto px-9 absolute z-[10]">
      <img src="/assets/logo.svg" alt="" className="w-[2.75rem]" />

      <button className="md:hidden" type="button" onClick={handleShow}>
        <List size={44} />
      </button>

      <nav
        className="data-[show=true]:block hidden absolute left-0 top-[6.875rem] w-full px-4 md:static md:block md:w-fit"
        data-show={show}
      >
        <ul className="flex flex-col bg-[#252525] p-4 rounded md:bg-transparent md:flex-row gap-4">
          <li>
            <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
              Serviços
            </Link>
          </li>

          <li>
            <Link
              href="#sustainability"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Sustentabilidade
            </Link>
          </li>

          <li>
            <Link
              href="#get-in-touch"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
