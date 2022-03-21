import React, {useState , useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from './styles/GlobalStyles'

// component
import App from './App';
import { Country } from './components/Country';

const BRouter = () => {
  const [dark, setDark] = useState(false)

  const [bg, setBg] = useState("white")
  const [bgp, setBgp] = useState("black")
  
  useEffect(() => {
    setBg()
    if(dark){
      setBg("hsl(207, 26%, 17%)")
      setBgp("white")
    }
    else{
      setBg("white")
      setBgp("black")
    } 
  }, [dark])


  return (
      <BrowserRouter>
        <GlobalStyle bg={bg} bgp={bgp} />
          <Routes>
                <Route exact path='/' element={<App dark={dark} setDark={setDark} />}  />
                <Route exact path='/country/:name' element={<Country dark={dark} setDark={setDark} />} />
          </Routes>
      </BrowserRouter>
    
  )
}

export default BRouter