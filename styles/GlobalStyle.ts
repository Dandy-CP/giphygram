import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  background: black;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: white;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`;

export default GlobalStyle;
