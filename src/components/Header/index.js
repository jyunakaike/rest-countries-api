import React from 'react';
import { Nav } from './styles';

import {FaMoon} from 'react-icons/fa'

export const Header = ({dark, setDark}) => {
  const changeMode = () =>{
    setDark(!dark)
  }

  return (
  <Nav>
      <h1>Where in the world?</h1> 
        {
          (dark)
            ? <h2 onClick={()=>{changeMode()}}> <FaMoon style={{color: "white"}} />  Light Mode </h2>
            : <h2 onClick={()=>{changeMode()}} > <FaMoon />  Dark Mode </h2>
        }
  </Nav>
  )
}