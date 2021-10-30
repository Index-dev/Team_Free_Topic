import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Presenter = () => {
    const contRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contRef.current) contRef.current.style.height = `${window.innerHeight}px`;
    }, []);

    return (
        <Container ref={contRef}>
            <TopCube>
                <CubeHeader>title</CubeHeader>
                <CubeShape1 />
                <CubeShape2 />
                <CubeShape4 />
                <CubeShape5 />
            </TopCube>
            <BottomCube>
                <CubeHeader>title</CubeHeader>
                <CubeShape1 />
                <CubeShape2 />
                <CubeShape4 />
                <CubeShape5 />
            </BottomCube>
        </Container>
    );
};

export default Presenter;

const Container = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
`;

const BottomCube = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    transform: rotateX(70deg) rotateZ(45deg) translateZ(-100px);
    transform-style: preserve-3d;
`;
const TopCube = styled.div`
    position: absolute;
    width: 240px;
    height: 240px;
    transform: rotateX(70deg) rotateZ(45deg) translateZ(50px);
    transform-style: preserve-3d;
`;

const CubeShape = styled.div<{ width?: string; height?: string }>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    position: absolute;
    top: 0;
    left: 0;
`;
CubeShape.defaultProps = {
    width: '100%',
    height: '100%',
};

const CubeHeader = styled(CubeShape)`
    border: 8px solid orange;
    transform: translateZ(200px);
`;

const CubeShape1 = styled(CubeShape)`
    border: 8px solid blue;
    transform: rotateX(-90deg);
    transform-origin: bottom center;
`;

const CubeShape2 = styled(CubeShape)`
    border: 8px solid red;
    transform: rotateY(90deg);
    transform-origin: right center;
`;

const CubeShape4 = styled(CubeShape)`
    border: 8px solid skyblue;
    transform: rotateX(90deg);
    transform-origin: top center;
`;
const CubeShape5 = styled(CubeShape)`
    border: 8px solid green;
    transform: rotateY(-90deg);
    transform-origin: left center;
`;
