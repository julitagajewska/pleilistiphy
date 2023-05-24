/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    darkMode: 'class',
    content: {
        relative: true,
        files: ["public/index.html", "public/landing.html"]
    },
    theme: {
        extend: {
            colors: {
                'accent': '#6959CB',
                'accent-light': '#8C79FF',
                'button': '#242531',
                'button-hover': '#2A2C44',
                'button-active': '#6959CB',
                'button-active-hover': '#8C79FF',
            },
        },
    },
    plugins: [],
}