// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require('tailwindcss/colors');

const commonColors = {
   
};

module.exports = {
    mode: 'jit',
    content: [
        './src/pages/**/**/*.{js,ts,jsx,tsx}',
        './src/components/**/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        container: {
            center: true,
        },
        fontWeight: {
            light: 300,
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            extrabold: 800,
            black: 900,
        },
        fontFamily: {
            sans: ['Barlow', 'sans-serif'],
            serif: ['serif'],
            inter: ['Inter', 'sans-serif'],
        },
        fontSize: {
            xxs: [
                '.625rem',
                {
                    letterSpacing: '-0.01em',
                    lineHeight: '1rem',
                },
            ], // Outline 10px
            xs: [
                '.75rem',
                {
                    letterSpacing: '-0.01em',
                    lineHeight: '1.125rem',
                },
            ], // Caption 12px
            sm: [
                '.875rem',
                {
                    letterSpacing: '-0.01em',
                    lineHeight: '1.3125rem',
                },
            ], // Small text 14px
            tiny: [
                '.875rem',
                {
                    letterSpacing: '-0.01em',
                    lineHeight: '1.3125rem',
                },
            ], // 14px
            base: [
                '1rem',
                {
                    letterSpacing: '-0.01em',
                    lineHeight: '1.5rem',
                },
            ], // 16px
            lg: [
                '1.125rem',
                {
                    letterSpacing: '-0.01em',
                    lineHeight: '1.75rem',
                },
            ], // Body 2 18px
            xl: [
                '1.3125rem',
                {
                    letterSpacing: '-0.01em',
                    lineHeight: '2rem',
                },
            ], // Body 1, Heading 6 21px
            '2xl': [
                '1.5rem',
                {
                    letterSpacing: '-0.01em',
                    lineHeight: '2.25rem',
                },
            ], // Heading 5 24px
            '3xl': [
                '1.75rem',
                {
                    letterSpacing: '-0.01em',
                    lineHeight: '2.5rem',
                },
            ], // Heading 4 28px
            '4xl': [
                '2.25rem',
                {
                    letterSpacing: '-0.01em',
                    lineHeight: '3.5rem',
                },
            ], // Heading 3 36px
            '5xl': [
                '2.5rem',
                {
                    letterSpacing: '-0.01em',
                    lineHeight: '3.5rem',
                },
            ], // Heading 2 40px
            '6xl': [
                '4rem',
                {
                    letterSpacing: '-0.01em',
                    lineHeight: '4.5rem',
                },
            ], // Heading 1 64px
            '5.5xl': [
                '3.5rem',
                {
                    letterSpacing: '-0.01em',
                    lineHeight: '4.25rem',
                },
            ], // Heading 2 56px
        },
        // TODO split text, background
        colors: {
            transparent: 'transparent',
            current: 'currentColor',

        },
        extend: {
           
            spacing: {
                128: '32rem',
                144: '36rem',
            },
            borderColor: ['group-focus'],
            fontWeight: { bold: 600 },
            dropShadow: {
             
            },
            boxShadow: {
            },
            cursor: {
                grabbing: 'grabbing'
            }
        },
    },
    variants: {
        extend: {
            backgroundColor: ['checked'],
            borderColor: ['checked'],
            display: ['group-hover'],
            visibility: ['group-hover'],
            cursor: ['grabbing'],
        },
    },
    plugins: [
      
    ],
};
