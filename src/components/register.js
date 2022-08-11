import React, { useState } from 'react';
import CollapsibleExample from './nav';


function Register (){
    
    const [fname,setFname] = useState('')
    const [lname,setLname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [Username,setUsername] = useState('')


    function submitform(e){
        e.preventDefault()
        console.log(fname,lname,Username,email,password)
      

    }
    return(
    <div className='register'>
        <CollapsibleExample />
        
        <form onSubmit={submitform}>
            
            <h1>Register Here</h1><br/>
            <label>First Name</label><br/>
            <input type="text" name="firstnamr" onChange={(e)=>{
                setFname(e.target.value)
            }} /><br/>
            <label>Last Name</label><br/>
            <input type="text" name="lastname" onChange={(e)=>{
                setLname(e.target.value)
            }} /><br/>
            <label>Username</label><br/>
            <input type="text" name="username" onChange={(e)=>{
                setUsername(e.target.value)
            }} /><br/>
            <label>Email</label><br/>
            <input type="email" name="email" onChange={(e)=>{
                setEmail(e.target.value)
            }} /><br/>
            <label>Password</label><br/>
            <input type="password" name="password" onChange={(e)=>{
                setPassword(e.target.value)
            }} /><br/>
            <button type="submit">Sign Up</button><br/>
        </form>
    </div>

    )

}; 
 
export default Register;