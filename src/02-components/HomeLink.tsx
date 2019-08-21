import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';
import { colors } from '../tokens';

const styles = {
    home: css({
        zIndex: 10,
        color: `${colors.textLightest}`,
        padding: '0.5rem 0.5rem 0.5rem 0',
    }),
    icon: css({
        height: '3rem',
        marginRight: '1rem',
    }),
    title: css({}),
};

interface HomeLinkProps {
    iconSrc?: string;
    iconTitle?: string;

    headerTitle?: string;
}

const HomeLink = ({ iconSrc, iconTitle, headerTitle }: HomeLinkProps) => {
    return (
        <Link css={styles.home} to={`/`} aria-label={`View home page`}>
            {iconSrc && <img css={styles.icon} src={iconSrc} alt={iconTitle} />}
            {headerTitle && <span css={styles.title}>{headerTitle}</span>}
        </Link>
    );
};

export default HomeLink;
