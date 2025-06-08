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

  --color-gray-50: #ffffff;
  --color-gray-100: #fbfbfb;
  --color-gray-200: #e6e6e6;
  --color-gray-300: #d6d6d6;
  --color-gray-400: #a3a3a3;
  --color-gray-500: #7a7a7a;
  --color-gray-600: #5a5a5a;
  --color-gray-700: #4a4a4a;
  --color-gray-800: #2d2d2d;
  --color-gray-900: #1d1d1d;
  --color-gray-950: #0f0f0f;

  --color-emerald-50:  #ecfdf5;
  --color-emerald-100: #d1fae5;
  --color-emerald-200: #a7f3d0;
  --color-emerald-300: #6ee7b7;
  --color-emerald-400: #34d399;
  --color-emerald-500: #10b981;
  --color-emerald-600: #059669;
  --color-emerald-700: #047857;
  --color-emerald-800: #065f46;
  --color-emerald-900: #064e3b;
  --color-emerald-950: #022c22;
  
  --color-error: #ff0000;   
  
  --color-status-waiting: #fef3c7;
  --color-status-accepted: var(--color-emerald-300);
  --color-status-posted: #bfdbfe;
  --color-status-received: #c7f9cc;
  --color-status-cancelled: #fca5a5;
  --color-status-rejected: #fecaca;

}

&.dark-mode {

    --color-gray-50: #0e0e0e;
    --color-gray-100: #161616;
    --color-gray-200: #2d2d2d;
    --color-gray-300: #4a4a4a;
    --color-gray-400: #5a5a5a;
    --color-gray-500: #7a7a7a;
    --color-gray-600: #a3a3a3;
    --color-gray-700: #d6d6d6;
    --color-gray-800: #e6e6e6;
    --color-gray-900: #f5f5f5;
    --color-gray-950: #fafafa;

    --color-emerald-50:  #022c22;
    --color-emerald-100: #064e3b;
    --color-emerald-200: #065f46;
    --color-emerald-300: #047857;
    --color-emerald-400: #059669;
    --color-emerald-500: #10b981;
    --color-emerald-600: #34d399;
    --color-emerald-700: #6ee7b7;
    --color-emerald-800: #a7f3d0;
    --color-emerald-900: #d1fae5;
    --color-emerald-950: #ecfdf5;


    --color-error: #ff3333;

  --color-status-waiting: #78350f;
  --color-status-accepted: var(--color-emerald-600);
  --color-status-posted: #1e3a8a;
  --color-status-received: #065f46;
  --color-status-cancelled: #7f1d1d;
  --color-status-rejected: #991b1b;

}


}


* {
    box-sizing: border-box;
}

html {
    font-family: ubuntu;
    background: var(--color-gray-100);
}

body {
    margin: 0;
}

h1,h2,h3,h4,h5,h6 {
    color: var(--color-gray-950);
}

ul {
    list-style-type: none;
}

img {
    -ms-user-select: none;
    user-select: none;
    -webkit-user-select: none;
}

input, label {
    font-size: 12px;
}

.toast {
    position: relative;
}

.toast::after {
    width: 10px;
    height: 10px;
    left: 10px;
    top: 4px;
    bottom: 4px;
    background-color: red;
}
@media (min-width: 640px) {
input, label {
    font-size: 14px;
}}

@media (min-width: 1280px) {
input, label {
    font-size: 16px;
}
}
`;

// --color-amber-50: #fef9e6;
// --color-amber-100: #fde9a8;
// --color-amber-200: #fbd360;
// --color-amber-300: #f7b135;
// --color-amber-400: #ea8a2e;
// --color-amber-500: #d46b1d;
// --color-amber-600: #b4531a;
// --color-amber-700: #8f3f19;
// --color-amber-800: #6d3218;
// --color-amber-900: #512816;
// --color-amber-950: #31190e;

// --color-amber-50: #2a2415;
// --color-amber-100: #3e3218;
// --color-amber-200: #5a471d;
// --color-amber-300: #7d5d22;
// --color-amber-400: #a87628;
// --color-amber-500: #d38e2d;
// --color-amber-600: #e9a845;
// --color-amber-700: #f5bc6a;
// --color-amber-800: #fbd493;
// --color-amber-900: #fee8bc;
// --color-amber-950: #fff5e1;

export default GlobalStyles;
