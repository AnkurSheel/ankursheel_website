import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import ImageWithOverlay from '../02-components/ImageWithOverlay';
import LightBoxModal from '../02-components/LightboxModal';
import { GetImagesQuery, ImageSharpFluid } from '../graphqlTypes';

const styles = {
    container: css({
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gridGap: '1.5rem',
        margin: '3rem 0',
    }),
};

interface ImageGalleryProps {
    relativeDirectory: string;

    subDirectory?: string;
}

const ImageGallery = (props: ImageGalleryProps) => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState<
        | Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
        | undefined
    >(undefined);
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
        <>
            <div css={styles.container}>
                {edges
                    .filter(edge => {
                        const {
                            node: { relativeDirectory },
                        } = edge;
                        if (!relativeDirectory) {
                            return false;
                        }
                        const shouldShow = relativeDirectory.includes(props.relativeDirectory);
                        return shouldShow && props.subDirectory
                            ? relativeDirectory.includes(props.subDirectory)
                            : shouldShow;
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
                                    if (!showModal) {
                                        setActiveIndex(i);
                                    }
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
                                    onClick={() => {
                                        setActiveIndex(-1);
                                        setShowModal(true);
                                        setSelectedImage(image);
                                    }}
                                    onKeyUp={() => {
                                        setActiveIndex(-1);
                                        setShowModal(true);
                                        setSelectedImage(image);
                                    }}
                                />
                            </div>
                        ) : (
                            <></>
                        );
                    })}
                {showModal && selectedImage && (
                    <LightBoxModal
                        image={selectedImage}
                        onClick={() => {
                            setShowModal(false);
                        }}
                    />
                )}
            </div>
        </>
    );
};

export default ImageGallery;
