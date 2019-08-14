import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/layout';
import PostsList from '../components/PostsList';
import SEO from '../components/SEO';
import Wrapper from '../components/Wrapper';

class Categories extends React.Component {
    render() {
        const pageTitle = this.props.pageContext.category;
        const posts = get(this, 'props.data.posts.edges');

        return (
            <Layout location={this.props.location} title={pageTitle}>
                <SEO title={pageTitle} />
                <Hero title={pageTitle} />

                <Wrapper>
                    <h1>Posts tagged as &quot;{pageTitle}&quot;</h1>
                    <PostsList posts={posts} />
                </Wrapper>
            </Layout>
        );
    }
}

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
