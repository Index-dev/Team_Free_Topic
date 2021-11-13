import React from 'react';
import styled from 'styled-components';

import { screenTypeRecoil } from '../../modules/recoil/screenType';
import Logo from '../../components/icons/logo';

function Presenter(props: propsIState) {
    const { scrollY, scrollDirection, desktopContRef, mobileContRef } = props;
    const screenInfo = screenTypeRecoil();

    return (
        <>
            <LogoContainer>
                <LogoSizer>
                    <Logo />
                </LogoSizer>
            </LogoContainer>
            {screenInfo.type === 'isPC' ? (
                <Desktop ref={desktopContRef}>
                    <h2>desktop Header</h2>
                </Desktop>
            ) : (
                <Mobile ref={mobileContRef}>
                    <h2>mobile Header</h2>
                    {scrollY}
                    {scrollDirection}
                </Mobile>
            )}
        </>
    );
}

export default Presenter;

interface propsIState {
    scrollY: number;
    scrollDirection: 'up' | 'down';
    desktopContRef: React.RefObject<HTMLDivElement>;
    mobileContRef: React.RefObject<HTMLDivElement>;
}

const LogoContainer = styled.div`
    width: 100%;
    height: 10%;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;

    background: transparent;
    padding-left: 1.5em;
    z-index: 3;
`;

const LogoSizer = styled.div`
    width: 15%;
    height: 90%;
`;

const Container = styled.div`
    width: 100%;
    height: 10%;

    position: fixed;
    top: 0;
    left: 0;

    transition: 0.8s ease-out;
    z-index: 2;
`;

const Desktop = styled(Container)`
    background: blue;

    transition: transform 0.25s ease-out;
    transform: translate3d(0, -100%, 0);
`;

const Mobile = styled(Container)`
    background: green;
`;
