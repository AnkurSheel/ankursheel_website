import { css } from '@emotion/core';
import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { RecentPostsQuery } from '../graphqlTypes';

const styles = {
    recentPosts: css({
        listStyle: 'none',
    }),
    recentPostItem: css({
        marginTop: '0.5em',
    }),
};

const RecentPosts = () => {
    const data: RecentPostsQuery = useStaticQuery(graphql`
        query RecentPosts {
            posts: allMdx(
                sort: { fields: [frontmatter___date], order: DESC }
                filter: { fileAbsolutePath: { regex: "//content/posts//" } }
                limit: 5
            ) {
                edges {
                    node {
                        frontmatter {
                            title
                            slug
                        }
                    }
                }
            }
        }
    `);

    const posts = data.posts.edges;

    return (
        <ul css={styles.recentPosts}>
            {posts.map(post => {
                const { frontmatter } = post.node;
                const title = frontmatter && frontmatter.title;
                const slug = frontmatter && frontmatter.slug;
                return (
                    slug &&
                    title && (
                        <li key={slug} css={styles.recentPostItem}>
                            <Link to={`/blog/${slug}`}>{title}</Link>
                        </li>
                    )
                );
            })}
        </ul>
    );
};
export default RecentPosts;
