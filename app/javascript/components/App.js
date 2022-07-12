import React from "react"
import AboutUs from "./pages/AboutUs"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route component={NotFound}/>
      </Switch>
      </Router>
    );
  }
}

export default App
