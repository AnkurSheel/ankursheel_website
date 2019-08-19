import { graphql, useStaticQuery } from 'gatsby';
import { SiteMetaDataQuery } from '../graphqlTypes';

const useSiteMetadata = () => {
    const result: SiteMetaDataQuery = useStaticQuery(graphql`
        query SiteMetaData {
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
    return result.site && result.site.siteMetadata;
};

export default useSiteMetadata;
