import React from 'react';
import styled from 'styled-components';

import Logo from '../../components/icons/logo';

const Presenter = (props: propsIState) => {
    const { cubeHeight, wrapperRef, cubeContRef } = props;

    return (
        <Wrapper ref={wrapperRef}>
            <Background>
                <video
                    src="https://player.vimeo.com/external/516156134.hd.mp4?s=df12332e07f4803bbc04b84135399e549a662033&profile_id=174"
                    muted
                    autoPlay
                    loop
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                ></video>
            </Background>
            <CubeContainer ref={cubeContRef} cubeHeight={cubeHeight}>
                <CubeHeader cubeHeight={cubeHeight}>
                    <Logo />
                </CubeHeader>
                <CubeSquare1 />
                <CubeSquare2 />
                <CubeSquare3 />
                <CubeSquare4 />
            </CubeContainer>
        </Wrapper>
    );
};

export default Presenter;

interface propsIState {
    cubeHeight: number;
    wrapperRef: React.RefObject<HTMLDivElement>;
    cubeContRef: React.RefObject<HTMLDivElement>;
}

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
`;

const Background = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
`;

const CubeContainer = styled.div<{ cubeHeight: number }>`
    --border-color: #cccccc;

    min-width: 120px;
    width: min(55vw, 40vh);
    max-width: 500px;
    min-height: 120px;
    height: min(55vw, 40vh);
    max-height: 500px;

    position: absolute;

    transform: rotateX(70deg) rotateZ(45deg) translateZ(${(props) => (props.cubeHeight * -1) / 2}px);
    transform-style: preserve-3d;
`;

const CubeShape = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    background: #f7f7f7;
`;

const CubeHeader = styled(CubeShape)<{ cubeHeight: number }>`
    transform: translate3d(0, 0, ${(props) => props.cubeHeight}px);
    border: 1px solid var(--border-color);
`;

const CubeSquare1 = styled(CubeShape)`
    transform: rotateX(-90deg);
    transform-origin: bottom center;

    border: 1px solid var(--border-color);
`;

const CubeSquare2 = styled(CubeShape)`
    transform: rotateY(90deg);
    transform-origin: right center;

    border: 1px solid var(--border-color);
`;

const CubeSquare3 = styled(CubeShape)`
    transform: rotateX(90deg);
    transform-origin: top center;

    border: 1px solid var(--border-color);
`;
const CubeSquare4 = styled(CubeShape)`
    transform: rotateY(-90deg);
    transform-origin: left center;

    border: 1px solid var(--border-color);
`;
