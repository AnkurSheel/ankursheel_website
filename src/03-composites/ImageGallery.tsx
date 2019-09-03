import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import ImageWithOverlay from '../02-components/ImageWithOverlay';
import { GetImagesQuery } from '../graphqlTypes';

const styles = {
    container: css({
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gridAutoRows: 'minmax(auto, 200px)',
        gridGap: '2rem',
        margin: '3rem 0',
    }),
};

interface ImageGalleryProps {
    relativeDirectory: string;
}

const ImageGallery = (props: ImageGalleryProps) => {
    const [activeIndex, setActiveIndex] = useState(-1);

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
    return (
        <div css={styles.container}>
            {edges
                .filter(edge => {
                    const {
                        node: { relativeDirectory },
                    } = edge;
                    return relativeDirectory && relativeDirectory.includes(props.relativeDirectory);
                })
                .map((edge, i) => {
                    const {
                        node: { name, childImageSharp },
                    } = edge;
                    const image = childImageSharp && childImageSharp.fluid;
                    return image ? (
                        <div
                            key={name}
                            onMouseEnter={() => {
                                setActiveIndex(i);
                            }}
                            onMouseLeave={() => {
                                setActiveIndex(-1);
                            }}
                        >
                            <ImageWithOverlay
                                key={name}
                                altText={name}
                                image={image}
                                aspectRatio={1}
                                showOverlay={i === activeIndex}
                            />
                        </div>
                    ) : (
                        <></>
                    );
                })}
        </div>
    );
};

export default ImageGallery;
