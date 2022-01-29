import React from 'react';
import styled from 'styled-components/macro';

const Image = ({ src, alt }) => {
    const asset = src.split('.')[0];
    return (
        <Wrapper>
            <source
                type="image/avif"
                srcSet={`
                    ${asset}.avif 1x,
                    ${asset}@2x.avif 2x,
                    ${asset}@3x.avif 3x
                `}
            />
            <source
                type="image/jpg"
                srcSet={`
                    ${asset}.jpg 1x,
                    ${asset}@2x.jpg 2x,
                    ${asset}@3x.jpg 3x
                `}
            />
            <NativeImage src={src} alt={alt} />
        </Wrapper>
    );
};

const Wrapper = styled.picture`
    display: block;
    width: 100%;
    height: 300px;
    border-radius: 2px;
    margin-bottom: 8px;
`;

const NativeImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
`;

export default Image;
