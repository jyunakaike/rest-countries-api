import styled from "styled-components";

export const CardsContainer = styled.div`
    height: 340px;
    width: 100%;
    border-radius: 5px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    @media (max-width: 800px){
      height: 340px;
      max-width: 75%;
      min-width: 50%;
    }
`

export const ImageContainer = styled.div`
    height: 50%;
    width: 100%;
`
export const Img = styled.img`
    height: 100%;
    width: 100%;
`
export const Detail= styled.div`
    height: 50%;
    width: auto;
    padding:7.5% 11.5% 0 11.5%;
`

export const DetailDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: flex-start;
  &.Population{
    margin-top: 10px;
  }
`


