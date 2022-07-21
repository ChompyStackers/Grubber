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
  
export default class RestaurantIndexProtected extends Component {
  render() {
    const {restaurants} = this.props
    const {current_user} = this.props
    return (
       <div>
        {restaurants && restaurants.filter(restaurant => restaurant.user_id === current_user.id).map((value,index)=>{
            return(
                <Card key={index}>
                  <CardImg top id="cardimage"src={value.image} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{value.name}</CardTitle>
                    <CardSubtitle>Location: {value.street}, {value.city}, {value.state}</CardSubtitle>
                    <CardText>Type: {value.foodtype}</CardText>
                    <CardText>{value.comment}</CardText>   
                    <NavLink to={`/restaurantshow/${value.id}`}>
                      <Button>Update Info</Button>
                    </NavLink>
                  </CardBody>
                </Card>
              )
        })}
       </div>
    )
  }
}
