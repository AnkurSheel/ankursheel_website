import { css } from '@emotion/core';
import React, { useState } from 'react';
import { ImageSharpFluid, SiteSiteMetadataHeaderLinks } from '../graphqlTypes';
import { colors } from '../tokens';
import HeaderLinks from './HeaderLinks';
import HomeLink from './HomeLink';

const stylesWithProps = (isToggledOn: boolean) => {
    return {
        burgerButton: css({
            cursor: 'pointer',
            padding: '0.5rem 0.75rem',
            position: 'relative',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            WebkitTapHighlightColor: 'transparent',
        }),
        closeButton: css({
            cursor: 'pointer',
            padding: '2rem 1rem',
            position: 'relative',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            WebkitTapHighlightColor: 'transparent',
        }),
        burger: css({
            width: '24px',
            height: '2px',
            background: `${isToggledOn ? 'transparent' : colors.textLightest}`,
            position: 'absolute',
            left: 0,
            transition: 'all 250ms cubic-bezier(0.86, 0, 0.07, 1)',
            ':before': {
                content: `''`,
                position: 'absolute',
                top: '-8px',
                width: '24px',
                height: '2px',
                background: `${colors.textLightest}`,
                left: 0,
                transform: `${isToggledOn ? 'rotate(45deg); top: 0' : 'rotate(0)'}`,
                transition: 'all 250ms cubic-bezier(0.86, 0, 0.07, 1)',
            },
            ':after': {
                content: `''`,
                position: 'absolute',
                top: '8px',
                width: '24px',
                height: '2px',
                background: `${colors.textLightest}`,
                left: 0,
                transform: `${isToggledOn ? 'rotate(-45deg); top: 0' : 'rotate(0)'}`,
                transition: 'all 250ms cubic-bezier(0.86, 0, 0.07, 1)',
            },
        }),
        panel: css({
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'flex-start',
        }),
        nav: css({
            display: 'flex',
            flexDirection: 'column',
            padding: '3rem 0',
            margin: '0px auto',
        }),
    };
};

interface MobileHeaderProps {
    headerLinks: Pick<SiteSiteMetadataHeaderLinks, 'label' | 'url'>[];
    icon?: ImageSharpFluid;
    siteTitle?: string;
    headerTitle?: string;
}

const MobileHeader = ({ headerLinks, icon, siteTitle, headerTitle }: MobileHeaderProps) => {
    const [isToggledOn, setToggle] = useState(false);
    const toggle = () => setToggle(!isToggledOn);
    const mobileStyles = stylesWithProps(isToggledOn);
    return (
        <>
            {!isToggledOn && (
                <>
                    <HomeLink icon={icon} iconTitle={siteTitle} headerTitle={headerTitle} />
                    <button
                        css={mobileStyles.burgerButton}
                        onClick={toggle}
                        aria-label={`${isToggledOn ? 'close menu' : 'open menu'}`}
                        type="button"
                    >
                        <div css={mobileStyles.burger} />
                    </button>
                </>
            )}
            {isToggledOn && (
                <div css={mobileStyles.panel}>
                    <nav css={mobileStyles.nav}>
                        <HeaderLinks headerLinks={headerLinks} />
                    </nav>
                    <button
                        css={mobileStyles.closeButton}
                        onClick={toggle}
                        aria-label={`${isToggledOn ? 'close menu' : 'open menu'}`}
                        type="button"
                    >
                        <div css={mobileStyles.burger} />
                    </button>
                </div>
            )}
        </>
    );
};

export default MobileHeader;
