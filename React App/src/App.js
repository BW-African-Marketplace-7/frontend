import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter as Router} from "react-router-dom";
import {Route, Link,Switch } from "react-router-dom";
import './App.css';





 function App() { 
//inital form values
const startFormValues = {
  name: "",
  password: "",
};


  // my state slices
  const [users, setUsers] = useState(startFormValues);
  const [formValues, setFormValues] = useState([]);
  const [disabled, setDisabled] = useState(true);



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
      <h1 className="afric-Mark">African Marketplace</h1>
      
      <switch>
     <Link exact to="/">Home
     <Route  path="/login">
            </Route>
            </Link>

     <Link to="/login">Login
    
     </Link>

     <Link to="/signup">Sign up page
          </Link>
    </switch>
    
     </header>
     
     <Route exact path='/'>     
  <Route  path="/login">
            <div>
              <form  onSubmit={ onSubmit}>
              <label> Username: 
                <input 
                type='text'
                onChange={newinput}
                 value={users.name}
                 name='username'
                 />
              </label>
              <label> Password: 
                <input 
                type='text'
                onChange={ newinput}
                value={users.password}
                name='password'/>
              </label>

              <input 
                type='submit'                    
                value='submit' 
               />
               
            </form>
            </div>
    </Route>
            </Route>
           
            <Route path='/signup'>
            <div>
            <form  onSubmit={ onSubmit}>
              <label> newUser Name 
               <input 
                type='text'
                onChange={ newinput}
                value={users.name}
                name='username'/>
                </label>

             <label> password: 
             <input
                type='text'
                onChange={ newinput}  
                value={users.password}
                name='password'/>
              </label>

              <input 
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