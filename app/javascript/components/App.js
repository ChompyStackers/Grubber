import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
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
      <Footer/>
      </React.Fragment>

    );
  }
}

export default App
