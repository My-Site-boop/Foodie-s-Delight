import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'


export default function Header() {

    const [query, setQuery] = useState("");

  // Mapping food names → section ids
  const foodMap = {
    pizza: "pizza-section",
    burger: "burger-section",
    pasta: "pasta-section",
    paneer : "paneer -section",
    dessert: "dessert-section",
     meal:"main-mail",
     sushi:"sushi-platter",
     grilled:"grilled-steak",
     pancakes:"fluffy-pancakes",
     omelette:"cheese-omelette",
  };

  const handleSearch = () => {
    const val = query.toLowerCase();

    // Loop through keys and check if query includes the food name
    for (let key in foodMap) {
      if (val.includes(key)) {
        const section = document.getElementById(foodMap[key]);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
        return;
      }
    }

    alert("No matching section found!");
  };

  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
  <NavLink to="/"  className="navbar-brand fs-3 fw-bold text-warning">🍽️ Foodie's Delight
  </NavLink>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
    <span className="navbar-toggler-icon"></span>
  </button>
    
   { /* <!-- search bar --> */}
 <div className="col-lg-6 col-sm-8" id="box" ><div id="sc"> <input type="data" placeholder="Search..." id="search-bar" onkeypress="xyz()"  value={query}
          onChange={(e) => setQuery(e.target.value)}/> <button onclick="abc()" id="dox"><span className="material-symbols-outlined" >
close
</span></button></div>
      
      <button id="icon1" onClick={handleSearch}><span className="material-symbols-outlined" id="icon"> search </span></button>  
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




