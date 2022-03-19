import React from 'react'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { GlobalStyle } from './styles/GlobalStyles'

const App = () => {
  return (
    <React.Fragment>
        <GlobalStyle />
        <Header />
        <Home />
      
    </React.Fragment>
  )
}

export default App