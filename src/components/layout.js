import styled from '@emotion/styled';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/themes/prism-tomorrow.css';
import React from 'react';
import Helmet from 'react-helmet';
import { media } from '../tokens';
import { GlobalStyle } from './Commons';
import Footer from './Footer';
import Header from './Header';

const SiteContent = styled.div`
    margin: 0 0;

    @media ${media.medium} {
        margin: 60px 0;
    }
    /**
 * If you already use line highlighting
 */

    /* Adjust the position of the line numbers */
    .gatsby-highlight pre[class*='language-'].line-numbers {
        padding-left: 2.8em;
    }

    /**
 * If you only want to use line numbering
 */

    .gatsby-highlight pre[class*='language-'].line-numbers {
        padding: 0;
        padding-left: 2.8em;
        overflow: initial;
    }
`;

class Template extends React.Component {
    render() {
        const { children } = this.props;

        return (
            <>
                <Helmet>
                    <link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet" />
                </Helmet>
                <GlobalStyle />
                <Header />
                <SiteContent>{children}</SiteContent>
                <Footer />
            </>
        );
    }
}

export default Template;
