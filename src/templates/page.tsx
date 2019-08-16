import { graphql } from 'gatsby';
import { IFluidObject } from 'gatsby-background-image';
import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import Wrapper from '../components/Wrapper';
import { PageBySlugQuery } from '../graphqlTypes';

interface PageProps {
    data: Pick<PageBySlugQuery, 'page'>;
}

export const Page = ({ data }: PageProps) => {
    const page = data.page;
    const frontmatter = page && page.frontmatter;
    const excerpt = (page && page.excerpt) || '';
    const title = (frontmatter && frontmatter.title) || '';
    const slug = (frontmatter && frontmatter.slug) || '';
    const date = frontmatter && frontmatter.date;
    const featuredImage = frontmatter && frontmatter.featuredImage;
    const featuredImageUrl = featuredImage && featuredImage.publicURL;
    const fluid = featuredImage && featuredImage.sharp && (featuredImage.sharp.fluid as IFluidObject);

    return (
        <Layout>
            <SEO title={title} description={excerpt} path={slug} featuredImageUrl={featuredImageUrl} />

            <Hero image={fluid} title={title} />

            <main css={Wrapper}>
                <article>
                    <Content content={page && page.body} date={date} />
                </article>
            </main>
        </Layout>
    );
};

export default Page;

export const pageQuery = graphql`
    query PageBySlug($slug: String!) {
        page: mdx(frontmatter: { slug: { eq: $slug } }) {
            body
            excerpt
            frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
                slug
                featuredImage {
                    publicURL
                    sharp: childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`;
