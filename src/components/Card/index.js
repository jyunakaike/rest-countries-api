import React, { useState, useEffect } from 'react';

import { CardsContainer, Img, Detail, DetailDiv } from './styles';

export const Card = ({ src , name,population, region, capital }) => {

  return (
    // (isLoaded)
    //   ?
    <CardsContainer>
      {
        <React.Fragment >
          <Img src={src} />
          <Detail>
            <h2> {name}</h2>
            <DetailDiv className='Population'> <h3>Population:  	&nbsp;</h3> <p>{population}</p>  </DetailDiv>
            <DetailDiv> <h3>Region: &nbsp;</h3> <p>{region}</p> </DetailDiv>
            <DetailDiv> <h3>Capital: &nbsp;</h3>  <p>{capital}</p>  </DetailDiv>
          </Detail>
        </React.Fragment>
      }
    </CardsContainer>
    // :
    // <div> Loading ...</div>
  )
}
