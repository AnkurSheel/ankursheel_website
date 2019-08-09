import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
    const result = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    siteTitle
                    siteUrl
                    siteCover
                    authorName
                    authorAvatar
                    authorDescription
                    siteDescription
                    twitterUsername
                    # disqusShortname
                    # disqusSiteUrl
                    headerTitle
                    headerLinksIcon
                    headerLinks {
                        label
                        url
                    }
                    footerLinks {
                        sectionName
                        links {
                            label
                            url
                        }
                    }
                }
            }
        }
    `);
    return result.site.siteMetadata;
};

export default useSiteMetadata;
