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
        display: 'grid',
        justifyItems: 'center',
        alignItems: 'center',
    }),
    button: css({
        background: 'rgba(0, 0, 0, 0.3)',
        border: '2px solid white',
        color: 'white',
        textAlign: 'center',
        padding: '0.5rem',
    }),
};

interface ImageWithOverlayProps {
    altText?: string;
    image: Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
    aspectRatio?: number;
    showOverlay: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ImageWithOverlay = (props: ImageWithOverlayProps) => {
    const { altText, image, aspectRatio, showOverlay, onClick } = props;
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
            {showOverlay && (
                <button type="button" css={styles.overlay} onClick={onClick}>
                    <button type="button" css={styles.button}>
                        View &rarr;
                    </button>
                </button>
            )}
        </div>
    );
};

export default ImageWithOverlay;
