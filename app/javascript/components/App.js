import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Greeting from "./Greeting";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' element={<Greeting />} />
          <Route
            path='/'
            element={<Link to='/greeting'>Get random greeting</Link>}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
