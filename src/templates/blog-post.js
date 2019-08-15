import { graphql } from 'gatsby';
import React from 'react';
import Article from '../components/Article';
import Disqus from '../components/Disqus';
import Hero from '../components/Hero';
import Layout from '../components/layout';
import PrevNextPost from '../components/PrevNextPost';
import SEO from '../components/SEO';
import Wrapper from '../components/Wrapper';

const BlogPostTemplate = props => {
    const post = props.data.post;
    const { previous, next } = props.pageContext;
    const fluid =
        (post.frontmatter.featuredImage &&
            post.frontmatter.featuredImage.sharp &&
            post.frontmatter.featuredImage.sharp.fluid) ||
        undefined;
    return (
        <Layout location={props.location}>
            <SEO
                title={post.frontmatter.title}
                description={post.excerpt}
                featuredImageUrl={post.frontmatter.featuredImage && post.frontmatter.featuredImage.publicURL}
                imageFacebook={post.frontmatter.imageFacebook && post.frontmatter.imageFacebook.publicURL}
                imageTwitter={post.frontmatter.imageTwitter && post.frontmatter.imageTwitter.publicURL}
                path={post.frontmatter.slug}
                isBlog
            />

            <Hero heroImg={fluid} title={post.frontmatter.title} />

            <main css={Wrapper}>
                <Article post={post} />
            </main>

            <main css={Wrapper}>
                <Disqus slug={post.frontmatter.slug} title={post.frontmatter.title} />
                <PrevNextPost previous={previous} next={next} />
            </main>
        </Layout>
    );
};

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
                categories
                featuredImage {
                    publicURL
                    sharp: childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                imageTwitter {
                    publicURL
                }
                imageFacebook {
                    publicURL
                }
            }
        }
    }
`;
