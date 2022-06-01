import React from 'react'
import { Container, Grow, Grid } from '@material-ui/core';

import Navbar from './components/Navbar/Navbar';import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
function App() {




  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        {/* <Home/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/auth' element={<Auth/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
