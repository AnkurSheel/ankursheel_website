import { graphql } from 'gatsby';
import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/layout';
import PostsList from '../components/PostsList';
import SEO from '../components/SEO';
import Wrapper from '../components/Wrapper';
import { PostsByCategoryQuery } from '../graphqlTypes';

interface CategoriesProps {
    data: Pick<PostsByCategoryQuery, 'posts'>;
    pageContext: {
        category: string;
    };
}

const Categories = (props: CategoriesProps) => {
    const pageTitle = props.pageContext.category;
    const posts = props.data.posts.edges;

    return (
        <Layout>
            <SEO title={pageTitle} />
            <Hero title={pageTitle} />

            <main css={Wrapper}>
                <h1>Posts tagged as &quot;{pageTitle}&quot;</h1>
                <PostsList posts={posts} />
            </main>
        </Layout>
    );
};

export default Categories;

export const pageQuery = graphql`
    query PostsByCategory($category: String!) {
        posts: allMdx(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { categories: { eq: $category } } }
        ) {
            edges {
                node {
                    excerpt
                    frontmatter {
                        date(formatString: "DD MMMM, YYYY")
                        title
                        categories
                        tags
                        slug
                    }
                }
            }
        }
    }
`;