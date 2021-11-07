import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { screenTypeState } from '../../modules/recoil/screenType';
import Logo from '../../components/icons/logo';

function Presenter() {
    const screenType = useRecoilValue(screenTypeState);

    return (
        <>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            {screenType === 'isPC' ? (
                <Desktop>
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

const LogoContainer = styled.div`
    width: 100%;
    height: 10%;

    position: fixed;
    top: 0;
    left: 0;

    background: transparent;
    z-index: 3;
`;
const Container = styled.div`
    width: 100%;
    height: 10%;

    position: fixed;
    top: 0;
    left: 0;

    background: red;
    transition: 0.8s ease-out;
    z-index: 2;
`;

const Desktop = styled(Container)`
    background: blue;
`;
const Mobile = styled(Container)`
    background: green;
`;
