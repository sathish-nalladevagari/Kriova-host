import React, { useState } from 'react';
import Nav from './nav';
import axios from 'axios'


function Register (){
    
    const [fname,setFname] = useState('')
    const [lname,setLname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [Username,setUsername] = useState('')


    function submitform(e){
        e.preventDefault();
        console.log(fname,lname,Username,email,password);
        setFname('')
        setLname('')
        setPassword('')
        setUsername('')
        setEmail('')
        var payload = {
            fname,lname,Username,email,password
        }
        console.log(payload)

        axios({
            url:"http://localhost:8080/save",
            method:"POST",
            data:payload,
        })
        .then(()=>{
            console.log("sended")
        }).catch((err)=>{
            if (err) throw err;
            console.log("not sended")
        })

        

      

    }
    return(
    <div className='register'>
        <Nav />
        
        <form onSubmit={submitform}>
            
            <h1>Register Here</h1><br/>
            <label>First Name</label><br/>
            <input type="text" name="firstnamr" value={fname} onChange={(e)=>{
                setFname(e.target.value)
            }} /><br/>
            <label>Last Name</label><br/>
            <input type="text" name="lastname" value={lname} onChange={(e)=>{
                setLname(e.target.value)
            }} /><br/>
            <label>Username</label><br/>
            <input type="text" name="username" value={Username} onChange={(e)=>{
                setUsername(e.target.value)
            }} /><br/>
            <label>Email</label><br/>
            <input type="email" name="email" value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }} /><br/>
            <label>Password</label><br/>
            <input type="password" name="password" value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }} /><br/>
            <button type="submit">Sign Up</button><br/>
        </form>
    </div>

    )

}; 
 
export default Register;