import React from 'react';

const Login = () => {
    function login(e){
        e.preventDefault();
        console.log("uhsduf")
    }
    return ( 
        <div className='login'>
            <form onSubmit={login}>
                <label>Email</label><br/>
                <input type="email" name="username"  /><br/>
                <label>Password</label><br/>
                <input type="password" name="password"  /><br/>
                <button type="submit">Login</button>
            </form>
        </div>
     );
}
 
export default Login;