import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';
import { colors } from '../tokens';

export const GlobalStyle = () => (
    <Global
        styles={css(`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Lato", sans-serif;
  color: ${colors.text};
  background-color: ${colors.background};
}

img {
  max-width: 100%;
  height: auto;
  vertical-align: middle;
  border: 0;
}

a {
  text-decoration: none;
  color: ${colors.primary};
}

ul,
ol {
  padding-left: 2em;
  margin: 1em 0 0 0;
}
`)}
    ></Global>
);

export const StyledLink = styled(Link)`
    border-bottom: 1px dashed ${colors.primary};

    &:hover {
        border-bottom-style: solid;
    }
`;

export const Text = styled.p`
    line-height: 1.6;
    margin: 1em 0 0 0;
`;
