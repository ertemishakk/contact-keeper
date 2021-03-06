import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Navbar />



        <Switch>

          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
