import React from 'react';
import styled, { css } from 'styled-components';
import hogyeMarket_1 from '../../../assets/images/hogyeMarket_1.jpg';
import hogyeMarket_2 from '../../../assets/images/hogyeMarket_2.jpg';

interface propsIState {
    innerHeight: number;
    innerWidth: number;
    contentsRef1: React.RefObject<HTMLDivElement>;
    contentsRef2: React.RefObject<HTMLDivElement>;
    contentsRef3: React.RefObject<HTMLDivElement>;
    contentsRef4: React.RefObject<HTMLDivElement>;
    pyeongchonImageRef1: React.RefObject<HTMLImageElement>;
    pyeongchonImageRef2: React.RefObject<HTMLImageElement>;
    pyeongchonImageRef3: React.RefObject<HTMLImageElement>;
    pyeongchonImageRef4: React.RefObject<HTMLImageElement>;
    pyeongchonTitleSectionRef: React.RefObject<HTMLImageElement>;
}

function Presenter(props: propsIState) {
    return (
        <Wrapper>
            <Header />

            <DongnaeContainer>
                <HogyeMarketContainer>
                    <TitleSection isSticky={true}>
                        <Title>호계종합시장</Title>
                    </TitleSection>

                    <HogyeMarketImageSection>
                        <HogyeMarketImageContainer>
                            <HogyeMarketImage src={hogyeMarket_1} />
                            <HogyeMarketContentsContainer>
                                <HogyeMarketContentsTitle ref={props.contentsRef1}>
                                    호계종합시장 초입
                                </HogyeMarketContentsTitle>
                                <HogyeMarketContentsDescription ref={props.contentsRef2}>
                                    호계종합시장에 방문할 때 가장 먼저 만나볼 수 있는 장소입니다.
                                </HogyeMarketContentsDescription>
                            </HogyeMarketContentsContainer>
                        </HogyeMarketImageContainer>

                        <HogyeMarketImageContainer>
                            <HogyeMarketContentsContainer>
                                <HogyeMarketContentsTitle ref={props.contentsRef3}>
                                    호랭이 시장골목
                                </HogyeMarketContentsTitle>
                                <HogyeMarketContentsDescription ref={props.contentsRef4}>
                                    작은 골목길 사이에 여러 시장 인심을 누릴 수 있는 장소입니다.
                                </HogyeMarketContentsDescription>
                            </HogyeMarketContentsContainer>
                            <HogyeMarketImage src={hogyeMarket_2} />
                        </HogyeMarketImageContainer>
                    </HogyeMarketImageSection>
                </HogyeMarketContainer>

                <PyeongchonAcademyContainer>
                    <TitleSection isSticky={false} ref={props.pyeongchonTitleSectionRef}>
                        <Title>평촌학원가</Title>
                    </TitleSection>

                    <PyeongchonImageSection height={props.innerHeight * 4}>
                        <PyeongchonImageContainer>
                            <PyeongchonImage
                                src={hogyeMarket_2}
                                ref={props.pyeongchonImageRef1}
                                height={props.innerHeight / 2}
                            />
                            <PyeongchonImage
                                src={hogyeMarket_2}
                                ref={props.pyeongchonImageRef2}
                                height={props.innerHeight / 2}
                            />
                            <PyeongchonImage
                                src={hogyeMarket_2}
                                ref={props.pyeongchonImageRef3}
                                height={props.innerHeight / 2}
                            />
                            <PyeongchonImage
                                src={hogyeMarket_2}
                                ref={props.pyeongchonImageRef4}
                                height={props.innerHeight / 2}
                            />
                        </PyeongchonImageContainer>
                    </PyeongchonImageSection>

                    <PyeongchonContentsSection>
                        <PyeongchonContents>전국 2위를 자랑하는 대형 학원가 거리</PyeongchonContents>
                        <PyeongchonContents>
                            안양에 사는 학생들 뿐만 아니라 인근 지역에 사는 학생들도 학원을 다니기 위해 방문하는 장소
                        </PyeongchonContents>
                    </PyeongchonContentsSection>
                </PyeongchonAcademyContainer>
            </DongnaeContainer>
        </Wrapper>
    );
}

export default Presenter;

const Wrapper = styled.div``;

const Header = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: green;
`;

const DongnaeContainer = styled.div``;

const TitleSection = styled.div<{ isSticky: boolean }>`
    height: 10vh;

    ${(props) =>
        props.isSticky &&
        css`
            position: sticky;
            top: 0;
        `}

    margin: 60px 0;

    background-color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 1;
`;

const Container = styled.div`
    margin: 0 auto;
    margin-bottom: 168px;
`;

const HogyeMarketImageSection = styled.div``;

const HogyeMarketContainer = styled(Container)`
    max-width: 2048px;
`;

const HogyeMarketImageContainer = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;
`;

const HogyeMarketContentsContainer = styled.div`
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    text-align: center;
`;

const PyeongchonAcademyContainer = styled(Container)`
    max-width: 1024px;
`;

const PyeongchonImageSection = styled.div<{ height: number }>`
    height: ${(props) => props.height}px;
`;

const PyeongchonImageContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;

    position: sticky;
    top: 0;
`;

const PyeongchonContentsSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    margin: 108px 0;
`;

const HogyeMarketImage = styled.img`
    width: 50%;
`;

const PyeongchonImage = styled.img<{ height: number }>`
    display: inline-block;

    width: 100%;
    height: ${(props) => props.height}px;
`;

const Title = styled.h2`
    font-weight: 700;
    font-size: 2.3em;

    margin-right: 5%;
`;

const HogyeMarketContents = styled.span`
    font-weight: 700;

    width: 50%;

    line-height: 46px;
`;

const HogyeMarketContentsTitle = styled(HogyeMarketContents)`
    font-size: 2em;

    word-break: keep-all;
`;

const HogyeMarketContentsDescription = styled(HogyeMarketContents)`
    font-size: 1.4em;
    color: #6e6e73;
`;

const PyeongchonContents = styled.span`
    font-size: 4.8em;
    font-weight: bold;

    word-break: keep-all;

    line-height: 1.2em;
`;
