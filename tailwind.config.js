/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            spacing: {
                'h-header': '60px',
                'p-body': '32px',
            },
        },
    },
    plugins: ['prettier-plugin-tailwindcss'],
};
