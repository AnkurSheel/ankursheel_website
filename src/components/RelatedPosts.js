import React from 'react';
import { StyledLink } from './Commons';

const RelatedPosts = props => {
    const { posts } = props;

    return (
        <ul>
            {posts.map(post => {
                const title = post.node.frontmatter.title;
                const slug = post.node.frontmatter.slug;
                const language = post.node.frontmatter.language || 'en';
                return (
                    <li key={slug}>
                        <StyledLink to={`/blog/${slug}`}>{title}</StyledLink>
                    </li>
                );
            })}
        </ul>
    );
};
export default RelatedPosts;
