import styled from "styled-components";


export const Container = styled.div`
    background-color: #fafafa;
    /* background-color: blue; */
    width: 100%;
    /* height: 100vh; */
    padding: 50px 5.6% 0 5.6% ;

`



export const ContainerInput = styled.div`
    /* background-color: red; */
    width: 100%;
    display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    margin-bottom: 50px;

    @media (max-width: 800px){
        gap: 25px;
    }
    
`

export const CountryInput = styled.input`
    /* background-color: red; */
    height: 50px;
    width: 37%;

    border: none;
    border-radius: 5px;

    padding: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px;
    
    @media (max-width: 800px){
        height: 50px;
        width: 100%;

        border: none;
        border-radius: 5px;

        padding: 10px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px;

    }
`


export const CountryFilter = styled.select`
    width: 15%;
    background-color: white;
    display: flex;
        justify-content: space-around;
        align-items: center;
    font-weight: bold;
    padding: 10px;

    @media (max-width: 800px){
        width: 50%;
        /* background-color: white;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-weight: bold;
        padding: 10px; */
    }
`

export const CountryFilterMenu = styled.option`
    width: 100%;
    font-weight: bold;
    font-size: 2rem;
`




