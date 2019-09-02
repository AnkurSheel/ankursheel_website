import React, { Fragment } from 'react';
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
        <Fragment>
            {posts.map((post, i) => {
                const frontmatter = post.node.frontmatter;
                const title = (frontmatter && frontmatter.title) || '';
                const excerpt = (frontmatter && post.node.excerpt) || '';
                const slug = (frontmatter && frontmatter.slug) || '';
                const tags = (frontmatter && (frontmatter.tags as string[])) || [];
                return <PostsListItem key={`${slug}-${i}`} title={title} excerpt={excerpt} slug={slug} tags={tags} />;
            })}
        </Fragment>
    );
};
export default PostsList;
