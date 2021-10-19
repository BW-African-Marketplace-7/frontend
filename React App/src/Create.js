import { Link, Route } from 'react-router-dom';




const Create =(props)=>{
    
    const {
    setNewLogin,
    newLogin,
    disable,
    onSub
    } = props

    const logOnUpdate=(evt)=>{
        const {name, value} = evt.target
            logUpdate(name, value)
    }

    const logUpdate = (name, value) => {
        /*validate(name, value) needs to be setup through schema */
        setNewLogin({...newLogin, [name]:value})
    }

    return(
<Route path='/create'>
    <div className='login-form-holder'>
        <form 
        id='new-login-form' 
        onSubmit={onSub}>
        <label>
            Create A Username:&nbsp;
        <input 
            id='new-username'
            type='text'
            onChange={logOnUpdate}
            value={newLogin.username}
            name='username'/>
        </label>
        <label>
        Create A Password:&nbsp;
        <input 
            id='new-password'
            type='password'
            onChange={logOnUpdate}  
            value={newLogin.password}
            name='password'/>
        </label>
        <input
            onClick={()=> window.location.href='http://localhost:3000/home'} /* bad logic returns to home but does not seem to be storing submit*/
            className='sub' 
            name='sub' 
            type='submit' 
            value='submit' 
            id='new-login-button'
            disabled={disable}/>
        </form>
    </div>
</Route>
)}


export default Create