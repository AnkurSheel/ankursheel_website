import { graphql } from 'gatsby';
import React from 'react';
import Wrapper from '../01-elements/Wrapper';
import SEO from '../02-components/SEO';
import Hero from '../03-composites/Hero';
import PostsList from '../03-composites/PostsList';
import Layout from '../04-layouts/layout';
import { PostsByTagQuery } from '../graphqlTypes';

interface TagsProps {
    data: Pick<PostsByTagQuery, 'posts'>;
    pageContext: {
        tag: string;
    };
}

const Tags = (props: TagsProps) => {
    const {
        pageContext: { tag },
        data: {
            posts: { edges: posts },
        },
    } = props;
    const pageTitle = `#${tag}`;

    return (
        <Layout>
            <SEO title={pageTitle} />
            <Hero title={pageTitle} />

            <main css={Wrapper}>
                <h1>Posts tagged as &quot;{tag}&quot;</h1>
                <PostsList posts={posts} />
            </main>
        </Layout>
    );
};

export default Tags;

export const pageQuery = graphql`
    query PostsByTag($tagRegex: String!) {
        posts: allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { regex: $tagRegex }, published: { eq: true } } }
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
`;
