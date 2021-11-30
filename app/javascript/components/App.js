import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Greeting from "./Greeting";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => "Home!"} />
          <Route path='/hello' render={() => <Greeting greeting='Friend' />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
