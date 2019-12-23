import { css, Global } from '@emotion/core';
import React from 'react';
import { colors } from '../tokens';

const GlobalStyle = () => (
    <Global
        styles={css`
            *,
            *:before,
            *:after {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }

            /* Remove default margin */
            body,
            h1,
            h2,
            h3,
            h4,
            p,
            li,
            figure,
            figcaption,
            blockquote,
            dl,
            dd {
                margin: 0;
            }

            ul,
            ol {
                margin-left: 1em;
            }

            /* Set core body defaults */
            body {
                min-height: 100vh;
                scroll-behavior: smooth;
                text-rendering: optimizeSpeed;
                line-height: 1.5;
                color: ${colors.text};
                background: ${colors.background};
                font-family: -apple-system, BlinkMacSystemFont, 'Segoue UI', Roboto, Arial, sans-serif;
                font-size: 16px;
                > div: {
                    margintop: 0;
                }
            }

            a {
                text-decoration-skip-ink: auto;
                &:hover {
                    text-decoration-style: dashed;
                }
            }

            /* Make images easier to work with */
            img {
                max-width: 100%;
                display: block;
                height: auto;
                border: 0;
            }

            /* Natural flow and rhythm in articles by default */
            article > * + * {
                margin-top: 1em;
            }

            /* Inherit fonts for inputs and buttons */
            input,
            button,
            textarea,
            select {
                font: inherit;
            }

            /* Remove all animations and transitions for people that prefer not to see them */
            @media (prefers-reduced-motion: reduce) {
                * {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                    scroll-behavior: auto !important;
                }
            }
        `}
    />
);

export default GlobalStyle;
