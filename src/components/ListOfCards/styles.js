import styled from "styled-components";

export const CardsContainer = styled.div`
    width: 100%;
    height: 800px;
    display: grid;
    grid-template-columns: repeat(4,  minmax(20px, 1fr ) ); 
    column-gap: 2.5%;
    row-gap: 20px;

    @media (max-width: 800px){
        display: grid;
            place-items: center;

        grid-template-columns: 1fr ;
        column-gap: 0%;
    }
`





