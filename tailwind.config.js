/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            animation: {
                'fade-in-up': 'fadeInUp 1s ease-out',
                'gradient': 'gradient 3s ease infinite',
                'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce': 'bounce 1s infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(30px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                },
                gradient: {
                    '0%, 100%': {
                        'background-position': '0% 50%'
                    },
                    '50%': {
                        'background-position': '100% 50%'
                    }
                }
            },
            backgroundSize: {
                '200%': '200% 200%'
            }
        },
    },
    plugins: [],
}