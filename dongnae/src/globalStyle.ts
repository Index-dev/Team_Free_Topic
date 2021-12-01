import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        padding: 0;
        margin: 0;
        box-sizing:border-box;
    }
    body{ 
        font-family: 'Noto Sans KR', sans-serif;
        overflow-x: hidden;
    }
`;

export default globalStyles;
