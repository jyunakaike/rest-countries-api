import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// component
import App from './App';
import { Country } from './components/Country';

const BRouter = () => {
  return (
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<App />}  />
            <Route exact path='/country/:name' element={<Country />} />
        </Routes>
      </BrowserRouter>
    
  )
}

export default BRouter