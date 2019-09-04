import React from 'react';
import { Maybe, Mdx, MdxFrontmatter } from '../graphqlTypes';
import PostsListItem from './PostsListItem';

interface PostListProps {
    posts: Array<{
        node: Pick<Mdx, 'excerpt'> & {
            frontmatter: Maybe<Pick<MdxFrontmatter, 'date' | 'title' | 'tags' | 'slug'>>;
        };
    }>;
}

const PostsList = (props: PostListProps) => {
    const { posts } = props;

    return (
        <>
            {posts.map(post => {
                const { frontmatter } = post.node;
                const title = (frontmatter && frontmatter.title) || '';
                const excerpt = (frontmatter && post.node.excerpt) || '';
                const slug = (frontmatter && frontmatter.slug) || '';
                const tags = (frontmatter && (frontmatter.tags as string[])) || [];
                return <PostsListItem key={`${slug}`} title={title} excerpt={excerpt} slug={slug} tags={tags} />;
            })}
        </>
    );
};
export default PostsList;
