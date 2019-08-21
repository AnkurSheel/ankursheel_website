import { graphql } from 'gatsby';
import { IFluidObject } from 'gatsby-background-image';
import React from 'react';
import Wrapper from '../01-elements/Wrapper';
import Disqus from '../02-components/Disqus';
import PrevNextPost from '../02-components/PrevNextPost';
import SEO from '../02-components/SEO';
import Article from '../03-composites/Article';
import Hero from '../03-composites/Hero';
import Layout from '../04-layouts/layout';
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
    const body = post && post.body;
    const frontMatter = post && post.frontmatter;
    const title = (frontMatter && frontMatter.title) || '';
    const slug = frontMatter && frontMatter.slug;
    const tags = (frontMatter && (frontMatter.tags as string[])) || [];
    const date = (frontMatter && frontMatter.date) || '';
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
                <Article body={body || ''} tags={tags} date={date} />
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
