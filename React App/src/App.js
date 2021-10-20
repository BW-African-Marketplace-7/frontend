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

        <div className="logo"> 
_______________________________________________________________________________________
              <h1 className="App-h1">AFRICAN MARKETPLACE</h1>
_______________________________________________________________________________________
          </div>
          
          <div className="link-container">
          <ul>
          {islogged ? null:<li> <Link id="create" to='/create'> <button className='createbtn btn'>Sign Up</button></Link></li>}
          {islogged ? null:<li><Link id="login" to='/login'><button className='loginbtn btn'>Login</button></Link></li>}
          {islogged ? <button onClick={()=>setLogged(!islogged)}className='logout btn'>Logout</button>: null}
            
         <li> <Link id="home-link" exact to='/home'><button className="homebtn btn">Home</button></Link></li>

          <li><Link id="about-link"to='/about'><button className="aboutbtn btn">about</button></Link></li>
          </ul>
          </div>
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