import React from 'react';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/use-site-config';

interface SEOProps {
    path?: string;
    isBlog: boolean;
    title?: string;
    featuredImageUrl?: string;
    imageFacebook?: string;
    imageTwitter?: string;
    description?: string;
}
const SEO = (props: SEOProps) => {
    const siteMetaData = useSiteMetadata();
    if (!siteMetaData) {
        throw 'Site meta data is null';
    }
    const { isBlog = false, path = '' } = props;
    const { siteTitle, siteUrl, siteDescription, twitterUsername } = siteMetaData;
    const lang = 'en';
    const title = props.title ? `${props.title} | ${siteTitle}` : siteTitle;
    const description = props.description || siteDescription;
    const formattedSiteUrl = isBlog ? `${siteUrl}/blog` : siteUrl;
    const imagePathFacebook = props.imageFacebook || props.featuredImageUrl;
    const imageFacebook = imagePathFacebook && `${formattedSiteUrl}${imagePathFacebook}`;
    const imagePathTwitter = props.imageTwitter || props.featuredImageUrl;
    const imageTwitter = imagePathTwitter && `${formattedSiteUrl}${imagePathTwitter}`;
    const url = `${formattedSiteUrl}${path}`;

    return (
        <Helmet title={title}>
            <html lang={lang} />
            <meta name="description" content={description} />
            <link rel="canonical" href={url} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={url} />
            <meta property="og:type" content={isBlog ? 'article' : 'website'} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {imagePathFacebook && <meta property="og:image" content={imageFacebook} />}

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterUsername} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {imagePathTwitter && <meta name="twitter:image" content={imageTwitter} />}
        </Helmet>
    );
};

SEO.defaultProps = {
    isBlog: false,
};

export default SEO;
