import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Text } from '../components/Commons';
import Layout from '../components/layout';
import RelatedPosts from '../components/RelatedPosts';
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
        borderTop: '1px solid #ececec',
        margin: '2.5rem',
    }),
    ghost: css({
        lineHeight: 1.5,
        textAlign: 'center',
        fontSize: '7rem',
    }),
};

const NotFoundPage = () => {
    const data = useStaticQuery(graphql`
        query {
            posts: allMdx(
                sort: { fields: [frontmatter___date], order: DESC }
                filter: { fileAbsolutePath: { regex: "//content/posts//" } }
                limit: 5
            ) {
                edges {
                    node {
                        excerpt
                        frontmatter {
                            date(formatString: "DD MMMM, YYYY")
                            title
                            tags
                            slug
                        }
                    }
                }
            }
        }
    `);

    const posts = data.posts.edges;

    return (
        <Layout>
            <SEO title="Page Not Found" />
            <main css={Wrapper}>
                <h1 css={styles.mainTitle}>404 Page Not Found</h1>
                <p css={styles.ghost}>👻</p>
                <Text>
                    Looks like you&apos;ve followed a broken link or entered a URL that doesn&apos;t exist on this site.
                </Text>

                <h2 css={styles.subTitle}>Recent Posts</h2>

                <RelatedPosts posts={posts} />
            </main>
        </Layout>
    );
};

export default NotFoundPage;
