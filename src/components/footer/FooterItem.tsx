import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';
import { SiteSiteMetadataFooterLinksLinks } from '../../graphqlTypes';
import colors from '../../tokens/colors';

const styles = {
    item: css({
        padding: '0.25rem 0',
    }),
    link: css({
        fontWeight: 'bold',
        color: `${colors.textLightest}`,
        ':hover': {
            color: `${colors.textLightestHover}`,
        },
    }),
};

interface FooterItemProps {
    item: Pick<SiteSiteMetadataFooterLinksLinks, 'label' | 'url'>;
}

const FooterItem = ({ item }: FooterItemProps) => {
    if (!item.url) {
        return <></>;
    }

    if (item.url.startsWith('/')) {
        return (
            <span css={styles.item}>
                <Link css={styles.link} to={item.url}>
                    {item.label}
                </Link>
            </span>
        );
    }
    return (
        <span css={styles.item}>
            <a css={styles.link} href={item.url}>
                {item.label}
            </a>
        </span>
    );
};
export default FooterItem;
