import { graphql } from 'gatsby';
import React from 'react';
import Wrapper from '../01-elements/Wrapper';
import SEO from '../02-components/SEO';
import Hero from '../03-composites/Hero';
import Pagination from '../03-composites/Pagination';
import PostsList from '../03-composites/PostsList';
import Layout from '../04-layouts/layout';
import { BlogListQuery, SitePageContext } from '../graphqlTypes';

interface BlogListProps {
    data: Pick<BlogListQuery, 'posts' | 'site'>;
    pageContext: Pick<SitePageContext, 'limit' | 'currentPage' | 'nbPages'>;
}

const BlogList = (props: BlogListProps) => {
    const {
        data: {
            site,
            posts: { edges: posts },
        },
    } = props;
    const siteMetaData = site && site.siteMetadata;
    const description = (siteMetaData && siteMetaData.description) || '';
    const { pageContext } = props;

    return (
        <Layout>
            <SEO isBlog />
            <Hero title={description} />

            <main css={Wrapper}>
                <PostsList posts={posts} />
                <Pagination numberOfPages={pageContext.nbPages} currentPage={pageContext.currentPage} />
            </main>
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
            filter: { fileAbsolutePath: { regex: "//content/posts//" }, frontmatter: { published: { eq: true } } }
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
