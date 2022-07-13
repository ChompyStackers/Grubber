import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
  
export default class RestaurantIndex extends Component {
    
  render() {
    const {restaurants} = this.props
    return (
        <div>
           { restaurants.map(( object , index) => { 
            return(
                <Card key={index}>
                <CardImg top id="cardimage"src={object.image} alt="Card image cap" />
                <CardBody>
                  <CardTitle>{object.name}</CardTitle>
                  <CardSubtitle>Location: {object.street}, {object.city}, {object.state}</CardSubtitle>
                  <CardText>Type: {object.foodType}</CardText>
                  <CardText>{object.comment}</CardText>      
                  <Button>Button</Button>
                </CardBody>
              </Card>
        )})}
     
    </div>
      
    )
  }
}
