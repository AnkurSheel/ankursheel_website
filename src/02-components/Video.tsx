import React from 'react';

interface VideoProps {
    src: string;
    title: string;
}
const Video = ({ src, title }: VideoProps) => (
    <div>
        <iframe
            src={src}
            title={title}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            allowFullScreen
            width="560"
            height="400"
        />
    </div>
);

export default Video;
