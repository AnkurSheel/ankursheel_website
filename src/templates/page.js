import { graphql } from 'gatsby';
import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import Wrapper from '../components/Wrapper';

export const Page = props => {
    const page = props.data.page;

    return (
        <Layout location={props.location}>
            <SEO
                title={page.frontmatter.title}
                description={page.excerpt}
                path={page.frontmatter.slug}
                cover={page.frontmatter.cover && page.frontmatter.cover.publicURL}
            />

            <Hero heroImg={page.frontmatter.cover && page.frontmatter.cover.publicURL} title={page.frontmatter.title} />

            <Wrapper>
                <article>
                    <Content content={page.body} date={page.frontmatter.date} />
                </article>
            </Wrapper>
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
                cover
                #  {
                #     publicURL
                # }
            }
        }
    }
`;
