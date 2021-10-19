import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter as Router} from "react-router-dom";
import {Route, Link, Switch } from "react-router-dom";
import './App.css';
import Login from './Login';
import banner from './images/banner.jpg';


 function App() { 
//inital form values
const startFormValues = {
  name: "",
  password: "",
};


  // my state slices
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(startFormValues);
  const [disabled, setDisabled] = useState();



const addNewUser = (newUser) => {
  axios
    .post('no location data' , newUser)
    .then((response) => {
      console.log(response);
      setUsers([response.data, ...users]);
      console.log(setUsers);
      setFormValues(startFormValues);
    })
    .catch((error) => {
      console.log(error);
    });
};
const newinput=(name, value)=> {
 setFormValues({...formValues, [name]: value,});
};

const submit = () => {
  const newUser = {
    name: formValues.name.trim(),
    password: formValues.password.trim(),
  };

  addNewUser(newUser);
};
const onSubmit = (event) => {
  event.preventDault();
   submit();
  setFormValues(startFormValues);
};



  return (
    <Router>
    <div className="App">
    
      <header className="App-header">
        <div className="logo">
_______________________________________________________________________________________
      <h1 className="afric-Mark">African Marketplace</h1>
_______________________________________________________________________________________  
<button>activate</button>
     </div> 

     
     </header>
     <div>
      <Switch>

     <Link id="home-link" exact to="/">Home
     <Route  path="/login">
            </Route>
            </Link>

     <Link id="login-link"to="/login">Login</Link>

     <Link id="signup-link" to="/signup">Sign up page
          </Link>
    </Switch>
    
     </div>
     
     <Route exact path='/' id="path"> 
        
  <Route  path="/login">
            <div>
              <form className=" login-form"  onSubmit={ onSubmit}>
              <label className="user-name"> Username: 
                <input 
                type='text'
                onChange={newinput}
                 value={users.name}
                 name='username'
                 />
              </label>
              <label className="pass=word"> Password: 
                <input 
                type='text'
                onChange={ newinput}
                value={users.password}
                name='password'/>
              </label>

              <input id="sub-btn"
                type='submit'                    
                value='submit' 
               />
               
            </form>
            </div>
    </Route>
            </Route>
           
            <Route path='/signup' id="sign-path">
            <div>
            <form className=" form-signup" onSubmit={ onSubmit}>
              <label className="new-user"> newUser Name 
               <input id=" new-user"
                type='text'
                onChange={ newinput}
                value={users.name}
                name='username'/>
                </label>

             <label className="new-user"> password: 
             <input
                type='text'
                onChange={ newinput}  
                value={users.password}
                name='password'/>
              </label>

              <input id=" sign-btn"
                type='submit'                    
                value='submit' 
                   />
            </form>          
          </div>
        </Route>
        </div>
     </Router>
  
  );

 }

export default App;