import { graphql, useStaticQuery } from 'gatsby';
import { SiteImagesQuery } from '../graphqlTypes';

const useSiteImages = (imageName: string) => {
    const result: SiteImagesQuery = useStaticQuery(graphql`
        query SiteImages {
            allFile(filter: { sourceInstanceName: { eq: "images" } }) {
                edges {
                    node {
                        relativePath
                        childImageSharp {
                            fixed {
                                base64
                                tracedSVG
                                aspectRatio
                                width
                                height
                                src
                                srcSet
                                srcWebp
                                srcSetWebp
                                originalName
                            }
                            fluid {
                                base64
                                tracedSVG
                                aspectRatio
                                src
                                srcSet
                                srcWebp
                                srcSetWebp
                                sizes
                                originalImg
                                originalName
                                presentationWidth
                                presentationHeight
                            }
                        }
                    }
                }
            }
        }
    `);
    const items = result.allFile.edges;
    const image = items.find(edge => edge.node.relativePath === imageName);
    if (image === undefined) {
        throw `Unable to find image: ${imageName} (in content/images)`;
    }

    return image.node.childImageSharp;
};

export default useSiteImages;
