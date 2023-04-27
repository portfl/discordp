/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Golos Text", "sans-serif"]
      },
      backgroundColor: {
        'cinza-discord': '#1e1f22',
        'comunidade-color': '#2b2d31',
        'area-chat-color': '#313338',
        'infoUserColor': '#232428',
        'searchInput': '#202225',
        'inputText': '#40444B',
        'hovercolor': '#3f4248',
      },
      colors: {
        'font-color': '#f2f3f5',
        'placeholderColor': '#6F737A',
        'textSearchCOlor': '#6F737A',
        'colorCargo': '#858b93',
        'channelColor': '#7f858d',
      },
    },
  },
  plugins: [],
}
