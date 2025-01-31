import Link from "next/link";
import { LogoIcon } from "../atoms/Logo";

export const Header = () => {
  return (
    <header
      className="
        flex items-center justify-between 
        h-[6.875rem] w-full mx-auto px-9 
        absolute z-[10] bg-[#fafafa] text-green-600
        shadow-[0_1px_4px_0_rgba(0,0,0,0.15)]
      "
    >
      <Link href="/" className="flex items-center gap-2">
        <LogoIcon width={44} height={44} fillColor="#16a34a" />
        <span className="text-2xl font-light tracking-normal">
          Gaia Future lab.
        </span>
      </Link>

      <input type="checkbox" id="menu-toggle" className="hidden peer" />
      <label htmlFor="menu-toggle" className="cursor-pointer md:hidden">
        <svg
          className="w-6 h-6 text-zinc-20"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </label>

      <nav
        id="menu"
        className="hidden absolute left-0 top-[6.875rem] w-full px-4 md:static md:block md:w-fit"
      >
        <ul className="flex flex-1 flex-col p-4 rounded md:bg-transparent md:flex-row gap-4">
          <li>
            <Link
              href="/"
              className="
                text-base              
                font-semibold          
                leading-relaxed        
                tracking-wide          
                text-green-700         
                hover:text-green-900   
                hover:underline
                underline-offset-4
                transition-colors
                duration-150
            "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#services"
              className="
                text-base              
                font-semibold          
                leading-relaxed        
                tracking-wide          
                text-green-700         
                hover:text-green-900   
                hover:underline
                underline-offset-4
                transition-colors
                duration-150
            "
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              href="/#sustainability"
              className="
                text-base              
                font-semibold          
                leading-relaxed        
                tracking-wide          
                text-green-700         
                hover:text-green-900   
                hover:underline
                underline-offset-4
                transition-colors
                duration-150
            "
            >
              Sobre nós
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="
                text-base              
                font-semibold          
                leading-relaxed        
                tracking-wide          
                text-green-700         
                hover:text-green-900   
                hover:underline
                underline-offset-4
                transition-colors
                duration-150
            "
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
