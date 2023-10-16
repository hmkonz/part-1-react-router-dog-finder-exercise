import React from "react";
import { BrowserRouter } from "react-router-dom";

// NavBar component 
import NavBar from "./NavBar";
// Routes component (includes the routes for "/dogs" and "/dogs/:name")
import Routes from "./Routes";

// assign names to the images so can be set equal to src for each dog
import whiskey from "./images/whiskey.jpg";
import tubby from "./images/tubby.jpg";
import duke from "./images/duke.jpg";
import perry from "./images/perry.jpg";


function App({dogs}) {
  return (
    <div className="App">
      <BrowserRouter>
        {/* pass in {dogs} to each component */}
        <NavBar dogs={dogs} />
        {/* Routes renders components DogList or DogDetails depending on which of their paths match the url */}
        <Routes dogs={dogs} />
      </BrowserRouter>
    </div>
  );
}
// array of objects, each with info about a dog, to be used as default prop
export const dogs = [
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]


App.defaultProps = { dogs };

export default App;
