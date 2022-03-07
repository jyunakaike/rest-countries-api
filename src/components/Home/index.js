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

  useEffect(() => {
    if (region1 == "All") {
      fetch(`https://restcountries.com/v3.1/all`)
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
    }
    else {
      fetch(`https://restcountries.com/v3.1/region/${region1}`)
        .then(res => res.json())
        .then(
          (data) => {
            setIsLoaded(true)
            setCountry(data)
            console.log()
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

  // useEffect(() => {
  //   // if (!name.length) {
  //   //   null
  //   //   console.log("Es nulo");
  //   // }
  //   // else {
  //   //   const filterCountry = country.filter(c => {
  //   //     const countryName = c.name.common.toLowerCase();
  //   //     const searchName = name.toLowerCase();
  //   //     // console.log(countryName, searchName);
  //   //     return countryName.includes(searchName)
  //   //   })
  //   //   setCountry(filterCountry)
  //   //   console.log('filtered name', name);
  //   //   console.log('country', country)
  //   // }
  //   console.log(name)
  // }, [name])

  // useEffect(() => {
  //   if(!name.length){
  //     console.log("null")
  //   }
  //   else{
  //     console.log(country)
  //   }
  // }, [country])


  const filterRegion = (region) => {
    setRegion1(region)
  }

  // const filterInput = (input) => {
  //   setName(input);
  // }

  const filterInput = (input) => {
    console.log(country.filter(c => {
      const countryName = c.name.common.toLowerCase();
      const searchName = input.toLowerCase();
      return countryName.includes(searchName)
    }));
    setName(country.filter(c => {
      const countryName = c.name.common.toLowerCase();
      const searchName = input.toLowerCase();
      return countryName.includes(searchName)
    }));
  }

  return (
    <Container>
      < ContainerInput>
        <CountryInput placeholder='Search for a country' onChange={(e) => filterInput(e.target.value)} ></CountryInput>
        <CountryFilter onChange={(e) => filterRegion(e.target.value)} >
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
