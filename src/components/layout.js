import styled from '@emotion/styled';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/themes/prism-okaidia.css';
import React from 'react';
import { media } from '../tokens';
import { GlobalStyle } from './Commons';
import Footer from './Footer';
import Header from './Header';

const SiteContent = styled.div`
    margin: 0 0;

    @media ${media.medium} {
        margin: 60px 0;
    }
`;

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <SiteContent>{children}</SiteContent>
            <Footer />
        </>
    );
};

export default Layout;
