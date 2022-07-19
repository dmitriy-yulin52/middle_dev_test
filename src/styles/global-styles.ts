import {createGlobalStyle} from "styled-components";

export const theme = {
  defPadding: "2rem",
  defFont: "'Open Sans', sans-serif",

  colors: {
    font: "#252525",
    links: "#2aa2ff",
    mainBg: "#f0f0f0",
    mainBgDark: "#999999",
    secondBg: "#ffffff",
  },
};

export const GlobalStyle = createGlobalStyle`
  *, *:after, *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 78.5%;
  }

  body {
    font-family: ${theme.defFont};
    color: ${theme.colors.font};
  }

  a {
    text-decoration: none;
    color: ${theme.colors.links};
  }

  #root {
    position: relative;
  }
  }
`;