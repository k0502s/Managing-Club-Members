import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  .App {
    display: flex;
    width: 100%;
    align-items: stretch;
}

@import 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700';
@import 'https://fonts.googleapis.com/css2?family=Staatliches&display=swap';
body {
    /* font-family: 'Poppins', sans-serif; */
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
  /* .menu-open {
     background: #6d7fcc;
 }

 .items-menu {
     color: #fff;
    background: #6d7fcc;
}

 li a.dropdown-toggle::after {
    display: inline-flex;
   position: relative;
    left: 60%;
    top: 10%;
}

@media only screen and (max-width: 500px) {
 
    li a.dropdown-toggle::after {
        display: inline-block;
        position: relative;
        left: 68%;
    }
}*/
`; 

export default GlobalStyle;
