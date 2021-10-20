import { Link, Route } from 'react-router-dom';


const Create=(props)=>{

    const {
    login,
    setLogin,
    disable,
    onSub, } = props
    
    const onUpdate=(evt)=>{
        const {name, value} = evt.target
            update(name, value)
    }
    
    const update = (name, value) => {
    /*validate(name, value) needs to be setup through schema */
    setLogin({...login, [name]: value});
    }


return(
<Route path='/login'>
    <div className='login-form-holder'>
        <form id='login-form' onSubmit={onSub}>
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
     
