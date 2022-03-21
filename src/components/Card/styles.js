import styled from "styled-components";

export const CardsContainer = styled.div`
    height: 340px;
    width: 100%;
    /* width: 20%; */
    background-color: yellow;

    @media (max-width: 800px){
      height: 340px;
      /* width: 50%; */
      max-width: 75%;
      min-width: 50%;
      /* width: 20%; */
      background-color: yellow;
     
    }

`

export const ImageContainer = styled.div`
    height: 50%;
    width: 100%;
`
export const Img = styled.img`
    height: 100%;
    width: 100%;
    /* background-color: red; */
    /* object-fit: cover; */

`
export const Detail= styled.div`
    height: 50%;
    width: auto;
    padding:7.5% 11.5% 0 11.5%;
    /* padding:20px 30px 0 30px; */
    background-color: white;
`

export const DetailDiv = styled.div`
  display:flex;
  align-items: center;
  justify-content: flex-start;
  &.Population{
    margin-top: 10px;
  }
`


