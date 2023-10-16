import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import "./DogDetails.css";

// create a page that shows a specific dog's image, name, age and their facts
function DogDetails({dogs}) {
    // retrieve 'name' from the url parameter
    const {name} = useParams();

    // if 'name' isn't in the 'dogs' array then redirect back to the Home Page (Route path="/dogs") 
    if (!name) return <Redirect to="/dogs" />

    // if 'name' in url parameter is in the 'dogs' array then find the dog in the array with the name that matches 'name' and return the image, name, age and facts about that dog ('currentDog')
    if (name) {
        const currentDog = dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
        );
        
    return (
        <div className="DogDetails">
            <img src={currentDog.src} alt={currentDog.name} />
            <h2>{currentDog.name}</h2>
            <h3>{currentDog.age} years old</h3>
            <ul>
                {/* map over the facts of 'currentDog' and for each fact and its index, create an li with key={i} and 'fact' shown as an li on the screen */}
                {currentDog.facts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                ))}
            </ul>

            {/* create link to go back to Home Page (Route path="/dogs") */}
            <Link className="link" to="/dogs">Go Back</Link>
        </div>
    );
    }
 }



export default DogDetails;