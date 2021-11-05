import React from 'react';
import styled from 'styled-components';

function Logo(props: propsIState) {
    const { stroke = 'black' } = props;
    return (
        <Container viewBox="0 0 32 11" fill="none" stroke={stroke} xmlns="http://www.w3.org/2000/svg">
            <path d="M9 1H2V6H9" strokeWidth="1.5" />
            <path d="M11 4V8M7 8H15" strokeWidth="1.5" />
            <circle cx="17" cy="4" r="2.25" strokeWidth="1.5" />
            <path d="M23 0V8H25" strokeWidth="1.5" />
            <path d="M26 4H28M28 2.66667V7.33333M30 2V10" strokeWidth="1.5" />
        </Container>
    );
}

export default Logo;
interface propsIState {
    stroke?: string;
}

const Container = styled.svg<{ stroke: string }>`
    width: 100%;
    height: 100%;

    stroke: ${(props) => props.stroke};
`;
