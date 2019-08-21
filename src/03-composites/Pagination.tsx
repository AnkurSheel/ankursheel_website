import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';
import colors from '../tokens/colors';

const button = css({
    backgroundColor: `${colors.primary}`,
    border: `1px solid ${colors.primary}`,
    color: `${colors.textLightest}`,
    padding: '1rem 1rem',
    borderRadius: '20%',
    '&:hover': {
        backgroundColor: `${colors.textLightest}`,
        color: `${colors.primary}`,
        border: `1px solid ${colors.primary}`,
    },
});

const styles = {
    wrapper: css({
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        margin: '2em auto 0px auto',
        gridColumnGap: '2rem',
        alignItems: 'center',
        justifyItems: 'center',
    }),
    previousButton: css(
        {
            gridColumnStart: 1,
        },
        button
    ),
    pageInfo: css({
        gridColumnStart: 2,
    }),
    nextButton: css(
        {
            gridColumnStart: 3,
        },
        button
    ),
};

interface PaginationProps {
    currentPage?: number;
    numberOfPages?: number;
}

const Pagination = ({ currentPage = 1, numberOfPages = 1 }: PaginationProps) => {
    const previousUrl = currentPage === 2 ? '/blog' : `/blog/pages/${currentPage - 1}`;

    return (
        <nav css={styles.wrapper}>
            {currentPage !== 1 && (
                <Link css={styles.previousButton} to={previousUrl}>
                    &larr; Older posts
                </Link>
            )}
            <span css={styles.pageInfo}>
                Page {currentPage} of {numberOfPages}
            </span>
            {currentPage && currentPage < numberOfPages && (
                <Link css={styles.nextButton} to={`/blog/pages/${currentPage + 1}`}>
                    Newer posts &rarr;
                </Link>
            )}
        </nav>
    );
};

export default Pagination;
