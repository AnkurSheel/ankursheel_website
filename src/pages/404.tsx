import { css } from '@emotion/core';
import React from 'react';
import { Cat } from 'react-kawaii';
import Layout from '../components/layout';
import RecentPosts from '../components/RecentPosts';
import SEO from '../components/SEO';
import Wrapper from '../components/Wrapper';

const styles = {
    mainTitle: css({
        lineHeight: '1.5',
        textAlign: 'center',
        fontSize: '3rem',
    }),
    subTitle: css({
        paddingTop: '2.5rem',
        lineHeight: 1.2,
        borderTop: '3px solid #ececec',
        margin: '2.5rem 0 1rem 0',
    }),
    cat: css({
        margin: '2.5rem 0',
        textAlign: 'center',
    }),
    text: css({
        lineHeight: 1.6,
        margin: '1em 0',
    }),
};

const NotFoundPage = () => {
    return (
        <Layout>
            <SEO title="Page Not Found" />
            <main css={Wrapper}>
                <h1 css={styles.mainTitle}>Oh No! Page Not Found</h1>
                <Cat css={styles.cat} size={160} mood="ko" color="#596881" />
                <p css={styles.text}>
                    Looks like you&apos;ve followed a broken link or entered a URL that doesn&apos;t exist on this site.
                </p>

                <h2 css={styles.subTitle}>Recent Posts</h2>

                <RecentPosts />
            </main>
        </Layout>
    );
};

export default NotFoundPage;
