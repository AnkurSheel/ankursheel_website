import { css, Global } from '@emotion/core';
import React from 'react';
import { colors } from '../tokens';

const GlobalStyle = () => (
    <Global
        styles={css({
            '*, *:before, *:after': {
                boxSizing: 'border-box',
                margin: 0,
                padding: 0,
            },
            body: {
                color: `${colors.text}`,
                backgroundColor: `${colors.background}`,
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoue UI", Roboto, Arial, sans-serif',
                lineHeight: 1.5,
                fontSize: 16,
                '> div': {
                    marginTop: 0,
                },
            },
            img: {
                maxWidth: '100%',
                height: 'auto',
                verticalAlign: 'middle',
                border: 0,
            },
            a: {
                textDecoration: 'none',
                color: `${colors.primary}`,
                borderBottom: ` 1px dashed ${colors.primary}`,
                '&:hover': {
                    borderBottomStyle: 'solid',
                },
            },
            ul: {
                paddingLeft: '2em',
            },
            ol: {
                paddingLeft: '2em',
            },
        })}
    />
);

export default GlobalStyle;
