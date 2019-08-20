import { css } from '@emotion/core';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/themes/prism-okaidia.css';
import React, { ReactNode } from 'react';
import Footer from './Footer';
import { GlobalStyle } from './GlobalStyles';
import Header from './header/Header';

const styles = {
    siteContent: css({
        margin: 0,
        '@media (min-width: 700px)': {
            margin: '60px 0',
        },
    }),
};

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <div css={styles.siteContent}>{children}</div>
            <Footer />
        </>
    );
};

export default Layout;
