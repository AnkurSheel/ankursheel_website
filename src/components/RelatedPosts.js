import React from 'react';
import { StyledLink } from './Commons';
import Flag from './Flag/Flag';
import useSiteMetadata from '../hooks/use-site-config';

const RelatedPosts = props => {
    const { posts } = props;
    const { multilangPosts } = useSiteMetadata();

    return (
        <ul>
            {posts.map(post => {
                const title = post.node.frontmatter.title;
                const slug = post.node.frontmatter.slug;
                const language = post.node.frontmatter.language || 'en';
                return (
                    <li key={slug}>
                        <StyledLink to={`/${slug}`}>
                            {multilangPosts && <Flag language={language} />}
                            {title}
                        </StyledLink>
                    </li>
                );
            })}
        </ul>
    );
};
export default RelatedPosts;
