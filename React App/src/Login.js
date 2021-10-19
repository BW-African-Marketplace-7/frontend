import "./App.css";
import React, { useState, useEffect } from "react";




  const Login = (props) =>{
    const startFormValues = {
      username: " ",
      password: " ",
    };
    
    const [users, setUsers] = useState([]);
    const [formValues, setFormValues] = useState(startFormValues);
    const [disabled, setDisabled] = useState(true);


    const newinput=(name, value)=> {
        setFormValues({...formValues, [name]: value,});
       };

    const onChange = (event) => {
        const { name, value } = event.target;
        newinput(name, value);
      };

      const submit = () => {
        const newUser = {
          name: formValues.username.trim(),
          password: formValues.password.trim(),
        };


    const onSubmit = (event) => {
        event.preventDefault();
        props.Login({formValues});
        submit(formValues);
      };

      return(
            <div>
              <form className onSubmit={ onSubmit}>
               <div className="main-login">
                  <h2>Login p age</h2>
                    </div>     
                  
                    <label>user-name:
                        <input
                      type="text"
                        name="username"
                        value={formValues.username}
                        onChange={newinput}
                      />                                                            </label>
                  
        
                  
                    <label> Password:
                      <input
                        name="password"
                        value={formValues.password}
                        onChange={newinput}
                        placeholder="Password"
                      />
                    </label>
                    <input id="log-in"
                    type="submit" value='submit'>log in</input>   
                 
                
              </form>
            </div>
          );
        };
    } 
        export default Login;   




     