import React from 'react';
import { CardsContainer , Img, Detail} from './styles';

export const Card = () => {
  return (
    <CardsContainer>
      <Img>
        <h2>imagen</h2>
      </Img>
      <Detail>
        <h2> Germany</h2>
        <h3>population</h3> 81.770.900
        <h3>Region</h3> Europe
        <h3>Capital</h3> Berlin
      </Detail>
    </CardsContainer>
  )
}
