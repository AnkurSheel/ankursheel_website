import { withPrefix } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { MdxFrontmatter } from '../graphqlTypes';
import useSiteMetadata from '../hooks/use-site-config';

type SEOProps = Pick<MdxFrontmatter, 'title' | 'excerpt' | 'imageFacebook' | 'imageTwitter' | 'featuredImage'> & {
    path?: string;
    isBlog: boolean;
};
const SEO = (props: SEOProps) => {
    const { isBlog = false, path = '' } = props;
    const { siteTitle, siteUrl, siteCover, siteDescription, twitterUsername } = useSiteMetadata();
    const title = props.title ? `${props.title} | ${siteTitle}` : siteTitle;
    const formattedSiteUrl = isBlog ? `${siteUrl}/blog` : siteUrl;
    const imagePath = props.imageFacebook || props.featuredImage || withPrefix(siteCover);
    const imagePathTwitter = props.imageTwitter || props.featuredImage || withPrefix(siteCover);
    const image = `${formattedSiteUrl}${imagePath}`;
    const imageTwitter = `${formattedSiteUrl}${imagePathTwitter}`;
    const description = props.excerpt || siteDescription;
    const lang = 'en';

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
            <meta property="og:type" content={isBlog ? 'article' : 'website'} />
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

SEO.defaultProps = {
    isBlog: false,
};

export default SEO;
