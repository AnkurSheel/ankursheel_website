import { css } from '@emotion/core';
import React, { useEffect } from 'react';

const styles = {
    modal: css({
        background: 'rgba(255,0,0,0.5)',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
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
        margin: '5rem',
    }),
};

interface LightBoxModalProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const LightBoxModal = (props: LightBoxModalProps) => {
    const { onClick } = props;
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);
    return (
        <div css={styles.modal}>
            <button type="button" css={styles.button} onClick={onClick}>
                Close
            </button>
        </div>
    );
};

export default LightBoxModal;
