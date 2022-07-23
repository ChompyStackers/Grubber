import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, 
  CardImg, 
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  Button
} from 'reactstrap';
  
export default class RestaurantIndex extends Component {
  render() {
    const {restaurants} = this.props
    return (

<div className='homeCardContainer'>

      <div className="customCardContainer">
      <div className="customCards">
      { restaurants.map((restaurant, index) => { 
            return(
        <div className="customCard" key={index}>
          <span className="customCardHeader" src={restaurant.image}>
            <span className="customCardTitle">
              <h3>{restaurant.name}</h3>
            </span>
          </span>
          <span className="customCardText">
            Type of food: {restaurant.foodtype}
            Location: {restaurant.street}, {restaurant.city}, {restaurant.state}.
            Rating or comments: {restaurant.comment}
          </span>
      
        </div>
            )})}
         
        </div>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        </div>
       
  </div>

        
    )
  }
}
