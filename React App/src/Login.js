import { Link, Route } from 'react-router-dom';
import * as yup from 'yup'
import Schema from './LoginSchema';
import React, { useEffect } from 'react';

const Create=(props)=>{

    const {
        login,
        setLogin,
        disable,
        setDisable,
        err,
        setErr,
        userList,
        setLogged } = props
    
        const checkAcnt =(evt)=>{/* my horrible secondary validation */
            evt.preventDefault()
            const user = document.getElementById('username')
            const email = document.getElementById('email')
            const pass = document.getElementById('password')
            userList.map(act => {
               if(act.username === user.value && act.email === email.value && act.password === pass.value){
                    setLogged(true);
                    return window.location.pathname = '/home'
                }else{ 
                    console.log('user does not exist')
                }   
            })
        }
        const success=(evt)=>{
            evt.preventDefault() && setLogged(true)
        }
        
        const onUpdate=(evt)=>{
            const {name, value} = evt.target
                update(name, value)
        }
    
        const validate = (name,value) => {
            yup.reach(Schema, name)
            .validate(value)
            .then(() => setErr({...err, [name]: ''}))
            .catch(err => setErr({...err, [name]: err.errors[0] }))
        }
        
        const update = (name, value) => {
    
            validate(name, value)
            setLogin({...login, [name]: value});
    
        }
    
        useEffect(()=>{
    
            Schema.isValid(login).then(valid =>
            setDisable(!valid))
    
        },[login])
    
    

return(
<Route path='/login'>
    <div className='login-form-holder'>
        <form id='login-form' onSubmit={checkAcnt}>
        <label>
            Username: &nbsp;
            <input 
            id='username'
            type='text'
            onChange={onUpdate}
            value={login.username}
            name='username'/>
        </label>
        <label>  
        Password: &nbsp;
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
)}


/* therman-mcmillan */
export default Create
     
