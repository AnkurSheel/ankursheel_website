import { css } from '@emotion/core';
import Img from 'gatsby-image';
import React from 'react';
import { ImageSharpFluid } from '../graphqlTypes';

const styles = {
    container: css({
        display: 'grid',
    }),
    image: {
        border: '2px solid blue',
        gridColumn: '1 / -1',
        gridRow: '1 / -1',
    },
    overlay: css({
        position: 'relative',
        gridColumn: '1 / -1',
        gridRow: '1 / -1',
        background: '#ffc60032',
        cursor: 'pointer',
    }),
};

interface ImageWithOverlayProps {
    altText?: string;
    image: Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
    aspectRatio?: number;
    showOverlay: boolean;
}

const ImageWithOverlay = (props: ImageWithOverlayProps) => {
    const { altText, image, aspectRatio, showOverlay } = props;
    const fluid = {
        aspectRatio: aspectRatio || (image && image.aspectRatio) || 1,
        src: (image && image.src) || '',
        srcSet: (image && image.srcSet) || '',
        base64: image && image.base64,
        sizes: (image && image.sizes) || '',
        srcSetWebp: image && image.srcSetWebp,
        srcWebp: image && image.srcWebp,
    };

    return (
        <div css={styles.container}>
            <Img fluid={fluid} alt={altText} style={styles.image} />
            {showOverlay && <div css={styles.overlay} />}
        </div>
    );
};

export default ImageWithOverlay;
