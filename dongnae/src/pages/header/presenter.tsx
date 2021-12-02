import React from 'react';
import styled, { css } from 'styled-components';

import { screenTypeRecoil } from '../../modules/recoil/screenType';
import Logo from '../../components/icons/logo';

function Presenter(props: propsIState) {
    const { scrollDirection, desktopContRef, mobileContRef } = props;
    const { isPC, isTablet } = screenTypeRecoil().type;

    return (
        <HeaderContainer isPC={isPC} isTablet={isTablet}>
            <LogoContainer>
                <LogoSizer isPC={isPC} isTablet={isTablet}>
                    <Logo />
                </LogoSizer>
            </LogoContainer>
            {isPC ? (
                <Desktop ref={desktopContRef}></Desktop>
            ) : (
                <Mobile ref={mobileContRef} scrollDirection={scrollDirection}></Mobile>
            )}
        </HeaderContainer>
    );
}

export default Presenter;

interface propsIState {
    scrollY: number;
    scrollDirection: 'up' | 'down';
    desktopContRef: React.RefObject<HTMLDivElement>;
    mobileContRef: React.RefObject<HTMLDivElement>;
}

const HeaderContainer = styled.header<{ isPC: boolean; isTablet: boolean }>`
    display: flex;
    justify-content: center;
    font-size: ${(props) => (props.isPC ? '1vw' : props.isTablet ? '2vw' : '3.2vw')};
`;

const LogoContainer = styled.div`
    width: 100%;
    max-width: 1024px;
    height: 10%;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;

    background: transparent;
    padding-left: 1.5em;
    margin: auto;
    z-index: 3;
`;

const LogoSizer = styled.div<{ isPC: boolean; isTablet: boolean }>`
    width: ${(props) => (props.isPC ? '15%' : props.isTablet ? '20%' : '30%')};
    height: 80%;
`;

const Container = styled.div`
    width: 100%;
    height: 10%;

    position: fixed;
    top: 0;
    left: 0;

    transition: 0.8s ease-out;
    margin: auto;
    z-index: 2;
`;

const Desktop = styled(Container)`
    background: rgba(0, 0, 255, 0.2);
    transition: transform 0.25s ease-out;
    transform: translate3d(0, -100%, 0);
`;

const Mobile = styled(Container)<{ scrollDirection: 'up' | 'down' }>`
    display: flex;
    background: rgba(0, 255, 0, 0.2);

    transition: transform 0.3s linear;

    ${(props) =>
        props.scrollDirection === 'up'
            ? css`
                  transform: translate3d(0, 0, 0);
              `
            : css`
                  transform: translate3d(0, -100%, 0);
              `}
`;
