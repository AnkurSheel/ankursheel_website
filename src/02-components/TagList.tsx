import { css } from '@emotion/core';
import slugify from '@sindresorhus/slugify';
import { Link } from 'gatsby';
import React from 'react';
import { colors } from '../tokens';

const styles = {
    tagsList: css({
        color: `${colors.textLight}`,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    }),
    tag: css({
        margin: '1rem 1rem 0 0',
        listStyle: 'none',
        border: '1px solid #00efe6',
        borderRadius: '1.5em',
        padding: '0 1rem',
        ':hover': {
            background: '#00efe6',
        },
    }),
    link: css({
        textDecoration: 'none',
        color: `${colors.primary}`,
        border: 'none',
        ':hover': {
            border: 'none',
        },
    }),
};

interface TagListProps {
    tags: string[];
}

export const TagList = (props: TagListProps) => {
    const { tags } = props;

    return (
        <ul css={styles.tagsList}>
            {tags.map(t => {
                const tag = slugify(t);
                return (
                    <li css={styles.tag} key={`tag-list-${tag}`}>
                        <Link css={styles.link} to={`/tags/${tag}`}>
                            {t}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default TagList;
