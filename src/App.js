import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'
import Nav from './Nav';
import Home from './Pages/Home/Home'
import Project from './Pages/Projects/Project';
import Marketing from './Pages/Marketing/MarketingHome';
import GC22 from './Pages/Marketing/MarketingPages/GenCon2022';


function App() {
  return (
    <ChakraProvider>
    <React.Fragment>
      <GC22 />
      <Nav />
      <Home />
      <Project />
      <Marketing/>
    </React.Fragment>
    </ChakraProvider>
  );
}

export default App