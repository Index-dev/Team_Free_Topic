import React, { useMemo } from 'react';
import styled from 'styled-components';

import Logo from '../../components/icons/logo';
import KaKaoMap from '../../components/home/kakaoMap';
import { Idongnae } from '../../interface/home';
import { useRecoilValue } from 'recoil';
import { screenTypeState } from '../../modules/recoil/screenType';

const Presenter = (props: propsIState) => {
    const {
        cubeHeight,
        wrapperRef,
        cubeContRef,
        dongnaeIndex,
        dongnaeIndexOdd,
        dongnaeIndexEven,
        dongnaeArray,
        contentsBodyRef,
    } = props;

    const screenType = useRecoilValue(screenTypeState);

    return (
        <Wrapper ref={wrapperRef} screenType={screenType}>
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

            <CubeContainer ref={cubeContRef} cubeHeight={cubeHeight} screenType={screenType}>
                <CubeHeader cubeHeight={cubeHeight}>
                    <CubeLogoSection reverse={false}>
                        <Logo />
                    </CubeLogoSection>
                    <CubeLogoSection reverse={true}>
                        <Logo />
                    </CubeLogoSection>
                </CubeHeader>
                {useMemo(() => {
                    return (
                        <>
                            <CubeSquare1>
                                <KaKaoMap
                                    reverse={false}
                                    LatLngX={dongnaeArray[dongnaeIndex] && dongnaeArray[dongnaeIndex].LatLngX}
                                    LatLngY={dongnaeArray[dongnaeIndex] && dongnaeArray[dongnaeIndex].LatLngY}
                                />
                            </CubeSquare1>
                            <CubeSquare2>
                                <CubeImage1 src={dongnaeArray[dongnaeIndex] && dongnaeArray[dongnaeIndex].imageUrl} />
                            </CubeSquare2>
                        </>
                    );
                }, [dongnaeIndexEven])}

                {useMemo(() => {
                    return (
                        <>
                            <CubeSquare3>
                                <KaKaoMap
                                    reverse={true}
                                    LatLngX={dongnaeArray[dongnaeIndex] && dongnaeArray[dongnaeIndex].LatLngX}
                                    LatLngY={dongnaeArray[dongnaeIndex] && dongnaeArray[dongnaeIndex].LatLngY}
                                />
                            </CubeSquare3>
                            <CubeSquare4>
                                <CubeImage2 src={dongnaeArray[dongnaeIndex] && dongnaeArray[dongnaeIndex].imageUrl} />
                            </CubeSquare4>
                        </>
                    );
                }, [dongnaeIndexOdd])}
            </CubeContainer>

            <ContentsContainer screenType={screenType}>
                <ContentsHeader index={dongnaeIndex} length={dongnaeArray.length}>
                    {dongnaeArray.map((dongnae, index) => {
                        return (
                            <ContentsIndexList key={index}>
                                <ContentsIndex target={String(index === dongnaeIndex)}>{index + 1}</ContentsIndex>
                            </ContentsIndexList>
                        );
                    })}
                </ContentsHeader>
                <ContentsBody ref={contentsBodyRef}>
                    <ContentsTitle>{dongnaeArray[dongnaeIndex].title}</ContentsTitle>
                    <ContentsDescription>{dongnaeArray[dongnaeIndex].description}</ContentsDescription>
                </ContentsBody>
            </ContentsContainer>
        </Wrapper>
    );
};

export default Presenter;

interface propsIState {
    cubeHeight: number;
    wrapperRef: React.RefObject<HTMLDivElement>;
    cubeContRef: React.RefObject<HTMLDivElement>;
    dongnaeIndex: number;
    dongnaeIndexOdd: boolean;
    dongnaeIndexEven: boolean;
    dongnaeArray: Idongnae[];
    contentsBodyRef: React.RefObject<HTMLDivElement>;
}

const Wrapper = styled.div<{ screenType: string }>`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: ${(props) => props.screenType !== 'isPC' && 'column'};

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

const CubeContainer = styled.div<{ cubeHeight: number; screenType: string }>`
    --border-color: #cccccc;

    /* 
    min-width: 120px;
    width: min(45vw, 40vh);
    max-width: 500px;
    min-height: 120px;
    height: min(45vw, 40vh);
    max-height: 500px; 
    */

    width: min(380px, 100px + 25vw);
    height: min(380px, 100px + 25vw);

    margin-top: ${(props) => props.screenType !== 'isPC' && '100px'};

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

    border: 1px solid var(--border-color);
`;

const CubeLogoSection = styled.div<{ reverse: boolean }>`
    width: 100%;
    height: 50%;

    transform: ${(props) => props.reverse && 'rotate(180deg)'};
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

const CubeImage = styled.img`
    width: 100%;
    height: 100%;
    -webkit-user-drag: none;
`;

const CubeImage1 = styled(CubeImage)`
    transform: rotate(-90deg);
`;

const CubeImage2 = styled(CubeImage)`
    transform: rotate(90deg);
`;

const ContentsContainer = styled.div<{ screenType: string }>`
    display: flex;
    flex-direction: column;
    gap: 8px;

    width: 330px;

    z-index: 0;

    margin-left: ${(props) => props.screenType === 'isPC' && 'min(150px, 40px + 7.5vw)'};
    margin-top: ${(props) => props.screenType !== 'isPC' && '100px'};

    text-align: center;

    overflow: hidden;
`;

const ContentsHeader = styled.div<{ index: number; length: number }>`
    width: ${(props) => 160 * props.length}px;

    display: flex;

    transform: translateX(${(props) => 85 - props.index * 160}px);

    transition: 0.8s ease-out;
`;

const ContentsIndexList = styled.div`
    width: 160px;
`;

const ContentsBody = styled.div``;

const ContentsIndex = styled.span<{ target: string }>`
    width: ${(props) => (props.target === 'true' ? '24px' : '0')};
    height: ${(props) => (props.target === 'true' ? '24px' : '16px')};

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto;

    border-radius: 50%;

    background-color: ${(props) => props.target === 'true' && 'red'};

    transition: 0.8s ease-out;

    color: #fff;
`;

const ContentsTitle = styled.h2`
    font-size: min(3.8em, 1.2em + 5.5vw);
    font-weight: 700;

    margin: 28px 0;
`;

const ContentsDescription = styled.span`
    font-size: min(1.3em, 0.6em + 1.5vw);
`;
