import React, {useState , useEffect} from 'react'
import { Header } from './components/Header'
import { Home } from './components/Home'

const App = ({dark, setDark}) => {
  return (
    <React.Fragment>
        <Header dark={dark} setDark={setDark} />
        <Home />
      
    </React.Fragment>
  )
}

export default App