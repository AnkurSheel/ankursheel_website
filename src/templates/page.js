import { graphql } from 'gatsby';
import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import Wrapper from '../components/Wrapper';

export const Page = props => {
    const page = props.data.page;
    const fluid =
        (page.frontmatter.featuredImage &&
            page.frontmatter.featuredImage.sharp &&
            page.frontmatter.featuredImage.sharp.fluid) ||
        undefined;

    return (
        <Layout location={props.location}>
            <SEO
                title={page.frontmatter.title}
                description={page.excerpt}
                path={page.frontmatter.slug}
                featuredImage={page.frontmatter.featuredImage && page.frontmatter.featuredImage.publicURL}
            />

            <Hero heroImg={fluid} title={page.frontmatter.title} />

            <main css={Wrapper}>
                <article>
                    <Content content={page.body} date={page.frontmatter.date} />
                </article>
            </main>
        </Layout>
    );
};

export default Page;

export const pageQuery = graphql`
    query($slug: String!) {
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
