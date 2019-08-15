import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Text } from '../components/Commons';
import Layout from '../components/layout';
import RelatedPosts from '../components/RelatedPosts';
import SEO from '../components/SEO';
import Wrapper from '../components/Wrapper';

const MainTitle = styled.h1`
    line-height: 1.5;
    text-align: center;
    font-size: 3rem;
`;

const Ghost = styled.p`
    line-height: 1.5;
    text-align: center;
    font-size: 7rem;
`;

const SubTitle = styled.h2`
    padding-top: 40px;
    line-height: 1.2;
    border-top: 1px solid #ececec;
    margin-top: 44px;
`;

const NotFoundPage = props => {
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
        <Layout location={props.location} noCover={true}>
            <SEO title="Page Not Found" />
            <main css={Wrapper}>
                <MainTitle>404 Page Not Found</MainTitle>
                <Ghost>👻</Ghost>
                <Text>
                    Looks like you&apos;ve followed a broken link or entered a URL that doesn&apos;t exist on this site.
                </Text>

                <SubTitle>Recent Posts</SubTitle>

                <RelatedPosts posts={posts} />
            </main>
        </Layout>
    );
};

export default NotFoundPage;
