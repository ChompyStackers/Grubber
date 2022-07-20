import React from "react"
import 'dotenv/config'
import AboutUs from "./pages/AboutUs"
import NotFound from "./pages/NotFound"
import Home from "./pages/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import RestaurantIndex from "./pages/RestaurantIndex"
import RestaurantNew from "./pages/RestaurantNew"
import RestaurantShow from './pages/RestaurantShow'
import RestaurantIndexProtected from './pages/RestaurantIndexProtected'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        restaurants: [],
        yelpRestaurant: [],
        ip: {},
        yelpApi: this.props.yelp_api
      }
    }
    componentDidMount(){
      this.readRestaurant()
      this.readIP()
    }
    readRestaurant = () => {
      fetch("/restaurants")
      .then(response => response.json())
      .then(payload => this.setState({restaurants: payload}))
      .catch(errors => console.log("Restaurant Read Errors:", errors))
    }
    readIP =() => {
    fetch("https://ipapi.co/json/")
    .then(response => response.json())
    .then(payload => this.setState({ip: payload}))
    .catch(error => console.log(error)) 
    }
    readYelpRestaurant = () => {
      fetch(`/home/yelp/41.7402/-87.7723/tacobell`)
      .then(response => response.json())
      .then(payload => console.log(payload))
      .catch(errors => console.log("Yelp Restaurant read:", errors))
    }
    //${latitude}${longitude}${restaurant}
    sendYelp = () =>{
      this.readYelpRestaurant(this.state.ip.latitude,this.state.ip.longitude,"tacobell")
      console.log(this.state.yelpRestaurant)
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
    
    updateRestaurant = (editRestaurant, id) => {
      fetch(`/restaurants/${id}`, {
        body: JSON.stringify(editRestaurant),
        headers: {
          "Content-Type" : "application/json"
        },
        method: "PATCH"
      })
      .then(response => response.json())
      .then(payload => this.readRestaurant())
      .catch(errors => console.log("Restaurant read errors:", errors))
    }
    deleteRestaurant = (Restaurantid) => {
      fetch(`/restaurants/${Restaurantid}`, {
        headers: {
          "Content-Type" : "application/json"
        },
        method: "DELETE"
      })
      .then(response => response.json())
      .then(payload => this.readRestaurant())
      .catch(errors => console.log("Restaurant read errors:", errors))
    }

  render () {
    console.log(this.state.ip.latitude)
    console.log(this.props.yelp_api)
    let userRestaurants = []
    if(this.props.logged_in){userRestaurants= this.state.restaurants.filter(restaurant => restaurant.user_id === this.props.current_user.id)}
    // console.log("userrestaurants:", userRestaurants);
    console.log(this.state.ip)
    return (
      <Router>
        <Header {...this.props}/>
        
        <Switch>
          <Route exact path="/" render={props => <Home restaurants={this.state.restaurants} {...this.props} userRestaurants={userRestaurants}/>} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/restaurantindex" render={props => <RestaurantIndex restaurants={this.state.restaurants}/>} />
          <Route path="/myrestaurants" render={props => <RestaurantIndexProtected restaurants={this.state.restaurants} {...this.props}/>} />
          <Route path="/restaurantshow/:id" render={(props) => {
            let id = props.match.params.id
            let restaurant = this.state.restaurants.find(restaurant => restaurant.id == id)
            return <RestaurantShow restaurant={restaurant} id={id} updateRestaurant={this.updateRestaurant} deleteRestaurant={this.deleteRestaurant}
            />
          }}/>
          <Route path="/restaurantnew" render={(props) => <RestaurantNew {...this.props} createRestaurant={this.createRestaurant} />} />
          <Route component={NotFound}/>       
        </Switch>
        {/* <Footer/> */}
        <button onClick={this.sendYelp}>ReadYelpRestaurant</button>
      </Router>
    );
  }
}

export default App
