import { css } from '@emotion/core';
import Img from 'gatsby-image';
import React, { useEffect } from 'react';
import { ImageSharpFluid } from '../graphqlTypes';

const styles = {
    modal: css({
        background: 'rgba(0,0,0,0.5)',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        display: 'grid',
        justifyItems: 'center',
        alignItems: 'center',
        zIndex: 1,
    }),
    container: css({
        background: 'white',
        minWidth: '300px',
        width: '50vw',
        height: '70vh',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }),
    button: css({
        background: 'none',
        border: '1px solid black',
        color: 'black',
        textAlign: 'center',
        padding: '0.5rem 1rem',
        marginTop: '0.5rem',
        cursor: 'pointer',
    }),
    caption: css({
        textAlign: 'center',
        fontSize: '0.8em',
        fontStyle: 'italic',
    }),
};

export type LightBoxModalImage = {
    image: Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
    caption: string | undefined;
};

interface LightBoxModalProps {
    image: LightBoxModalImage;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const LightBoxModal = (props: LightBoxModalProps) => {
    const {
        onClick,
        image: { image, caption },
    } = props;
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const fluid = {
        aspectRatio: image.aspectRatio || 1,
        src: image.src || '',
        srcSet: image.srcSet || '',
        base64: image.base64,
        sizes: image.sizes || '',
        srcSetWebp: image.srcSetWebp,
        srcWebp: image.srcWebp,
    };
    return (
        <div css={styles.modal}>
            <figure css={styles.container}>
                <Img fluid={fluid} imgStyle={{ objectFit: 'contain' }} />
                <figcaption css={styles.caption}>{caption}</figcaption>
                <button type="button" css={styles.button} onClick={onClick}>
                    Close
                </button>
            </figure>
        </div>
    );
};

export default LightBoxModal;
