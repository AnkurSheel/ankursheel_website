const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        '../**/input/**/*.cshtml',
    ],
    safelist: [
        'appstore-badges-container'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                cookie: ['Cookie', 'Inter', ...defaultTheme.fontFamily.sans],
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        fontFamily: `${theme('fontFamily.sans')}`,
                        letterSpacing: theme('letterSpacing.wide'),
                        lineHeight: theme('lineHeight.relaxed'),
                        a: {
                            textDecoration: 'none',
                            '&:hover': {
                                textDecoration: `underline wavy`,
                            },
                        },
                        'blockquote > p:first-of-type': {
                            '&:before': {
                                fontSize: '4rem',
                                position: 'absolute',
                                marginInlineStart: '-0.5em',
                                content: "'\\201C'",
                            },
                            '&:after': {
                                fontSize: '4rem',
                                position: 'absolute',
                                marginBlockStart: '0.1em',
                                content: "'\\201D'",
                            },
                        },

                        'blockquote p:last-of-type::after': false,
                        'blockquote cite:before': {
                            content: "'--'",
                        },
                        'code::before': false,
                        'code::after': false,
                        code: {
                            'border-radius': '0.25rem',
                            padding: '0.15rem 0.3rem',
                            borderWidth: '2px',
                            borderColor: 'rgba(0,0,0,0.1)',
                        },
                    },
                },
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
