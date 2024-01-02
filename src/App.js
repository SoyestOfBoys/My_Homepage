import './App.css';
import React from 'react'
import Nav from './Nav';
import Home from './Pages/Home/Home'
import Project from './Pages/Projects/Project';

function App() {
  return (
    <div>
    <React.Fragment>
      <Nav />
      <Home />
      <Project />
    </React.Fragment>
    </div>
  );
}

export default App