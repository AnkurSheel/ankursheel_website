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
    }),
    container: css({
        background: 'white',
        minWidth: '300px',
        width: '50vw',
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
};

interface LightBoxModalProps {
    image: Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const LightBoxModal = (props: LightBoxModalProps) => {
    const { onClick, image } = props;
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const fluid = {
        aspectRatio: (image && image.aspectRatio) || 1,
        src: (image && image.src) || '',
        srcSet: (image && image.srcSet) || '',
        base64: image && image.base64,
        sizes: (image && image.sizes) || '',
        srcSetWebp: image && image.srcSetWebp,
        srcWebp: image && image.srcWebp,
    };
    return (
        <div css={styles.modal}>
            <div css={styles.container}>
                <Img fluid={fluid} />
                <button type="button" css={styles.button} onClick={onClick}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default LightBoxModal;
