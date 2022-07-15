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
       <div>
        { restaurants.map((restaurant, index) => { 
          return(
          <Card key={index}>
          <CardImg top id="cardimage"src={restaurant.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>{restaurant.name}</CardTitle>
            <CardSubtitle>Location: {restaurant.street}, {restaurant.city}, {restaurant.state}</CardSubtitle>
            <CardText>Type: {restaurant.foodtype}</CardText>
            <CardText>{restaurant.comment}</CardText>  
          </CardBody>
          </Card>
        )})
      }
      </div>
    )
  }
}
