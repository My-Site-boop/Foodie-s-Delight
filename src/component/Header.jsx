import React from 'react'
import { Link,NavLink } from 'react-router-dom'


export default function Header() {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
  <NavLink to="/"  className="navbar-brand fs-3 fw-bold text-warning">🍽️ Foodie's Delight</NavLink>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
    <span className="navbar-toggler-icon"></span>
  </button>
    
   { /* <!-- search bar --> */}
 <div className="col-lg-6 col-sm-8" id="box" ><div id="sc"> <input type="data" placeholder="Search..." id="search-bar" onkeypress="xyz()"/> <button onclick="abc()" id="dox"><span className="material-symbols-outlined" >
close
</span></button></div>
      
      <button onclick="search()" id="icon1"><span className="material-symbols-outlined" id="icon"> search </span></button>  
</div>
      
    
  { /*  <!--Menu --> */}
  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav">

      <li className="nav-item dropdown">
        <a className="nav-link" href="/" data-bs-toggle="dropdown">Home</a>
      
        </li>

      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown">Menu</a>
        <ul className="dropdown-menu dropdown-menu-dark">
       <li> <NavLink to="/break" className="dropdown-item">Breakfast</NavLink></li>
          <li><NavLink to="/lunch"  className="dropdown-item">Lunch</NavLink></li>
          <li><NavLink to="/dinner"  className="dropdown-item">Dinner</NavLink></li>
        </ul>
      </li>

      <li className="nav-item dropdown">
        <a className="nav-link " href="/" role="button" data-bs-toggle="dropdown">About</a>
        
      </li>

      <li className="nav-item ">
        <a className="nav-link" href="/" role="button" data-bs-toggle="dropdown">Contact</a>
       
      </li>
       
        <li>
      <button id="bt">Login</button> 
        </li>
        
        <li>
      <NavLink role="button" to="/sign">   <button id="si">Sign Up</button> </NavLink>
        </li>

    </ul>
  </div>
</nav>


    </>
  )
}




