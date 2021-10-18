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
  const [islogged,setLogged] = useState(false)
  const [disable, setDisable] = useState(false)/*for now set to true when fixed*/ 
  const [login,setLogin] = useState(loginDefault)
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
      setLogged(!islogged)
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

  const update = (name, value) => {
    //validate(name, value)
    setLogin({...login, [name]: value});
  }

  const onUpdate=(evt)=>{
    const {name, value} = evt.target
        update(name, value)
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className='App-h1'>African Marketplace</h1>
          {islogged ? null: <Link to='/create' className='createbtn btn'>Sign Up</Link>}
          {islogged ? null:<Link to={islogged ? '/' : '/login'} className='loginbtn btn'>Login</Link>}
          {islogged ? <button onClick={()=>setLogged(!islogged)}className='logout btn'>Logout</button>: null}
          <Link to='/' className='homebtn btn'>Home</Link>
          <Link to='/about' className='aboutbtn btn'>about</Link>
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
        <Route path='/login'>
          <div className='login-form-holder'>
            <form id='login-form' onSubmit={onSub}>
              <label>
                Username:&nbsp;
                <input 
                id='username'
                type='text'
                onChange={onUpdate}
                value={login.username}
                name='username'/>
              </label>
              <label>
              Password:&nbsp;
                <input 
                id='password'
                type='password'
                onChange={onUpdate}
                value={login.password}
                name='password'/>
              </label>
              <input 
              className='sub' 
              name='sub' 
              type='submit' 
              value='submit' 
              id='login-button' 
              disabled={disable}/>
            </form>
          </div>
        </Route>
      </div>
    </Router>
  );
}

export default App;
