import React from 'react';

import { CardsContainer , Img, Detail ,DetailDiv} from './styles';


export const Card = () => {
  return (
    <CardsContainer>
      <Img>
        <h2>imagen</h2>
      </Img>
      <Detail>

        <h2> Germany</h2>

        <DetailDiv className='Population'> <h3>Population:  	&nbsp;</h3> <p>81.770.900</p>  </DetailDiv>
        <DetailDiv> <h3>Region: &nbsp;</h3> <p>Europe</p> </DetailDiv>
        <DetailDiv> <h3>Capital: &nbsp;</h3>  <p>Berlin</p>  </DetailDiv>
        
      </Detail>
    </CardsContainer>
  )
}
