import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
              Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
  }
  .active{
    color:red;
  }
`;

export default GlobalStyle;
