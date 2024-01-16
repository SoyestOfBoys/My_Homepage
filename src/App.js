import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react'
import Main from './Main';


function App() {
  return (
    <ChakraProvider>
    <React.Fragment>
      <Main />
    </React.Fragment>
    </ChakraProvider>
  );
}

export default App