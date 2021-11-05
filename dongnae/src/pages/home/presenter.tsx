import React from 'react';
import styled from 'styled-components';

import Logo from '../../components/icons/logo';

const Presenter = (props: propsIState) => {
    const { cubeHeight, wrapperRef, cubeContRef } = props;

    return (
        <Wrapper ref={wrapperRef}>
            <CubeContainer ref={cubeContRef} cubeHeight={cubeHeight}>
                <CubeHeader>
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

const CubeContainer = styled.div<{ cubeHeight: number }>`
    --height_adjust: ${(props) => -props.cubeHeight / 2}px;
    --borderColor: #cccccc;

    min-width: 200px;
    width: min(55vw, 40vh);
    max-width: 500px;
    min-height: 200px;
    height: min(55vw, 40vh);
    max-height: 500px;

    position: absolute;

    transform: rotateX(70deg) rotateZ(45deg) translateZ(var(--height_adjust));
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

const CubeHeader = styled(CubeShape)`
    transform: translateZ(calc(-2 * var(--height_adjust)));
    border: 1px solid var(--borderColor);
`;

const CubeSquare1 = styled(CubeShape)`
    transform: rotateX(-90deg);
    transform-origin: bottom center;

    border: 1px solid var(--borderColor);
`;

const CubeSquare2 = styled(CubeShape)`
    transform: rotateY(90deg);
    transform-origin: right center;

    border: 1px solid var(--borderColor);
`;

const CubeSquare3 = styled(CubeShape)`
    transform: rotateX(90deg);
    transform-origin: top center;

    border: 1px solid var(--borderColor);
`;
const CubeSquare4 = styled(CubeShape)`
    transform: rotateY(-90deg);
    transform-origin: left center;

    border: 1px solid var(--borderColor);
`;
