import { css } from '@emotion/core';
import BackgroundImage, { IFluidObject } from 'gatsby-background-image';
import React from 'react';

const styles = {
    container: css({
        position: 'relative',
        width: '100vw',
        height: '50vh',
        textAlign: 'center',
        color: 'white',
    }),
    image: css({
        width: '100%',
        height: '100%',
        backgroundPosition: 'bottom 20% center',
        backgroundSize: 'cover',
    }),
    textContainer: css({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }),
    title: css({
        fontWeight: 'bold',
        fontSize: '2.5rem',
        textShadow: '1px 1px 4px rgba(34, 34, 34, 0.85)',
    }),
    subTitle: css({
        textShadow: '1px 1px 4px rgba(34, 34, 34, 0.85)',
    }),
};

interface HeroProps {
    title: string;
    subTitle?: string;

    image?: IFluidObject;
}

const Hero = (props: HeroProps) => {
    return (
        <div css={styles.container}>
            {props.image && (
                <BackgroundImage css={styles.image} Tag="section" fluid={props.image} fadeIn="soft"></BackgroundImage>
            )}
            <div css={styles.textContainer}>
                <h1 css={styles.title}>{props.title}</h1>
                {props.subTitle && <h2>{props.subTitle}</h2>}
            </div>
        </div>
    );
};

export default Hero;
