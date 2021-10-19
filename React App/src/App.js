import './App.css';
import axios from 'axios';
import {BrowserRouter as Router}  from 'react-router-dom';
import { Link, Route } from 'react-router-dom';
import React, {useState, useEffect} from "react";
import Create from './Create';
import Login from './Login';


function App() {

  const loginDefault = {
    username: '',
    password: ''
  }
  const [loginData, setLoginData] =useState()/* needs use */
  const [islogged,setLogged] = useState(false)
  const [disable, setDisable] = useState(false)/*for now set to true when fixed*/ 
  const [login,setLogin] = useState(loginDefault)
  const [newLogin, setNewLogin] =useState(loginDefault)
  const [serverRes, setRes] = useState([])


  const postValues = (newVal) =>{
    axios.post('https://reqres.in/api/orders', newVal) /* needs an actual api*/
    .then(res =>{
      setRes([res.data,...serverRes])
      console.log(res)
    })
    .catch(valueError => console.error(valueError)
    )
    .finally(()=> {
      setLogin(loginDefault)
      setLogged(true)
    })
  }
  

  const submit = () => {

    const newForm = {
      username: login.username.trim(),
      password: login.password.trim()
    }
    postValues(newForm)
  }

  const onSub = event =>{
    event.preventDefault();
    submit();
  }
  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className='App-h1'>African Marketplace</h1>
          {islogged ? null: <Link to='/create' className='createbtn btn'>Sign Up</Link>}
          {islogged ? null:<Link to='/login' className='loginbtn btn'>Login</Link>}
          {islogged ? <button onClick={()=>setLogged(!islogged)}className='logout btn'>Logout</button>: null}
          <Link to='/home' className='homebtn btn'>Home</Link>
          <Link to='/about' className='aboutbtn btn'>about</Link>
        </header>

        <Route exact path='/home'>
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
        <Login
        login = {login}
        setLogin = {setLogin}
        disable = {disable}
        onSub = {onSub}
        />
        <Create
        setNewLogin = {setNewLogin}
        newLogin = {newLogin}
        disable = {disable}
        onSub = {onSub}
        />
      </div>
    </Router>
  );
}

export default App;
