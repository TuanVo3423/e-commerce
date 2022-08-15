/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    important: '#root',
    // theme: {
    //     extend: {},
    // },
    theme: {
        extend: {
            width: {
                '1/7': '14.2857143%',
                '2/7': '28.5714286%',
                '30%': '30%',
                '3/7': '42.8571429%',
                '4/7': '57.1428571%',
                '5/7': '71.4285714%',
                '89/100': '89%',
            },
            translate: {
                '1/10': '10%',
                '1/7': '14.2857143%',
                '2/7': '28.5714286%',
                '3/7': '42.8571429%',
                '4/7': '57.1428571%',
                '5/7': '71.4285714%',
                '6/7': '85.7142857%',
            },
        },
    },
    plugins: [],
};
