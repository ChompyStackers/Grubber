import React, { Component } from 'react'
import { Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
CardTitle, 
CardSubtitle } from 'reactstrap';
import foodTypes from '../assets/FoodTypes';



export default class Home extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      randomNum:0,
      noUserNumber: 0,
    }
  }

  handleClick = () =>{
    this.setState({noUserNumber: Math.floor(Math.random() * foodTypes.length)})
    console.log("randumNumber", this.state.noUserNumber)
  }

  handleClickLoggedIn = () =>{
    this.setState({randomNum: Math.floor(Math.random() * this.props.userRestaurants.length)})
    console.log("randumNumber", this.state.randomNum)
  }

  render() {
    const{restaurants} = this.props
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
  
    const {userRestaurants}= this.props
    console.log("foodtypes:",foodTypes);
    return (
      <div>
        {foodTypes.filter((value, index)=> index === this.state.noUserNumber).map((type, index)=>{
          return(
            <Card key={index}>
            <CardBody>
              <CardTitle>{type.foodtype}</CardTitle>
            </CardBody>
            <CardSubtitle>{type.image}</CardSubtitle>
          </Card> 
          )
        })}
        {logged_in && userRestaurants.filter((restaurant, index) => index === this.state.randomNum).map((restaurant, index) => {
        return(
          <Card key={index}>
          <CardBody>
            <CardTitle>{restaurant.name}</CardTitle>
            <CardSubtitle>{restaurant.street},{restaurant.city}, {restaurant.state}</CardSubtitle>
          </CardBody>
          <img width="100%" src={restaurant.image} alt="Card image cap" />
          
        </Card> 
        )
        })}
        
      {<button onClick={this.handleClick}>
        Randomize Grub type
      </button>}

      {logged_in && <button onClick={this.handleClickLoggedIn}>
        Randomize your Grub
      </button>}
    </div>
    )
  }
}