import styled from "styled-components";

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  * {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :root {
    --hue: 223;
    --bg: hsl(var(--hue), 90%, 90%);
    --fg: hsl(var(--hue), 90%, 10%);
    --trans-dur: 0.3s;
    font-size: calc(16px + (24 - 16) * (100vw - 320px) / (2560 - 320));
  }
  div {
    background-color: var(--bg);
    color: var(--fg);
    display: flex;
    font: 1em/1.5 sans-serif;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    transition: background-color var(--trans-dur), color var(--trans-dur);
  }
  .pl {
    display: block;
    margin: auto;
    width: 16em;
    height: auto;
  }
  .pl line {
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
  .pl__line1,
  .pl__line9 {
    animation-name: line1;
  }
  .pl__line2,
  .pl__line8 {
    animation-name: line2;
  }
  .pl__line3,
  .pl__line7 {
    animation-name: line3;
  }
  .pl__line4,
  .pl__line6 {
    animation-name: line4;
  }
  .pl__line5 {
    animation-name: line5;
  }

  /* Dark theme */
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: hsl(var(--hue), 90%, 10%);
      --fg: hsl(var(--hue), 90%, 90%);
    }
  }

  /* Animations */
  @keyframes line1 {
    from,
    8% {
      stroke-dashoffset: 31.99;
      transform: translate(0, 16px);
    }
    18% {
      stroke-dashoffset: 16;
      transform: translate(0, 8px);
    }
    28% {
      stroke-dashoffset: 31.99;
      transform: translate(0, 16px);
    }
    38% {
      stroke-dashoffset: 0;
      transform: translate(0, 0);
    }
    48% {
      opacity: 1;
      stroke-dashoffset: 31.99;
      transform: translate(0, 16px);
    }
    53% {
      opacity: 0;
      stroke-dashoffset: 31.99;
      transform: translate(8px, 16px);
    }
    56% {
      animation-timing-function: steps(1, start);
      opacity: 0;
      stroke-dashoffset: 32;
      transform: translate(0, 16px);
    }
    60% {
      animation-timing-function: ease-out;
      opacity: 1;
      stroke-dashoffset: 32;
      transform: translate(0, 16px);
    }
    70% {
      animation-timing-function: ease-in-out;
      stroke-dashoffset: 0;
      transform: translate(0, 0);
    }
    80% {
      stroke-dashoffset: 31.99;
      transform: translate(0, 16px);
    }
    90% {
      stroke-dashoffset: 16;
      transform: translate(0, 8px);
    }
    to {
      stroke-dashoffset: 31.99;
      transform: translate(0, 16px);
    }
  }
  @keyframes line2 {
    from,
    6% {
      stroke-dashoffset: 31.99;
      transform: translate(0, 16px);
    }
    16% {
      stroke-dashoffset: 16;
      transform: translate(0, 8px);
    }
    26% {
      stroke-dashoffset: 31.99;
      transform: translate(0, 16px);
    }
    36% {
      stroke-dashoffset: 0;
      transform: translate(0, 0);
    }
    46% {
      opacity: 1;
      stroke-dashoffset: 31.99;
      transform: translate(0, 16px);
    }
    51% {
      opacity: 0;
      stroke-dashoffset: 31.99;
      transform: translate(8px, 16px);
    }
    54% {
      animation-timing-function: steps(1, start);
      opacity: 0;
      stroke-dashoffset: 32;
      transform: translate(0, 16px);
    }
    58% {
      animation-timing-function: ease-out;
      opacity: 1;
      stroke-dashoffset: 32;
      transform: translate(0, 16px);
    }
    68% {
      animation-timing-function: ease-in-out;
      stroke-dashoffset: 0;
      transform: translate(0, 0);
    }
    78% {
      stroke-dashoffset: 31.99;
      transform: translate(0, 16px);
    }
    88% {
      stroke-dashoffset: 16;
      transform: translate(0, 8px);
    }
    98%,
    to {
      stroke-dashoffset: 31.99;
      transform: translate(0, 16px);
    }
  }
  @keyframes line3 {
    from,
    4% {
      stroke-dashoffset: 31.99;
      transform: translate(0, 16px);
    }
    14% {
      stroke-dashoffset: 16;
      transform: translate(0, 8px);
    }
    24% {
      stroke-dashoffset: 31.99;
      transform: translate(0, 16px);
    }
    34% {
      stroke-dashoffset: 0;
      transform: translate(0, 0);
    }
    44% {
      opacity: 1;
      stroke-dashoffset: 31.99;
      transform: translate(0, 16px);
    }
    49% {
      opacity: 0;
      stroke-dashoffset: 31.99;
      transform: translate(8px, 16px);
    }
    52% {
      animation-timing-function: steps(1, start);
      opacity: 0;
      stroke-dashoffset: 32;
      transform: translate(0, 16px);
    }
    56% {
      animation-timing-function: ease-out;
      opacity: 1;
      stroke-dashoffset: 32;
      transform: translate(0, 16px);
    }
    66% {
      animation-timing-function: ease-in-out;
      stroke-dashoffset: 0;
      transform: translate(0, 0);
    }
    76% {
      stroke-dashoffset: 31.99;
      transform: translate(0, 16px);
    }
    86% {
      stroke-dashoffset: 16;
      transform: translate(0, 8px);
    }
    96%,
    to {
      stroke-dashoffset: 31.99;
      transform: translate(0, 16px);
    }
  }
  @keyframes line4 {
    from,
    2% {
      stroke-dashoffset: 31.99;
      transform: translate(0, 16px);
    }
    12% {
      stroke-dashoffset: 16;
      transform: translate(0, 8px);
    }
    22% {
      stroke-dashoffset: 31.99;
      transform: translate(0, 16px);
    }
    32% {
      stroke-dashoffset: 0;
      transform: translate(0, 0);
    }
    42% {
      opacity: 1;
      stroke-dashoffset: 31.99;
      transform: translate(0, 16px);
    }
    47% {
      opacity: 0;
      stroke-dashoffset: 31.99;
      transform: translate(8px, 16px);
    }
    50% {
      animation-timing-function: steps(1, start);
      opacity: 0;
      stroke-dashoffset: 32;
      transform: translate(0, 16px);
    }
    54% {
      animation-timing-function: ease-out;
      opacity: 1;
      stroke-dashoffset: 32;
      transform: translate(0, 16px);
    }
    64% {
      animation-timing-function: ease-in-out;
      stroke-dashoffset: 0;
      transform: translate(0, 0);
    }
    74% {
      stroke-dashoffset: 31.99;
      transform: translate(0, 16px);
    }
    84% {
      stroke-dashoffset: 16;
      transform: translate(0, 8px);
    }
    94%,
    to {
      stroke-dashoffset: 31.99;
      transform: translate(0, 16px);
    }
  }
  @keyframes line5 {
    from {
      stroke-dashoffset: 31.99;
      transform: translate(0, 16px);
    }
    10% {
      stroke-dashoffset: 16;
      transform: translate(0, 8px);
    }
    20% {
      stroke-dashoffset: 31.99;
      transform: translate(0, 16px);
    }
    30% {
      stroke-dashoffset: 0;
      transform: translate(0, 0);
    }
    40% {
      stroke-dashoffset: -16;
      transform: translate(0, 15px);
    }
    50% {
      stroke-dashoffset: -31;
      transform: translate(0, -48px);
    }
    58% {
      stroke-dashoffset: -31;
      transform: translate(0, 8px);
    }
    65% {
      stroke-dashoffset: -31.99;
      transform: translate(0, -24px);
    }
    71.99% {
      animation-timing-function: steps(1);
      stroke-dashoffset: -31.99;
      transform: translate(0, -16px);
    }
    72% {
      animation-timing-function: ease-in-out;
      stroke-dashoffset: 31.99;
      transform: translate(0, 16px);
    }
    82% {
      stroke-dashoffset: 16;
      transform: translate(0, 8px);
    }
    92%,
    to {
      stroke-dashoffset: 31.99;
      transform: translate(0, 16px);
    }
  }
`;
