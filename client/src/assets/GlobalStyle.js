import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
.App {
    display: flex;
    width: 100%;
    align-items: stretch;
}
body {
    background: #fafafa;
    background-color: #4c443c;
    font-family: 'Do Hyeon', sans-serif;
}

#main-body {
    max-height:90vh;
}

  *, *:before, *:after {
    outline: none;
    user-select: none;
  }
  a,
  a:hover,
  a:focus {
      color: inherit;
      text-decoration: none;
      transition: all 0.3s;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style-type: none;
  }
  p,h2 {
    margin: 0;
  }
  hr {
    border: 2px solid;
    margin-bottom: 35px;
  }
`;

export default GlobalStyle;
