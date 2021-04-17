import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poor+Story&display=swap');
  .App {
    display: flex;
    width: 100%;
    align-items: stretch;
}
body {
    background: #fafafa;
    background-color: #4c443c;      
}
#main-footer {
    background: #343a40;
    color: #ffff;
}
#main-body {
    min-height:220vh;
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
