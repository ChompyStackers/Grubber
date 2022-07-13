import React from "react"
import Header from "./components/Header"
import PropTypes from "prop-types"
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
      <Header/>
      </React.Fragment>
    );
  }
}

export default App
