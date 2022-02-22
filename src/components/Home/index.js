import React from 'react'
import { Container, ContainerInput, CountryInput , CountryFilter } from './styles'

import { ListOfCards } from '../ListOfCards'

export const Home = () => {
  return (
    <Container>
      < ContainerInput>
        <CountryInput placeholder='Search for a country'></CountryInput>
        <CountryFilter  ><p>Filter by Region</p> <span>i</span></CountryFilter>
      </ ContainerInput>
      {/* card */}

      <ListOfCards />



      {/* <div>
        <div>
          <h2>imagen</h2> 
        </div>
        <div>
            <h2> Germany</h2>
            <h3>population</h3> 81.770.900
            <h3>Region</h3> Europe
            <h3>Capital</h3> Berlin
        </div>
      </div> */}


    </Container>

  )
}
