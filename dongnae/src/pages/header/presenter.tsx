import React from 'react';
import styled from 'styled-components';

function Presenter() {
    return (
        <Container>
            <h2>Header</h2>
        </Container>
    );
}

export default Presenter;

const Container = styled.div`
    width: 100%;
    height: 10%;

    position: fixed;
    top: -10%;
    left: 0;

    background: red;
    transition: 0.8s ease-out;
    z-index: 2;
`;
