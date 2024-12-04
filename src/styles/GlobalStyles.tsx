import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: RubikWetPaint;
    src: url('/fonts/RubikWetPaint-Regular.ttf');
}

@font-face {
    font-family: ubuntu;
    src: url('/fonts/Ubuntu-Regular.ttf');
}

:root {
    &.light-mode {
        --color-gray-0: #ffffff;
        --color-gray-1: #e9e9e9;
        --color-gray-2: #cacaca;
        --color-gray-3:#a0a0a0 ;
        --color-gray-4: #707070;
        --color-gray-5: #606060;
        --color-gray-6: #505050;
        --color-gray-7: #404040;
        --color-gray-8: #303030;
        --color-gray-9: #202020;
        --color-lime: #d0f38b;
        --color-green-1: #059d3c;
        --color-green-2: #036b29;
        --color-orange-1: #fa7a09;
        --color-orange-2: #b65603;
    }

    &.dark-mode {
        --color-gray-0: #1b1b1b;
        --color-gray-1: #252525;
        --color-gray-2: #2e2e2e;
        --color-gray-3:#353535 ;
        --color-gray-4: #444444;
        --color-gray-5: #505050;
        --color-gray-6: #606060;
        --color-gray-7: #727272;
        --color-gray-8: #dddddd;
        --color-gray-9: #dfdfdf;
        --color-lime: #d0f38b;
        --color-green-1: #059d3c;
        --color-green-2: #036b29;
        --color-orange-1: #fa7a09;
        --color-orange-2: #b65603;
    }

}


* {
    box-sizing: border-box;
}

html {
    font-family: ubuntu;
    background: var(--color-gray-1);

}

body {
    margin: 0;
}

h1,h2,h3,h4,h5,h6 {
    color: var(--color-gray-8);
}

ul {
    list-style-type: none;
}

img {
    -ms-user-select: none;
    user-select: none;
    -webkit-user-select: none;
}
`;

export default GlobalStyles;
