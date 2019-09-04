import { css } from '@emotion/core';
import React from 'react';
import { ImageSharpFluid, SiteSiteMetadataHeaderLinks } from '../graphqlTypes';
import { colors } from '../tokens';
import HeaderLinks from './HeaderLinks';
import HomeLink from './HomeLink';

export const styles = {
    wrapper: css({
        position: 'fixed',
        top: 0,
        left: 0,
        margin: '0 auto',
        width: '100%',
        zIndex: 1000,
        backgroundColor: `${colors.primaryAlpha}`,
        fontWeight: 'bold',
    }),
    nav: css({
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0 auto',
        maxWidth: '770px',
        padding: '0 20px',
        alignItems: 'center',
    }),
    header: css({
        WebkitBoxAlign: 'center',
        display: 'flex',
    }),
};

interface DesktopHeaderProps {
    headerLinks: Pick<SiteSiteMetadataHeaderLinks, 'label' | 'url'>[];
    icon?: ImageSharpFluid;
    siteTitle?: string;
    headerTitle?: string;
}

export const DesktopHeader = ({ headerLinks, icon, siteTitle, headerTitle }: DesktopHeaderProps) => {
    return (
        <>
            <HomeLink icon={icon} iconTitle={siteTitle} headerTitle={headerTitle} />
            {headerLinks && (
                <div css={styles.header}>
                    <HeaderLinks headerLinks={headerLinks} />
                </div>
            )}
        </>
    );
};
