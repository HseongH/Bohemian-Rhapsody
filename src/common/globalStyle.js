import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font {
            family: 'Noto Sans KR', sans-serif;
            size: 16px;
        }

        font-weight: 400;
        line-height: 1.25;
        color: #2B2D42;
    }
`;

export default GlobalStyle;
