import React, { useState, useEffect } from 'react'
import { Container, ContainerInput, CountryInput, CountryFilter, CountryFilterMenu } from './styles'

import { ListOfCards } from '../ListOfCards'
// components
import { Card } from '../Card'

export const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState()
  const [country, setCountry] = useState([])
  const [region1, setRegion1] = useState("All")

  const [name, setName] = useState("")

  const clearInput = () => {
    const inpt =  document.getElementById("countryName");
    inpt.value = "";
    setName("");
  }

  useEffect(() => {
    if (region1 == "All") {
      fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(
          (data) => {
            clearInput()
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
    }
    else {
      fetch(`https://restcountries.com/v3.1/region/${region1}`)
        .then(res => res.json())
        .then(
          (data) => {
            clearInput()
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
    }
  }, [region1])

  const filterRegion = (region) => {
    setRegion1(region)
  }

  const filterInput = (input) => {
    setName(country.filter(c => {
      const countryName = c.name.common.toLowerCase();
      const searchName = input.toLowerCase();
      return countryName.includes(searchName)
    }));
  }

  return (
    <Container>
      < ContainerInput>
        <CountryInput placeholder='Search for a country' onChange={(e) => filterInput(e.target.value)} id={"countryName"} ></CountryInput>
        <CountryFilter onChange={(e) => filterRegion(e.target.value)}  >
          <CountryFilterMenu value="All">
            All Regions
          </CountryFilterMenu>

          <CountryFilterMenu value="Africa">
            Africa
          </CountryFilterMenu>

          <CountryFilterMenu value="Americas">
            Americas
          </CountryFilterMenu>

          <CountryFilterMenu value="Asia">
            Asia
          </CountryFilterMenu>

          <CountryFilterMenu value="Europe">
            Europe
          </CountryFilterMenu>

          <CountryFilterMenu value="Oceania">
            Oceania
          </CountryFilterMenu>

        </CountryFilter>
      </ ContainerInput>
      {/* card */}
      <ListOfCards >
        {
          (isLoaded)
            ?
            (!name)
              ?
              country.map(card =>
                <Card
                  key={card.name.common}
                  src={card.flags.png}
                  name={card.name.common}
                  population={card.population}
                  region={card.region}
                  capital={card.capital}
                />)
              :
              name.map(card =>
                <Card
                  key={card.name.common}
                  src={card.flags.png}
                  name={card.name.common}
                  population={card.population}
                  region={card.region}
                  capital={card.capital}
                />)
            : <div> Loading ...</div>
        }
      </ListOfCards >
    </Container>
  )
}
