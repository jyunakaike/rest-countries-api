import React from 'react';
import { Nav } from './styles';

export const Header = ({dark, setDark}) => {
  
  // (dark)
  // ? 
  // :

  const changeMode = () =>{
    setDark(!dark)
  }

  return (
  <Nav>
      <h1>Where in the world?</h1> 
      
        {/* Dark Mode */}

        {
          (dark)
            ? <h2 onClick={()=>{changeMode()}}>  Light Mode </h2>
            
            : <h2 onClick={()=>{changeMode()}} >  Dark Mode </h2>
        
        }
      

  </Nav>
  )
}