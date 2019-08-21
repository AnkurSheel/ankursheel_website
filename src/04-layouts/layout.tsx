import { css } from '@emotion/core';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/themes/prism-okaidia.css';
import React, { ReactNode } from 'react';
import { GlobalStyle } from '../01-elements/GlobalStyles';
import Footer from '../03-composites/Footer';
import Header from '../03-composites/Header';

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
