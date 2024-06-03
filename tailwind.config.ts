import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        buttonPrimary: 'linear-gradient(#fff, #fff) padding-box, linear-gradient(60deg, #00f, #00e8ff) border-box',
      },
    },
  },
  plugins: [],
}
export default config
