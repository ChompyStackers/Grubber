import React, { Component } from 'react'
import { Card, 
  CardImg, 
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  Button } from 'reactstrap';
  
export default class RestaurantIndex extends Component {
  render() {
    const {restaurants} = this.props
    return (
       <div>
        { restaurants.map((restaurant) => { 
          return(
          <Card key={restaurant.id}>
          <CardImg top id="cardimage"src={restaurant.image} alt="Card image cap" />
          <CardBody>
            <CardTitle>{restaurant.name}</CardTitle>
            <CardSubtitle>Location: {restaurant.street}, {restaurant.city}, {restaurant.state}</CardSubtitle>
            <CardText>Type: {restaurant.foodtype}</CardText>
            <CardText>{restaurant.comment}</CardText>      
            <Button>Button</Button>
          </CardBody>
          </Card>
        )})
      }
      </div>
    )
  }
}
