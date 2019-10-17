import { css } from '@emotion/core';
import { graphql } from 'gatsby';
import { IFluidObject } from 'gatsby-background-image';
import React from 'react';
import { oc } from 'ts-optchain';
import { SEO } from '@codinators/gatsby-shared-library';
import Wrapper from '../01-elements/Wrapper';
import Content from '../03-composites/Content';
import Hero from '../03-composites/Hero';
import Layout from '../04-layouts/layout';
import { PageBySlugQuery } from '../graphqlTypes';
import useSiteMetadata from '../hooks/use-site-config';

interface PageProps {
    data: Pick<PageBySlugQuery, 'page'>;
    path: string;
}

export const Page = ({ path, data }: PageProps) => {
    const siteMetaData = useSiteMetadata();

    const siteUrl = oc(siteMetaData).siteUrl('');

    const { page } = data;
    const excerpt = oc(page).excerpt('');
    const title = oc(page).frontmatter.title('');
    const slug = oc(page).frontmatter.slug('');
    const date = oc(page).frontmatter.date('');
    const fluid = oc(page).frontmatter.featuredImage.sharp.fluid(undefined) as IFluidObject | undefined;
    const featuredImagePosition = oc(page).frontmatter.featuredImagePosition(undefined);

    return (
        <Layout>
            <SEO title={title} description={excerpt} url={`${siteUrl}${path}`} isBlog={false} />

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
