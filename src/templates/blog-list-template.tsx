import { graphql } from 'gatsby';
import React from 'react';
import { oc } from 'ts-optchain';
import { SEO } from '@codinators/gatsby-shared-library';
import Wrapper from '../01-elements/Wrapper';
import Hero from '../03-composites/Hero';
import Pagination from '../03-composites/Pagination';
import PostsList from '../03-composites/PostsList';
import Layout from '../04-layouts/layout';
import { BlogListQuery, SitePageContext } from '../graphqlTypes';
import useSiteMetadata from '../hooks/use-site-config';

interface BlogListProps {
    data: Pick<BlogListQuery, 'posts' | 'site'>;
    pageContext: Pick<SitePageContext, 'limit' | 'currentPage' | 'nbPages'>;

    path: string;
}

const BlogList = (props: BlogListProps) => {
    const siteMetaData = useSiteMetadata();
    const {
        path,
        data: {
            posts: { edges: posts },
        },
    } = props;
    const siteUrl = oc(siteMetaData).siteUrl('');
    const { pageContext } = props;

    const title = `Blog Page ${pageContext.currentPage} of ${pageContext.nbPages}`;
    const description = title;

    return (
        <Layout>
            <SEO
                title={title}
                description={`Blog Page ${pageContext.currentPage}`}
                url={`${siteUrl}${path}`}
                isBlog={false}
            />
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
    query BlogList($skip: Int!, $limit: Int!, $date: Date!) {
        posts: allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: {
                fileAbsolutePath: { regex: "//content/posts//" }
                frontmatter: { published: { eq: true }, date: { lte: $date } }
            }
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
