import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 50px 5.6% 0 5.6% ;
`
export const ContainerInput = styled.div`
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
    height: 50px;
    width: 37%;

    border: none;
    border-radius: 5px;

    padding: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    font-weight: bold;

    @media (max-width: 800px){
        height: 50px;
        width: 100%;

        border: none;
        border-radius: 5px;

        padding: 10px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
`

export const CountryFilter = styled.select`
    width: 15%;
    display: flex;
        justify-content: space-around;
        align-items: center;
    font-weight: bold;
    padding: 10px;

    @media (max-width: 800px){
        width: 50%;
    }
`

export const CountryFilterMenu = styled.option`
    width: 100%;
    font-weight: bold;
    font-size: 2rem;
`




