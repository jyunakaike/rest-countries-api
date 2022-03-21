import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { CardsContainer, ImageContainer ,Img, Detail, DetailDiv } from './styles';

export const Card = ({ src, name, population, region, capital }) => {

  return (
    // (isLoaded)
    //   ?
    <CardsContainer>
      {
        <React.Fragment >
          <ImageContainer>
            <Link
              // key={name}
              to={`/country/${name}`}
              state={name}
            >
              <Img src={src} />
            </Link>
          </ImageContainer>
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
