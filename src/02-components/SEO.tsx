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
        throw new Error('Site meta data is null');
    }
    const lang = 'en';
    const { siteTitle, siteUrl, siteDescription, twitterUsername } = siteMetaData;
    const { isBlog = false, path = '', featuredImageUrl } = props;
    let { title, description, imageFacebook, imageTwitter } = props;

    title = title ? `${title} | ${siteTitle}` : siteTitle;
    description = description || siteDescription;
    const formattedSiteUrl = isBlog ? `${siteUrl}/blog/` : siteUrl;
    const imagePathFacebook = imageFacebook || featuredImageUrl;
    imageFacebook = imagePathFacebook && `${siteUrl}${imagePathFacebook}`;
    const imagePathTwitter = imageTwitter || featuredImageUrl;
    imageTwitter = imagePathTwitter && `${siteUrl}${imagePathTwitter}`;
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
            {imageFacebook && <meta property="og:image" content={imageFacebook} />}
            {imageFacebook && imageFacebook.indexOf('https') > -1 && (
                <meta property="og:image:secure_url" content={imageFacebook} />
            )}

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterUsername} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {imageTwitter && <meta name="twitter:image" content={imageTwitter} />}
            {imageTwitter && imageTwitter.indexOf('https') > -1 && (
                <meta name="twitter:image:secure_url" content={imageTwitter} />
            )}
        </Helmet>
    );
};

SEO.defaultProps = {
    isBlog: false,
};

export default SEO;
