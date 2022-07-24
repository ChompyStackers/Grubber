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
      <div className="customCardContainer">
        <div className="customCards">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          { restaurants.map((restaurant, index) => { 
                return(
                  <div className="customCard" key={index}>
                    <span className="customCardHeader" >
                      <img src={restaurant.image}/>
                      <span className="customCardTitle">
                        <h3>{restaurant.name}</h3>
                      </span>
                    </span>
                    <span className="customCardText">
                      Type of food: {restaurant.foodtype}<br/>
                      Location: {restaurant.street}, {restaurant.city}, {restaurant.state}.<br/>
                      Rating/Comments: {restaurant.comment}
                    </span>
                
                  </div>
                )})}
          </div>
        </div> 
    )
  }
}
