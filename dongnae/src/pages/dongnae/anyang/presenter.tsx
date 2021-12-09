import React from 'react';
import styled from 'styled-components';
import hogyeMarket_1 from '../../../assets/images/hogyeMarket_1.jpg';
import hogyeMarket_2 from '../../../assets/images/hogyeMarket_2.jpg';

interface propsIState {
    contentsRef1: React.RefObject<HTMLDivElement>;
    contentsRef2: React.RefObject<HTMLDivElement>;
    contentsRef3: React.RefObject<HTMLDivElement>;
    contentsRef4: React.RefObject<HTMLDivElement>;
}

function Presenter(props: propsIState) {
    return (
        <Wrapper>
            <Header />

            <DongnaeContainer>
                <HogyeMarketContainer>
                    <TitleSection>
                        <Title>호계종합시장</Title>
                    </TitleSection>

                    <ImageSection>
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
                    </ImageSection>
                </HogyeMarketContainer>
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

const TitleSection = styled.div`
    height: 10vh;

    position: sticky;
    top: 0;

    margin: 60px 0;

    background-color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 1;
`;

const ImageSection = styled.div``;

const HogyeMarketContainer = styled.div`
    max-width: 2048px;

    margin: 0 auto;
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

const HogyeMarketImage = styled.img`
    width: 50%;
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
