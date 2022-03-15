import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Country = (props) => {
  const location = useLocation();
  const name = location.state
  const [country, setCountry] = useState();
  const [loaded, setIsLoaded] = useState(false);



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
      console.log(cot.languages);
    })
  }


  return (
    <React.Fragment>
      {
        (loaded)
          ? 
            country.map(cot => 
              <div key={cot.name.common}>
                <h1  > {cot.name.common} </h1>
                <h1  > {cot.name.nativeName.spa.official} </h1>
                <h1  > {cot.population} </h1>
                <h1  > {cot.region} </h1>
                <h1  > {cot.subregion} </h1>
                <h1  > {cot.capital} </h1>
                <h1  > {cot.tld} </h1>
                {/* <h1  > {cot.currencies} </h1> */}
                {/* <h1  > {cot.languages} </h1> */}
                {cot.borders.map(ma => <span key={ma} > {ma}</span>)}


              </div>
            )
          : <div > Loading </div>
      }
    </React.Fragment>
  )

}
