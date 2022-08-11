import React from 'react';
import { Link }  from 'react-router-dom'


export default function Navbar(){
    return(
        <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" >Kriova</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><Link to="/">Home</Link></li>
      
    </ul>
    <ul class="nav navbar-nav navbar-right">
      
      <li><Link className='glyphicon glyphicon-user' to="/register">Register</Link></li>
      <li><Link className='glyphicon glyphicon-log-in' to="/login">Login</Link></li>
    </ul>
  </div>
</nav>
    )

};