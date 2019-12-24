import { css } from '@emotion/core';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/themes/prism-okaidia.css';
import React, { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Video, SEO, Quote } from '@codinators/gatsby-shared-library';
import GlobalStyle from '../01-elements/GlobalStyles';
import Footer from '../03-composites/Footer';
import Header from '../03-composites/Header';
import ImageGallery from '../03-composites/ImageGallery';

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
    const shortcodes = { Video, SEO, Quote, ImageGallery };

    return (
        <MDXProvider components={shortcodes}>
            <GlobalStyle />
            <Header />
            <div css={styles.siteContent}>{children}</div>
            <Footer />
        </MDXProvider>
    );
};

export default Layout;
