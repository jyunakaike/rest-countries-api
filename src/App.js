import React, {useState , useEffect} from 'react'
import { Header } from './components/Header'
import { Home } from './components/Home'
// import { GlobalStyle } from './styles/GlobalStyles'

const App = ({dark, setDark}) => {
  // const [dark, setDark] = useState(false)

  // const [bg, setBg] = useState("white")
  // const [bgp, setBgp] = useState("black")
  
  // useEffect(() => {
  //   setBg()
  //   if(dark){
  //     setBg("hsl(207, 26%, 17%)")
  //     setBgp("white")
  //   }
  //   else{
  //     setBg("white")
  //     setBgp("black")
  //   } 
  // }, [dark])
  
  return (
    <React.Fragment>
        {/* <GlobalStyle bg={bg} bgp={bgp} /> */}
        <Header dark={dark} setDark={setDark} />
        <Home />
      
    </React.Fragment>
  )
}

export default App