/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow-inset': '0 0 16px 4px rgba(255, 255, 255, 0.1), inset 0 5px 8px rgba(255, 255, 255, 0.8)',
        'glow-inset2': '0 0 26px 4px rgba(255, 255, 255, 0.1), inset 0 5px 12px #ECB9FF',
      },

      backgroundImage: {
        'btn-gradient': 'linear-gradient(#3C2781 3%, #8370CD 50%, #3C2781 94%)',
        'btn-hover': 'linear-gradient(#3C2781 3%, #7453d8 50%, #3C2781 94%)',
        'radial-gradient': 'radial-gradient(circle, #8366D7 0%, #241d43 52%, #15181D 100%)',
        'radial-grad': 'radial-gradient(circle at 102% 2%, #FCFFFC 3%, #ECB9FF 10%, #6E4ED9 20%, #2E2355 52%, #14171C 90%)',
        'radial-grad2': 'radial-gradient(circle at 102% 110%, #FCFFFC 3%, #ECB9FF 10%, #6E4ED9 20%, #2E2355 52%, #14171C 90%)',
        'radial-grad3': 'radial-gradient(circle at 120% 120%, #1E1E1E 30%, #8366D7 100%)',
      },

      fontFamily: {
        "pStrike": ['Protest Strike', 'sans Serif'],
        "lbr": ['Libre Baskerville', 'serif'],
        "pLbr": ['Proza Libre', 'sans Serif', 'italic', '500'],
      },
    },
  },
  plugins: [],
}

