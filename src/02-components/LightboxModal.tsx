import { css } from '@emotion/core';
import React from 'react';

const styles = {
    modal: css({
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
    }),
    button: css({
        background: 'rgba(0, 0, 0, 0.3)',
        border: '2px solid white',
        color: 'white',
        textAlign: 'center',
        padding: '1rem 2rem',
        cursor: 'pointer',
    }),
};

interface LightBoxModalProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const LightBoxModal = (props: LightBoxModalProps) => {
    const { onClick } = props;
    return (
        <div css={styles.modal}>
            <button type="button" css={styles.button} onClick={onClick}>
                Close
            </button>
        </div>
    );
};

export default LightBoxModal;
