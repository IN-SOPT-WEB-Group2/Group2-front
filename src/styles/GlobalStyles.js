import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Pretendard';
    }
    a {
        text-decoration: none;
    }
    input:focus {
        outline: 0;
    }
    :root {
        --color-red: #ED1A3B;
        --color-black: '#131112';
        --color-background: '#41414D';
        --color-navy: '#1D2235';
    }
`;

export default GlobalStyles;
