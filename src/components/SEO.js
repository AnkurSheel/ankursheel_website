import { withPrefix } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/use-site-config';

const SEO = props => {
    const { isBlogPost, path = '', lang = 'en' } = props;
    const { siteTitle, siteUrl, siteCover, siteDescription, twitterUsername } = useSiteMetadata();

    const title = props.title ? `${props.title} | ${siteTitle}` : siteTitle;
    const formattedSiteUrl = siteUrl;
    const imagePath = props.imageFb || props.featuredImage || withPrefix(siteCover);
    const imagePathTwitter = props.imageTw || props.featuredImage || withPrefix(siteCover);
    const image = `${formattedSiteUrl}${imagePath}`;
    const imageTwitter = `${formattedSiteUrl}${imagePathTwitter}`;
    const description = props.description || siteDescription;

    return (
        <Helmet title={title}>
            {/* ToDo: remove this once we are ready to deploy*/}
            {/* <meta name="robots" content="noindex, noodp, noarchive" /> */}
            {/* General tags */}
            <html lang={lang} />
            <meta name="description" content={description} />
            <link rel="canonical" href={formattedSiteUrl + withPrefix(path)} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={formattedSiteUrl + withPrefix(path)} />
            <meta property="og:type" content={isBlogPost ? 'article' : 'website'} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterUsername} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageTwitter} />
        </Helmet>
    );
};

export default SEO;
