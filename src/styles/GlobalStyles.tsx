import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --color-black: #000;
    --color-white: #fff;

    --color-stone-50: #fafaf9;
    --color-stone-100: #f5f5f4;
    --color-stone-200: #e7e5e4;
    --color-stone-300: #d6d3d1;
    --color-stone-400: #a8a29e;
    --color-stone-500: #78716c;
    --color-stone-600: #57534e;
    --color-stone-700: #44403c;
    --color-stone-800: #292524;
    --color-stone-900: #1c1917;
    --color-stone-950: #0c0a09;

    --color-sky-50:  #f0f9ff; 
    --color-sky-100: #e0f2fe; 
    --color-sky-200: #bae6fd; 
    --color-sky-300: #7dd3fc; 
    --color-sky-400: #38bdf8; 
    --color-sky-500: #0ea5e9; 
    --color-sky-600: #0284c7; 
    --color-sky-700: #0369a1; 
    --color-sky-800: #075985; 
    --color-sky-900: #0c4a6e; 
    --color-sky-950: #082f49;

}


* {
    box-sizing: border-box;
}

html {
    font-family: sans-serif;
}

body {
    margin: 0;
}

h1,h2,h3,h4,h5,h6 {
    color: var(--color-stone-800);
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
