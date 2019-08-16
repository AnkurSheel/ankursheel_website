import { graphql } from 'gatsby';
import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/layout';
import Pagination from '../components/Pagination';
import PostsList from '../components/PostsList';
import SEO from '../components/SEO';
import Wrapper from '../components/Wrapper';
import { BlogListQuery } from '../graphqlTypes';

interface BlogListProps {
    data: Pick<BlogListQuery, 'posts' | 'site'>;
    pageContext: {
        limit: number;
        currentPage: number;
        nbPages: number;
    };
}

const BlogList = (props: BlogListProps) => {
    const siteMetaData = props.data.site && props.data.site.siteMetadata;
    const title = (siteMetaData && siteMetaData.title) || '';
    const description = siteMetaData && siteMetaData.description;
    const posts = props.data.posts.edges;
    const { pageContext } = props;

    return (
        <Layout>
            <SEO isBlog />
            <Hero title={title} subTitle={description} />

            <main css={Wrapper}>
                <PostsList posts={posts} />
            </main>

            <Pagination nbPages={pageContext.nbPages} currentPage={pageContext.currentPage} />
        </Layout>
    );
};

export default BlogList;

export const pageQuery = graphql`
    query BlogList($skip: Int!, $limit: Int!) {
        site {
            siteMetadata {
                title
                description
            }
        }
        posts: allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { fileAbsolutePath: { regex: "//content/posts//" } }
            limit: $limit
            skip: $skip
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
