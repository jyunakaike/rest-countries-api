import React, { useState, useEffect } from 'react'
import { Container, ContainerInput, CountryInput, CountryFilter, CountryFilterMenu } from './styles'

import { ListOfCards } from '../ListOfCards'


// components
import { Card } from '../Card'

export const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState()
  const [country, setCountry] = useState([])

  const [filterMenu, setFilterMenu] = useState(false);


  useEffect(() => {
    const arrays = ['germany', 'usa', 'brazil', 'iceland', 'afghanistan', 'Åland%20Islands', 'albania', 'algeria']
    fetch(`https://restcountries.com/v3.1/alpha?codes=DEU,USA,BRA,ISL,AFG,ALA,ALB,DZA`)
      .then(res => res.json())
      .then(
        (data) => {
          setIsLoaded(true)
          setCountry(data)
        },
        (error) => {
          setIsLoaded(true)
          setError(true)
          // console.log(error)
        },
      )
      .then(setIsLoaded(true))
  }, [])

  const filterRegion = () => {
    console.log('Click FilterRegion');
    setFilterMenu(true);
  }

  return (
    <Container>
      < ContainerInput>
        <CountryInput placeholder='Search for a country'></CountryInput>

        <CountryFilter onClick={filterRegion} >
          <CountryFilterMenu>
            All Regions
          </CountryFilterMenu>
          <CountryFilterMenu>
            Africa
          </CountryFilterMenu>
          <CountryFilterMenu>
            Americas
          </CountryFilterMenu>
          <CountryFilterMenu>
            Asia
          </CountryFilterMenu>
          <CountryFilterMenu>
            Europe
          </CountryFilterMenu>
          <CountryFilterMenu>
            Oceania
          </CountryFilterMenu>
        </CountryFilter>

      </ ContainerInput>
      {/* card */}

      <ListOfCards >
        {
          (isLoaded)
            ? country.map(card =>
              <Card
                key={card.name.common}
                src={card.flags.png}
                name={card.name.common}
                population={card.population}
                region={card.region}
                capital={card.capital.toString()}
              />)
            : <div> Loading ...</div>
        }
      </ListOfCards >
    </Container>

  )
}
