import styled from "styled-components";


export const BackButton = styled.div`
    font-size: 1.5rem;
    width: 10%;
    /* background-color: white ; */
    height: 40px;
    padding:  auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    /* display:grid;
        place-items: center; */
    display: flex ;
        justify-content: center;
        align-items: center;
        gap:10px;
    margin-left: 5% ;
    margin-top: 5%;
    margin-bottom: 7%;

`

export const CountryContainer = styled.div`
    /* background-color: blue; */
    width: 100%;
    height:100%;
    padding: 0 5%;
    display: flex;
        justify-content:space-between;

    @media (max-width: 800px) {
        /* font-size: 1.5rem; */
        flex-direction: column;
    }

`
export const Flag = styled.img`
    width: 50% ;
    height: 100%;
    @media (max-width: 800px) {
        width: 100%;
    }
`

export const DetailContainer = styled.div`
    /* background-color: red; */
    width: 40%;
    @media (max-width: 800px) {
        width: 100%;
        display:flex;
        flex-direction: column;
    }

`

export const DetailInfoContainer = styled.div`
    width: 100%;
    height: 50%;
    /* background-color:yellow; */
    display: flex;
        flex-direction: row;
        justify-content: space-between;

    @media (max-width: 800px) {
        width: 100%;
        height: 50%;
        /* background-color:yellow; */
        width: 100%;
        display:flex;
            flex-direction: column;
    }

`

export const Title = styled.h1`
    margin: 10% 0;
`
export const Detail1  = styled.div`
    width: 50%;

    @media (max-width: 800px) {
        width: 100%;
        margin-bottom: 10% ;
    }
`
export const Detail2  = styled.div`
    width: 50%;
    @media (max-width: 800px) {
        width: 100%;
        margin-bottom: 10% ;
    }
`

export const ParaDetail = styled.p`
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 2.5%;
    margin-right: 2.5%;

`

export const Para = styled.p`
    font-size: 1.5rem;
`






