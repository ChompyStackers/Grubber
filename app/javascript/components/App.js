import React from "react"
import AboutUs from "./pages/AboutUs"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import RestaurantIndex from "./pages/RestaurantIndex"
import RestaurantNew from "./pages/RestaurantNew"
import RestaurantShow from './pages/RestaurantShow'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        restaurants: []
      }
    }
    componentDidMount(){
      this.readRestaurant()
    }
    readRestaurant = () => {
      fetch("/restaurants")
      .then(response => response.json())
      .then(payload => this.setState({restaurants: payload}))
      .catch(errors => console.log("Restaurant Read Errors:", errors))
    }  
    createRestaurant = (newRestaurant) => {
      fetch("/restaurants", {
        body: JSON.stringify(newRestaurant),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      })
      .then(response => response.json())
      .then(payload => this.readRestaurant())
      .catch(errors => console.log("App.js createRestaurant errors:", errors))
  }

  render () {
    const {current_user} = this.props
    return (
      <Router>
        <Header {...this.props}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/restaurantindex" render={props => <RestaurantIndex restaurants={this.state.restaurants}/>} />


          <Route path="/restaurantshow/:id" render={(props) => {
            let id = props.match.params.id
            let restaurant = this.state.restaurants.find(restaurant => restaurant.id == id)
            return <RestaurantShow restaurant={restaurant} />
            }} />



          <Route component={NotFound}/>       
          <Route path="/restaurantnew" render={(props) => <RestaurantNew createRestaurant={this.createRestaurant} />} />
        </Switch>
        <Footer/>
      </Router>
    );
  }
}

export default App
