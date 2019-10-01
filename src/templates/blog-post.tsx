import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import { IFluidObject } from 'gatsby-background-image';
import React from 'react';
import { oc } from 'ts-optchain';
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
    const {
        data: { post },
        pageContext: { previous, next },
    } = props;
    const excerpt = oc(post).excerpt();
    const published = oc(post).frontmatter.published(false);
    const body = oc(post).body('');
    const title = oc(post).frontmatter.title('');
    const slug = oc(post).frontmatter.slug();
    const tags = oc(post).frontmatter.tags([]) as string[];
    const date = oc(post).frontmatter.date('');
    const featuredImageUrl = oc(post).frontmatter.featuredImage.publicURL();
    const fluid = oc(post).frontmatter.featuredImage.sharp.fluid() as IFluidObject;
    const imageFacebookUrl = oc(post).frontmatter.imageFacebook.publicURL();
    const imageTwitterUrl = oc(post).frontmatter.imageTwitter.publicURL();
    const featuredImagePosition = oc(post).frontmatter.featuredImagePosition();

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

            <Hero image={fluid} title={title} imageStyles={css({ backgroundPosition: featuredImagePosition })} />

            <main css={Wrapper}>
                {!published && <h1>Draft Post</h1>}

                <Article body={body} tags={tags} date={date} path={slug} />
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
                published
                date(formatString: "DD MMMM, YYYY")
                slug
                tags
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
                featuredImagePosition
            }
        }
    }
`;
