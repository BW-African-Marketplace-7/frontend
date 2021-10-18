import './App.css';
import axios from 'axios';
import {BrowserRouter as Router}  from 'react-router-dom';
import { Link, Route } from 'react-router-dom';
import React, {useState, useEffect} from "react";



function App() {

  const loginDefault = {
    username: '',
    password: ''
  }

  const [disable, setDisable] = useState(true)
  const [login,setLogin] = useState(loginDefault)

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to='/'>Home</Link>
          <Link to='/about'>about</Link>
        </header>

        <Route exact path='/'>
          <section className='upper-content-section'>
            <div className='top-left'>
            </div>
            <div className='top-right'>
            </div>
          </section>
          <section className='content-section'>
            <div className='mid-left'>
            </div>
            <div className='mid-right'>
            </div>
          </section>
          <section className='lower-content-section'>
            <div className='mid-left'>
            </div>
            <div className='mid-right'>
            </div>
          </section>
        </Route>
      </div>
    </Router>
  );
}

export default App;
