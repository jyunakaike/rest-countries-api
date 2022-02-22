import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    margin: 0;
    padding: 0;
}
html{
    font-size: 62.5%;
}
p{
    font-size: 1.6rem;
}
h1{
    font-size: 2.5rem;
    font-weight: 800;
}
h2{
    font-size: 2rem;
    font-weight: 800;
}

h3{
    font-size: 1.6rem;
    font-weight: 600;
}

`