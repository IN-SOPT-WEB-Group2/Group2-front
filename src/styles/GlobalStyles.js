import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    @font-face {
        font-family: Pretendard;
        src: url('../fonts/Pretendard-Regular.woff') format('font-woff');
    }
    body {
        font-family: 'Pretendard';
        font-size: 62.5%;
    }
    :root {
        --color-red: #ED1A3B;
        --color-black: #131112;
        --color-background: #41414D;
        --color-navy: #1D2235;
        --color-white: #FFFFFF;
    }
    * {
        box-sizing: border-box;
        font-family: 'Pretendard';
    }

    a {
        text-decoration: none;
    }
    
    input:focus {
        outline: 0;
    }
    
    button, svg {
        cursor: pointer;
    }
`;

export default GlobalStyles;
