import { graphql } from 'gatsby';
import React from 'react';
import Article from '../components/Article';
import Disqus from '../components/Disqus';
import Hero from '../components/Hero';
import Layout from '../components/layout';
import PrevNextPost from '../components/PrevNextPost';
import SEO from '../components/SEO';
import Wrapper from '../components/Wrapper';

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.post;
        const { previous, next } = this.props.pageContext;
        const fluid =
            (post.frontmatter.images && post.frontmatter.images.sharp && post.frontmatter.images.sharp.fluid) ||
            undefined;
        return (
            <Layout location={this.props.location}>
                <SEO
                    title={post.frontmatter.title}
                    description={post.excerpt}
                    cover={post.frontmatter.cover}
                    imageFb={post.frontmatter.imageFb && post.frontmatter.imageFb.publicURL}
                    imageTw={post.frontmatter.imageTw && post.frontmatter.imageTw.publicURL}
                    lang={post.frontmatter.language}
                    path={post.frontmatter.slug}
                    isBlogPost
                />

                <Hero heroImg={fluid} title={post.frontmatter.title} />

                <Wrapper>
                    <Article post={post} />
                </Wrapper>

                <Wrapper>
                    <Disqus slug={post.frontmatter.slug} title={post.frontmatter.title} />
                    <PrevNextPost previous={previous} next={next} />
                </Wrapper>
            </Layout>
        );
    }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        post: mdx(frontmatter: { slug: { eq: $slug } }) {
            excerpt
            body
            frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                slug
                tags
                images {
                    sharp: childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                # imageTw
                # imageFb
            }
        }
    }
`;
