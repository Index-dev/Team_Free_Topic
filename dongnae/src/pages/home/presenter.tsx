import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useScroll } from '../../hooks/useScroll';
import Logo from '../../components/icons/logo';

const Presenter = (props: propsIState) => {
    const { cubeHeight, wrapperRef, cubeContRef } = props;
    const { scrollY, scrollDirection } = useScroll();

    const listener = () => {
        console.log(document.querySelector('.scroll-content')?.getClientRects());
        // setBodyOffset(document.body.getBoundingClientRect());
        // setScrollY(-bodyOffset.top);
        // setScrollX(bodyOffset.left);
        // setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up');
        // lastScrollTopRef.current = -bodyOffset.top;
    };

    useEffect(() => {
        const scrollElem = document.querySelector('.scroll-content') as HTMLDivElement;
        scrollElem.addEventListener('scroll', listener);
        return () => scrollElem.removeEventListener('scroll', listener);
    });

    return (
        <>
            <Wrapper ref={wrapperRef}>
                <Background>
                    <video
                        src="https://player.vimeo.com/external/511201710.hd.mp4?s=7eb1bc688b0c9c5c4e3dcca5e3c2a2a63626e546&profile_id=174"
                        muted
                        autoPlay
                        loop
                        playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: '.5' }}
                    ></video>
                </Background>
                <CubeContainer ref={cubeContRef} cubeHeight={cubeHeight}>
                    <CubeHeader cubeHeight={cubeHeight}>
                        <div style={{ width: '70%', height: '50%' }}>
                            <Logo />
                        </div>
                    </CubeHeader>
                    <CubeSquare1 />
                    <CubeSquare2 />
                    <CubeSquare3 />
                    <CubeSquare4 />
                </CubeContainer>
            </Wrapper>
            <div style={{ marginBottom: '10rem' }}></div>
        </>
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

    background-color: #777777;
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
    transform: translate3d(0, 0, ${(props) => props.cubeHeight}px) rotate(-90deg);

    background: #22ff22;

    padding-left: 1em;
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
