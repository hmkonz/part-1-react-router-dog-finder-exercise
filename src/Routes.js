import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// import components
import DogList from "./DogList";
import DogDetails from "./DogDetails";

// renders components DogList or DogDetails depending on which of their paths match the url 
function Routes({dogs}) {
  return (
        <Switch>
          {/* Route renders DogList when path exactly matches "/dogs" */}
          <Route exact path="/dogs">
            <DogList dogs={dogs} />
          </Route>
          {/* Route renders DogDetails when path exactly matches "/dogs/:name" */}
          <Route path="/dogs/:name">
            <DogDetails dogs={dogs} />
          </Route>
          {/* redirect to the Home Page ("/dogs") if try to go to a url other than the ones above */}
          <Redirect to="/dogs" />
        </Switch>
  );
}

export default Routes;