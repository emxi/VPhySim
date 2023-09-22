/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            spacing: {
                'h-header': '60px',
                'p-body': '32px',
            },
            colors: {
                primary: {
                    50: '#f9f5ff',
                    100: '#f0e7ff',
                    200: '#e4d3ff',
                    300: '#cfb0ff',
                    400: '#b27eff',
                    500: '#8b3dff',
                    600: '#7d2af3',
                    700: '#6a1ad6',
                    800: '#5c1aaf',
                    900: '#4c178c',
                    950: '#310269',
                },
            },
            zIndex: {
                'z-header': 10,
            },
        },
    },
    plugins: ['prettier-plugin-tailwindcss'],
};
