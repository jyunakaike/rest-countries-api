import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {AiOutlineArrowLeft} from 'react-icons/ai'


// import { Header } from '../components/Header'
import { Header } from '../Header'
import { GlobalStyle } from '../../styles/GlobalStyles'
// import { GlobalStyle } from '../styles/GlobalStyles'

import { BackButton, CountryContainer, Flag, DetailContainer, Title, DetailInfoContainer, Detail1, Detail2, ParaDetail, Para } from './styles';


export const Country = ( {dark, setDark}) => {
  const [country, setCountry] = useState();
  const [loaded, setIsLoaded] = useState(false);

  const detailName = useParams();
  console.log(detailName.name)

  const history = useNavigate();



  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${detailName.name}`)
      .then(res => res.json())
      .then(
        (data) => {
          setCountry(data)
          setIsLoaded(true)

        },
        (error) => {
          setIsLoaded(true)
          console.log(error)
        },
      )
  }, [])

  return (
    <React.Fragment>
      <Header dark={dark} setDark={setDark} />

      <BackButton onClick={() => { history(-1) }}> <AiOutlineArrowLeft/> Back </BackButton>
      {
        (loaded)
          ?
          country.map(cot =>
            <CountryContainer key={cot.name.common}>
              <Flag src={cot.flags.png} />
              <DetailContainer>
                <Title  > {cot.name.common} </Title>
                <DetailInfoContainer>
                  <Detail1>
                    <div style={{ display: "flex" }}>  <ParaDetail>Native Name:</ParaDetail>  <Para> {cot.name.official} </Para> </div>
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
                          <Para style={{margin: "0 2.5%" }} key={lang}>{lang}</Para>
                        )
                      }
                    </div>
                  </Detail2>
                </DetailInfoContainer>

                <div style={{ display: "flex", margin: "2.5% 0" }}>
                  <ParaDetail>border Countries: </ParaDetail>
                  {
                    cot.borders.map(ma =>
                      <Para key={ma} style={{ marginRight: "20px", }} > {ma}</Para>

                    )
                  }
                </div>
              </DetailContainer>
            </CountryContainer>
          )
          : <div > Loading </div>
      }

    </React.Fragment>
  )

}
