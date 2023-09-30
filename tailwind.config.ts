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
        'homepage-background': "url('../images/homepage.jpg')",
        'math-background': "url('.././images/math.svg')",
        'science-background': "url('.././images/science.svg')",
        'ee-background': "url('.././images/electrical.svg')"
      },
    },
  },
  plugins: [],
}
export default config
