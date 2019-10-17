import { css } from '@emotion/core';
import React from 'react';
import { Cat } from 'react-kawaii';
import { oc } from 'ts-optchain';
import { SEO } from '@codinators/gatsby-shared-library';
import Wrapper from '../01-elements/Wrapper';
import RecentPosts from '../02-components/RecentPosts';
import Layout from '../04-layouts/layout';
import useSiteMetadata from '../hooks/use-site-config';

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
    const siteMetaData = useSiteMetadata();
    const siteUrl = oc(siteMetaData).siteUrl('');
    return (
        <Layout>
            <SEO title="Page Not Found" description="Page Not Found" url={`${siteUrl}/404.html`} isBlog={false} />
            <main css={Wrapper}>
                <h1 css={styles.mainTitle}>Oh No! Page Not Found</h1>
                <Cat css={styles.cat} size={160} mood="ko" color="#596881" />
                <p css={styles.text}>
                    Looks like you&apos;ve followed a broken link or entered a URL that doesn&apos;t exist on this site.
                    I am in the the process of migrating the website from Wordpress to Gatsby so its possible that the
                    article has not yet been migrated.
                </p>

                <h2 css={styles.subTitle}>Recent Posts</h2>

                <RecentPosts />
            </main>
        </Layout>
    );
};

export default NotFoundPage;
