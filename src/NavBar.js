import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

// create the links at the top of the Home page 
function NavBar({dogs}) {
    // map over the 'dogs' array passed in when NavBar component is rendered and for each dog, create a link in the nav bar with key={dog.name}, dog.name as the link name and the url equal to `/dogs/${dog.name.toLowerCase()}`
    const links = dogs.map(dog => (
        <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`} >
          {dog.name}
        </NavLink>
      ));
      return (
        <nav className="NavBar">
            {/* return a Home link as well as the links for each of the dogs ('links') */}
          <NavLink exact to="/dogs">Home</NavLink>
          {links}
        </nav>
      );
    }
    
    export default NavBar;
