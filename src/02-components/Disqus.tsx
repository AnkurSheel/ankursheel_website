import { DiscussionEmbed } from 'disqus-react';
import React from 'react';
import useSiteMetadata from '../hooks/use-site-config';

interface DisqusProps {
    slug?: string;
    title?: string;
}

const DisqusWrapper = (props: DisqusProps) => {
    const siteMetaData = useSiteMetadata();
    if (!siteMetaData) {
        throw new Error('Site meta data is null');
    }

    const { siteUrl } = siteMetaData;
    const { title, slug } = props;
    const disqusShortname = process.env.GATSBY_DISQUS_NAME;

    if (!disqusShortname || !slug) {
        return null;
    }
    const disqusConfig = {
        identifier: slug,
        title: title || '',
        url: `${siteUrl}/blog/${slug}`,
    };

    return <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
};

export default DisqusWrapper;
