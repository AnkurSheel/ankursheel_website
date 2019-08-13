import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/layout';
import PostsList from '../components/PostsList';
import SEO from '../components/SEO';
import Wrapper from '../components/Wrapper';

class Tags extends React.Component {
    render() {
        const pageTitle = `#${this.props.pageContext.tag}`;
        const posts = get(this, 'props.data.posts.edges');

        return (
            <Layout location={this.props.location} title={pageTitle}>
                <SEO title={pageTitle} />
                <Hero title={pageTitle} />

                <Wrapper>
                    <h1>Posts tagged as &quot;{this.props.pageContext.tag}&quot;</h1>
                    <PostsList posts={posts} />
                </Wrapper>
            </Layout>
        );
    }
}

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
