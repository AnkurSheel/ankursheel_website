import { css } from '@emotion/core';
import React from 'react';
import useSiteMetadata from '../../hooks/use-site-config';
import colors from '../../tokens/colors';
import FooterColumn, { FooterColumnData, FooterLinkData } from './FooterColumn';

const styles = {
    footer: css({
        backgroundColor: `${colors.primary}`,
        color: `${colors.textLightest}`,
    }),
    nav: css({
        display: 'flex',
        flexFlow: 'wrap',
        alignItems: 'flex-start',
        maxWidth: '900px',
        margin: '0 auto',
    }),
};

const Footer = () => {
    const siteMetadata = useSiteMetadata();
    if (!siteMetadata) {
        return <></>;
    }

    const { authorName, footerLinks } = siteMetadata;
    const links = (footerLinks && (footerLinks.filter(f => f !== undefined) as FooterColumnData[])) || [];
    return (
        <footer css={styles.footer}>
            <nav css={styles.nav}>
                <FooterColumn sectionName={`${authorName} © ${new Date().getFullYear()}`} />
                {links.map((column: FooterColumnData, i: number) => {
                    const links1 =
                        (column.links && (column.links.filter(l => l !== undefined) as FooterLinkData[])) || [];
                    return <FooterColumn sectionName={column.sectionName} links={links1} key={`footer-column-${i}`} />;
                })}
            </nav>
        </footer>
    );
};

export default Footer;
