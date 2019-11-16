import React from 'react';
import { css } from '@emotion/core';

const styles = {
    wrapper: css({
        position: 'relative',
        width: '100%',
        height: 0,
        paddingBottom: '56%',
        margin: '1rem 0',
    }),
    iframe: css({
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
    }),
};

interface VideoProps {
    src: string;
    title: string;
}

const Video = ({ src, title }: VideoProps) => (
    <div css={styles.wrapper}>
        <iframe
            css={styles.iframe}
            src={src}
            title={title}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
        />
    </div>
);

export default Video;
