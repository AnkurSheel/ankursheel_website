import { css } from '@emotion/core';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import ImageWithOverlay from '../02-components/ImageWithOverlay';
import LightBoxModal, { LightBoxModalImage } from '../02-components/LightboxModal';
import { GetImagesQuery } from '../graphqlTypes';

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
    const [selectedImage, setSelectedImage] = useState<LightBoxModalImage | undefined>(undefined);
    const {
        allImagesJson: { edges },
    }: GetImagesQuery = useStaticQuery(
        graphql`
            query GetImages {
                allImagesJson {
                    edges {
                        node {
                            gallery {
                                title
                                image {
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
                }
            }
        `
    );
    return (
        <>
            <div css={styles.container}>
                {edges.map(({ node: { gallery } }, i) => {
                    if (!gallery) {
                        return <></>;
                    }
                    return gallery
                        .filter(g => {
                            if (!g || !g.image || !g.image.relativeDirectory) {
                                return false;
                            }
                            const { relativeDirectory } = g.image;
                            const shouldShow = relativeDirectory.includes(props.relativeDirectory);
                            return shouldShow && props.subDirectory
                                ? relativeDirectory.includes(props.subDirectory)
                                : shouldShow;
                        })
                        .map(g => {
                            const image = g && g.image;
                            const fluid = image && image.childImageSharp && image.childImageSharp.fluid;
                            const name = image && image.name;
                            const title = g && (g.title || name);
                            return fluid && name ? (
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
                                        altText={title}
                                        image={fluid}
                                        aspectRatio={1}
                                        showOverlay={i === activeIndex}
                                        onClick={() => {
                                            setActiveIndex(-1);
                                            setShowModal(true);
                                            setSelectedImage({ caption: title, image: fluid });
                                        }}
                                        onKeyUp={() => {
                                            setActiveIndex(-1);
                                            setShowModal(true);
                                            setSelectedImage({ caption: title, image: fluid });
                                        }}
                                    />
                                </div>
                            ) : (
                                <></>
                            );
                        });
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
