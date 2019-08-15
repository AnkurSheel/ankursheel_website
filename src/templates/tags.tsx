import { graphql } from 'gatsby';
import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/layout';
import PostsList from '../components/PostsList';
import SEO from '../components/SEO';
import Wrapper from '../components/Wrapper';
import { PostsByTagQuery } from '../graphqlTypes';

type TagsProps = {
    data: Pick<PostsByTagQuery, 'posts'>;
    pageContext: {
        tag: string;
    };
};

const Tags = (props: TagsProps) => {
    const pageTitle = `#${props.pageContext.tag}`;
    const posts = props.data.posts.edges;

    return (
        <Layout>
            <SEO title={pageTitle} />
            <Hero title={pageTitle} />

            <main css={Wrapper}>
                <h1>Posts tagged as &quot;{props.pageContext.tag}&quot;</h1>
                <PostsList posts={posts} />
            </main>
        </Layout>
    );
};

export default Tags;

export const pageQuery = graphql`
    query PostsByTag($tag: String!) {
        posts: allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { eq: $tag } } }
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
