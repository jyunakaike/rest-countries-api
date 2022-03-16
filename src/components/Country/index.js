import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// import { Header } from '../components/Header'
import { Header } from '../Header'
import { GlobalStyle } from '../../styles/GlobalStyles'
// import { GlobalStyle } from '../styles/GlobalStyles'

import { BackButton, CountryContainer, Flag, DetailContainer, Title, DetailInfoContainer, Detail1, Detail2, ParaDetail, Para } from './styles';


export const Country = () => {
  const location = useLocation();
  const name = location.state
  const [country, setCountry] = useState();
  const [loaded, setIsLoaded] = useState(false);
  const [currencies, setCurrencies] = useState()

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then(res => res.json())
      .then(
        (data) => {
          setCountry(data)
          setIsLoaded(true)
        },
        (error) => {
          setIsLoaded(true)
          // setError(true)
          console.log(error)
        },
      )
    // .then(setIsLoaded(true))
  }, [])


  if (country != null) {
    country.map(cot => {
      // console.log(cot.currencies);
      // console.log(cot.languages);
      // const currencyArray = Object.keys(cot.currencies);
      // const languagesArray = Object.keys(cot.languages);
      // console.log(currencyArray);
      // console.log(languagesArray);


      // {
      //   Object.keys(cot.languages).map(lang => {
      //     console.log(lang)

      //   })
      // }

      // {
      //   Object.keys(cot.currencies).map(curr => {
      //     console.log(curr)
      //   }
      //   )
      // }




    })
  }



  // const Currenc = Object.keys()

  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />

      <BackButton> Back </BackButton>

      {/* <CountryContainer> */}

      {
        (loaded)
          ?
          country.map(cot =>
            <CountryContainer key={cot.name.common}>
              {/* <div> */}
              <Flag src={cot.flags.png} />

              {/* </div> */}
              <DetailContainer>
                <Title  > {cot.name.common} </Title>

                <DetailInfoContainer>
                  <Detail1>
                    <div style={{ display: "flex" }}>  <ParaDetail>Native Name:</ParaDetail>  <Para> {cot.name.nativeName.spa.official} </Para> </div>
                    <div style={{ display: "flex" }}>  <ParaDetail>Population:</ParaDetail>  <Para> {cot.population} </Para>  </div>
                    <div style={{ display: "flex" }}><ParaDetail> Region:</ParaDetail>  <Para> {cot.region} </Para> </div>
                    <div style={{ display: "flex" }}><ParaDetail> Sub Region:</ParaDetail>  <Para> {cot.subregion} </Para> </div>
                    <div style={{ display: "flex" }}><ParaDetail> Capital: </ParaDetail>  <Para> {cot.capital} </Para> </div>
                  </Detail1>

                  <Detail2>
                    <div style={{ display: "flex" }}>  <ParaDetail>Top Level Domain:</ParaDetail>  <Para> {cot.tld} </Para> </div>
                    <div style={{ display: "flex" }}> <ParaDetail>Currency:</ParaDetail> 
                      {
                        Object.keys(cot.currencies).map(curr =>
                          <Para key={curr}>{curr}</Para>
                        )
                      }
                    </div>
                    <div style={{ display: "flex" }}> <ParaDetail>Languages</ParaDetail> 
                      {
                        Object.keys(cot.languages).map(lang =>
                          <Para key={lang}>{lang}</Para>
                        )
                      }
                    </div>
                  </Detail2>
                </DetailInfoContainer>

                <div style={{ display: "flex", margin:"2.5% 0"    }}>
                  <ParaDetail>border Countries: </ParaDetail> 
                  {
                    cot.borders.map(ma =>
                      <Para key={ma} style={{marginRight: "20px",}} > {ma}</Para>

                    )
                  }
                </div>
              </DetailContainer>
            </CountryContainer>
          )
          : <div > Loading </div>
      }

      {/* </CountryContainer> */}
    </React.Fragment>
  )

}
