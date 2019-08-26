import { css } from '@emotion/core';
import React from 'react';
import { DesktopHeader } from '../02-components/DesktopHeader';
import { HeaderLinkData } from '../02-components/HeaderLinks';
import { MobileHeader } from '../02-components/MobileHeader';
import useMedia from '../hooks/use-media';
import useSiteMetadata from '../hooks/use-site-config';
import useSiteImages from '../hooks/use-site-images';
import { colors, media } from '../tokens';

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
        a: {
            borderBottom: 'none',
        },
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

const Header = () => {
    const siteMetadata = useSiteMetadata();
    const image = useSiteImages((siteMetadata && siteMetadata.headerLinksIcon) || '');
    const isMobile = useMedia<boolean>([`${media.medium}`], [false], true);
    if (!siteMetadata) {
        return <></>;
    }

    const { headerTitle, headerLinks, siteTitle } = siteMetadata;
    const iconSrc = (image && image.fluid && image.fluid.src) || undefined;
    const links = (headerLinks && (headerLinks.filter(h => h !== undefined) as HeaderLinkData[])) || [];

    return (
        <header css={styles.wrapper}>
            <nav css={styles.nav}>
                {isMobile ? (
                    <MobileHeader
                        headerLinks={links}
                        iconSrc={iconSrc}
                        siteTitle={siteTitle}
                        headerTitle={headerTitle}
                    />
                ) : (
                    <DesktopHeader
                        headerLinks={links}
                        iconSrc={iconSrc}
                        siteTitle={siteTitle}
                        headerTitle={headerTitle}
                    />
                )}
            </nav>
        </header>
    );
};

export default Header;
