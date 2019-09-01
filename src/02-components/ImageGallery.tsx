import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { GetImagesQuery } from '../graphqlTypes';

interface ImageGalleryProps {
    path: string;
}

export const ImageGallery = (props: ImageGalleryProps) => {
    const {
        allFile: { edges },
    }: GetImagesQuery = useStaticQuery(
        graphql`
            query GetImages {
                allFile(sort: { fields: name, order: ASC }, filter: { relativeDirectory: { regex: "/images/" } }) {
                    edges {
                        node {
                            name
                            relativeDirectory
                            childImageSharp {
                                fluid(maxWidth: 600) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
        `
    );
    console.log({ edges });
    return (
        <>
            {edges
                .filter(edge => edge.node.relativeDirectory && edge.node.relativeDirectory.includes(props.path))
                .map(edge => {
                    const name = edge.node.name;
                    const image = edge.node.childImageSharp && edge.node.childImageSharp.fluid;
                    const fluid = {
                        aspectRatio: (image && image.aspectRatio) || 1,
                        src: (image && image.src) || '',
                        srcSet: (image && image.srcSet) || '',
                        base64: image && image.base64,
                        sizes: (image && image.sizes) || '',
                        srcSetWebp: image && image.srcSetWebp,
                        srcWebp: image && image.srcWebp,
                    };
                    edge.node.childImageSharp && edge.node.childImageSharp.fluid;
                    return <Img key={name} fluid={fluid} alt={name} />;
                })}
        </>
    );
};
