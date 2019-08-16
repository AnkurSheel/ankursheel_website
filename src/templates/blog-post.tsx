import { graphql } from 'gatsby';
import { IFluidObject } from 'gatsby-background-image';
import React from 'react';
import Article from '../components/Article';
import Disqus from '../components/Disqus';
import Hero from '../components/Hero';
import Layout from '../components/layout';
import PrevNextPost from '../components/PrevNextPost';
import SEO from '../components/SEO';
import Wrapper from '../components/Wrapper';
import { BlogPostBySlugQuery, SitePageContextNext, SitePageContextPrevious } from '../graphqlTypes';

interface BlogPostTemplateProps {
    data: Pick<BlogPostBySlugQuery, 'post'>;
    pageContext: {
        next: SitePageContextNext;
        previous: SitePageContextPrevious;
    };
}
const BlogPostTemplate = (props: BlogPostTemplateProps) => {
    const post = props.data.post;
    const { previous, next } = props.pageContext;
    const excerpt = post && post.excerpt;
    const frontMatter = post && post.frontmatter;
    const title = (frontMatter && frontMatter.title) || '';
    const slug = frontMatter && frontMatter.slug;
    const featuredImage = frontMatter && frontMatter.featuredImage;
    const featuredImageUrl = featuredImage && featuredImage.publicURL;
    const fluid = featuredImage && featuredImage.sharp && (featuredImage.sharp.fluid as IFluidObject);
    const imageFacebookUrl = frontMatter && frontMatter.imageFacebook && frontMatter.imageFacebook.publicURL;
    const imageTwitterUrl = frontMatter && frontMatter.imageTwitter && frontMatter.imageTwitter.publicURL;
    return (
        <Layout>
            <SEO
                title={title}
                description={excerpt}
                featuredImageUrl={featuredImageUrl}
                imageFacebook={imageFacebookUrl}
                imageTwitter={imageTwitterUrl}
                path={slug}
                isBlog
            />

            <Hero image={fluid} title={title} />

            <main css={Wrapper}>
                <Article post={post} />
            </main>

            <main css={Wrapper}>
                <Disqus slug={slug} title={title} />
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
