import React from 'react'
import Home from './Components/Home'
import Movies from './Components/Movies'
import Series from './Components/Series'
import Error from './Components/Error'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/series" element={<Series/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="*" element={<Error/>}/>
        

        

       
    </Routes>
    </BrowserRouter>
  )
}

export default App