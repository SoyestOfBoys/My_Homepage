import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'
import Nav from './Nav';
import Home from './Pages/Home/Home'
import Project from './Pages/Projects/Project';
import Marketing from './Pages/Marketing/MarketingHome';


function App() {
  return (
    <ChakraProvider>
    <React.Fragment>
      <Nav />
      <Home />
      <Project />
      <Marketing/>
    </React.Fragment>
    </ChakraProvider>
  );
}

export default App