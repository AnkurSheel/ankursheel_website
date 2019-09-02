import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';
import { ImageSharpFluid } from '../graphqlTypes';
import { colors } from '../tokens';

const styles = {
    home: css({
        zIndex: 10,
        color: `${colors.textLightest}`,
        padding: '0.5rem 0.5rem 0.5rem 0',
        display: 'flex',
        alignItems: 'center',
    }),
    icon: css({
        width: '3rem',
        height: '3rem',
        marginRight: '1rem',
    }),
    title: css({}),
};

interface HomeLinkProps {
    icon?: ImageSharpFluid;
    iconTitle?: string;

    headerTitle?: string;
}

const HomeLink = ({ icon, iconTitle, headerTitle }: HomeLinkProps) => {
    let fluid: FluidObject | undefined;
    if (icon) {
        fluid = {
            aspectRatio: icon.aspectRatio || 1,
            src: icon.src || '',
            srcSet: icon.srcSet || '',
            base64: icon.base64,
            sizes: icon.sizes || '',
            srcSetWebp: icon.srcSetWebp,
            srcWebp: icon.srcWebp,
            tracedSVG: icon.tracedSVG,
        };
    }
    return (
        <Link css={styles.home} to="/" aria-label="View home page">
            {fluid && <Img css={styles.icon} fluid={fluid} alt={iconTitle} />}
            {headerTitle && <span css={styles.title}>{headerTitle}</span>}
        </Link>
    );
};

export default HomeLink;
