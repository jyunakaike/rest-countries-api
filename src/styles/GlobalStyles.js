import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
    margin: 0;
    padding: 0;
}

body{
    background-color: ${props=>props.bg};
    color : ${props=>props.bgp};
}

input{ 
    background-color: ${props=>props.bg}
}

select{
    background-color: ${props=>props.bg};
    color : ${props=>props.bgp};
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

    @media (max-width: 800px) {
        font-size: 1.5rem;
        
    }
}
h2{
    font-size: 2rem;
    font-weight: 800;
    @media (max-width: 800px) {
        font-size: 1.5rem;
        
    }
}

h3{
    font-size: 1.6rem;
    font-weight: 600;
}
`