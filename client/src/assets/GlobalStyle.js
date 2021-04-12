import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .App {
    display: flex;
    width: 100%;
    align-items: stretch;
}

@import 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700';

body {
    font-family: 'Poppins', sans-serif;
    background: #fafafa;
}
#main-footer {
    background: #343a40;
    color: #ffff;
}
#main-body {
    min-height: 90vh;
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
`;

export default GlobalStyle;
