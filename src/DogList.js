 import React from 'react';
 import {Link} from "react-router-dom";
 import "./DogList.css"

// create a page that shows images of the dogs in the 'dogs' array (passed in when DogList is rendered) as well as links with their names that when clicked, bring you to their details page
 function DogList({dogs}) {
    return (
        <div className="DogList">  
          <h1 className="DogList-header">
              Click on a dog name for more info!
          </h1>

          {/* map over 'dogs' array and for every dog, create a div around a link with the dog's name that brings you to their details page and the dog's image*/}
          {dogs.map(dog => (
            //   <div className="col-3 text-center" key={dog.name}>
            <div className="dog">
              <h3>
                <Link key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
              </h3>
              <img src={dog.src} alt={dog.name} />
            </div>
          ))}
   
        </div>
    );
  }
        
        export default DogList;
  