import React from 'react';

interface VideoProps {
    src: string;
    title: string;
    width?: number | string;
    height?: number | string;
}
const Video = ({ src, title, width = 560, height = 400 }: VideoProps) => (
    <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        allowFullScreen
        width={width}
        height={height}
    />
);

export default Video;
