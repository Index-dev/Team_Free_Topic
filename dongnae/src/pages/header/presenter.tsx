import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { screenTypeState } from '../../modules/recoil/screenType';
import Logo from '../../components/icons/logo';

function Presenter(props: propsIState) {
    const { desktopContRef } = props;
    const screenType = useRecoilValue(screenTypeState);

    return (
        <>
            <LogoContainer>
                <LogoSizer>
                    <Logo />
                </LogoSizer>
            </LogoContainer>
            {screenType === 'isPC' ? (
                <Desktop ref={desktopContRef}>
                    <h2>desktop Header</h2>
                </Desktop>
            ) : (
                <Mobile>
                    <h2>mobile Header</h2>
                </Mobile>
            )}
        </>
    );
}

export default Presenter;

interface propsIState {
    desktopContRef: React.RefObject<HTMLDivElement>;
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
