import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';
import { SitePageContextNext, SitePageContextPrevious } from '../graphqlTypes';

const styles = {
    container: css({
        display: 'flex',
        alignItems: 'center',
    }),
    link: css({
        margin: '0 1rem',
        border: 'none',
        ':hover': {
            border: 'none',
        },
    }),
    linkText: css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }),
    title: css({
        margin: '0 0.25rem',
        padding: '0 1rem',
        border: '1px solid #00efe6',
        borderRadius: '1.5em',
        ':hover': {
            background: '#00efe6',
        },
    }),
};
interface PrevNextPostProps {
    previous: SitePageContextPrevious;
    next: SitePageContextNext;
}

const PrevNextPost = (props: PrevNextPostProps) => {
    const { previous, next } = props;

    const previousSlug = previous && previous.frontmatter && previous.frontmatter.slug;
    const previousTitle = previous && previous.frontmatter && previous.frontmatter.title;
    const nextSlug = next && next.frontmatter && next.frontmatter.slug;
    const nextTitle = next && next.frontmatter && next.frontmatter.title;
    return (
        <div css={styles.container}>
            {previousSlug && previousTitle && (
                <Link css={styles.link} to={`/blog/${previousSlug}`}>
                    <div css={styles.linkText}>
                        &larr;
                        <div css={styles.title}> {previousTitle}</div>
                    </div>
                </Link>
            )}
            {nextSlug && nextTitle && (
                <Link css={styles.link} to={`/blog/${nextSlug}`}>
                    <div css={styles.linkText}>
                        <div css={styles.title}> {nextTitle}</div>
                        &rarr;
                    </div>
                </Link>
            )}
        </div>
    );
};

export default PrevNextPost;
