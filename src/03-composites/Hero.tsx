import { css } from '@emotion/core';
import BackgroundImage, { IFluidObject } from 'gatsby-background-image';
import React from 'react';
import colors from '../tokens/colors';

const stylesWithProps = (props: HeroProps) => {
    return {
        container: css({
            position: 'relative',
            width: '100vw',
            height: `${props.image ? '50vh' : '30vh'}`,
            textAlign: 'center',
            color: `${colors.text}`,
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
            textShadow: '1px 2px 0px #BFBFBF',
        }),
        subTitle: css({
            textShadow: '1px 2px 0px #BFBFBF',
        }),
    };
};

interface HeroProps {
    title: string;
    subTitle?: string;

    image?: IFluidObject;
}

const Hero = (props: HeroProps) => {
    const styles = stylesWithProps(props);
    return (
        <div css={styles.container}>
            {props.image && (
                <BackgroundImage css={styles.image} Tag="section" fluid={props.image} fadeIn="soft"></BackgroundImage>
            )}
            <div css={styles.textContainer}>
                <h1 css={styles.title}>{props.title}</h1>
                {props.subTitle && <h2 css={styles.subTitle}>{props.subTitle}</h2>}
            </div>
        </div>
    );
};

export default Hero;
