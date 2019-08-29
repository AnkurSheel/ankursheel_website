import { DiscussionEmbed } from 'disqus-react';
import React from 'react';
import useSiteMetadata from '../hooks/use-site-config';

interface DisqusProps {
    slug?: string;
    title?: string;
}

const DisqusWrapper = (props: DisqusProps) => {
    const { siteUrl } = useSiteMetadata();
    const disqusShortname = process.env.GATSBY_DISQUS_NAME;

    if (!disqusShortname || !props.slug) {
        return null;
    }
    const disqusConfig = {
        identifier: props.slug,
        title: props.title || '',
        url: `${siteUrl}/blog/${props.slug}`,
    };

    return <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />;
};

export default DisqusWrapper;
