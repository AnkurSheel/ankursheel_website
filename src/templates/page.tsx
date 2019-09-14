import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import { IFluidObject } from 'gatsby-background-image';
import React from 'react';
import { oc } from 'ts-optchain';
import Wrapper from '../01-elements/Wrapper';
import SEO from '../02-components/SEO';
import Content from '../03-composites/Content';
import Hero from '../03-composites/Hero';
import Layout from '../04-layouts/layout';
import { PageBySlugQuery } from '../graphqlTypes';

interface PageProps {
    data: Pick<PageBySlugQuery, 'page'>;
}

export const Page = ({ data }: PageProps) => {
    const { page } = data;
    const excerpt = oc(page).excerpt('');
    const title = oc(page).frontmatter.title('');
    const slug = oc(page).frontmatter.slug('');
    const date = oc(page).frontmatter.date('');
    const featuredImageUrl = oc(page).frontmatter.featuredImage.publicURL(undefined);
    const fluid = oc(page).frontmatter.featuredImage.sharp.fluid(undefined) as IFluidObject | undefined;
    const featuredImagePosition = oc(page).frontmatter.featuredImagePosition(undefined);

    return (
        <Layout>
            <SEO title={title} description={excerpt} path={slug} featuredImageUrl={featuredImageUrl} />

            <Hero image={fluid} title={title} imageStyles={css({ backgroundPosition: `${featuredImagePosition}` })} />

            <main css={Wrapper}>
                <article>
                    <Content content={oc(page).body('')} date={date} path={slug} tags={[]} />
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
                featuredImagePosition
            }
        }
    }
`;
