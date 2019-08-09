import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../tokens';

const HeroContainer = styled.div`
    position: relative;
    display: table;
    width: 100%;
    height: 400px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const TitleContainer = styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    width: 100%;
`;

const HeroTitle = styled.h1`
    font-weight: 700;
    font-size: 3rem;
    margin: 10px 60px;
    color: ${colors.white};
    text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.85);
`;

const HeroSubTitle = styled.h2`
    margin: 10px 60px;
    color: ${colors.white};
    text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.85);
`;

const Hero = props => {
    const heroImg = props.heroImg;

    return (
        <>
            {heroImg && (
                <HeroContainer style={{ backgroundImage: `url("${heroImg}")` }}>
                    <TitleContainer>
                        <HeroTitle>{props.title}</HeroTitle>
                        {props.subTitle && <HeroSubTitle>{props.subTitle}</HeroSubTitle>}
                    </TitleContainer>
                </HeroContainer>
            )}
        </>
    );
};

export default Hero;
