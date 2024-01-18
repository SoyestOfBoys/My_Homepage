import './App.css';
import React from 'react'
import Nav from './Nav';
import Home from './Pages/Home/Home'
import Project from './Pages/Projects/Project';
import Marketing from './Pages/Marketing/MarketingHome';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <React.Fragment>
      <Home />
      <Project />
      <Marketing/>
    </React.Fragment>
    </div>
  );
}

export default App