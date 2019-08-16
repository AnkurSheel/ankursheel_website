import { Link } from 'gatsby';
import React from 'react';

const RelatedPosts = props => {
    const { posts } = props;

    return (
        <ul>
            {posts.map(post => {
                const title = post.node.frontmatter.title;
                const slug = post.node.frontmatter.slug;
                return (
                    <li key={slug}>
                        <Link to={`/blog/${slug}`}>{title}</Link>
                    </li>
                );
            })}
        </ul>
    );
};
export default RelatedPosts;
