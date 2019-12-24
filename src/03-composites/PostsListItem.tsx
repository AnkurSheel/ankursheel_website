import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';
import TagList from '../02-components/TagList';
import { colors } from '../tokens';

const styles = {
    post: css({
        borderBottom: '1px solid rgba(214, 209, 230, 0.5)',
        paddingBottom: '1.25rem',
    }),
    header: css({
        padding: '1em 0',
    }),
    headerLink: css({
        textDecoration: 'none',
        color: `${colors.primary}`,
    }),
    excerpt: css({
        paddingBottom: '0.5em',
    }),
    footer: css({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }),
    tags: css({
        alignSelf: 'start',
    }),
    readPostLink: css({
        color: `${colors.primary}`,
        width: '100%',
        marginTop: '1rem',
        lineHeight: 2,
        fontsize: '0.75rem',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        textDecoration: 'none',
        border: 'none',
        '&:hover': {
            backgroundColor: `${colors.primaryAlpha}`,
            borderRadius: '0.25rem',
            color: `${colors.textLightest}`,
        },
    }),
};

interface PostListItemProps {
    title: string;
    excerpt: string;
    slug: string;
    tags: string[];
}

const PostsListItem = (props: PostListItemProps) => {
    const { title, excerpt, slug, tags } = props;

    const articleLink = `/blog/${slug}`;
    return (
        <article css={styles.post}>
            <header css={styles.header}>
                <h2>
                    <Link css={styles.headerLink} to={articleLink}>
                        {title}
                    </Link>
                </h2>
            </header>
            <section>
                <p css={styles.excerpt}>{excerpt}</p>
            </section>
            <footer css={styles.footer}>
                <TagList css={styles.tags} tags={tags} />
                <Link css={styles.readPostLink} to={articleLink} aria-label={`View ${title} article`}>
                    Read post ›
                </Link>
            </footer>
        </article>
    );
};
export default PostsListItem;
