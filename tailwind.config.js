/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'Red-500': 'hsl(1, 90%, 64%)',
                'Blue-950': 'hsl(219, 85%, 26%)',
                'White': 'hsl(0, 100%, 100%)',
                'Navy-50': 'hsl(210, 60%, 98%)',
                'Blue-100': 'hsl(211, 68%, 94%)',
                'Navy-100': 'hsl(205, 33%, 90%)',
                'Gray-500': 'hsl(219, 14%, 63%)',
                'Gray-600': 'hsl(219, 12%, 42%)',
                'Navy-950': 'hsl(224, 21%, 14%)',

            },
            fontFamily: {
                'Plus+Jakarta+Sans': ['Plus Jakarta Sans', 'sans-serif'],
            },
            fontWeight: {
                'normal': '500',
                'bold': '800',
            },
            screens: {
                mobile: '640px',
                desktop: '1440px',
            },
            letterSpacing: {
                // extra: '0.2em',
            },
            // backgroundImage: {
            //     'sidebar-desktop': "url('/src/assets/images/bg-sidebar-desktop.svg')",
            //     'sidebar-mobile': "url('/src/assets/images/bg-sidebar-mobile.svg')",
            // }
        },
    },
    plugins: [],
};