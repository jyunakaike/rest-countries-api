import React, {useState} from 'react'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { GlobalStyle } from './styles/GlobalStyles'

const App = () => {
  const [dark, setDark] = useState(false)

  return (
    <React.Fragment>
        <GlobalStyle />
        <Header dark={dark} setDark={setDark} />
        <Home />
      
    </React.Fragment>
  )
}

export default App