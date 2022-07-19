import React, { Component } from 'react'
import { Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
CardTitle, 
CardSubtitle } from 'reactstrap';

import HomePlanet from '../assets/homePlanet.png'
import foodTypes from '../assets/FoodTypes';



export default class Home extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      randomNum:0,
      noUserNumber: 0,
      renderCardLoggedIn: false,
      renderCardNotLoggedIn: true, 
    }
  }

  handleClick = () =>{
    this.setState({noUserNumber: Math.floor(Math.random() * foodTypes.length)})
    this.setState({renderCardLoggedIn:false})
    this.setState({renderCardNotLoggedIn: true})
    console.log("randumNumber", this.state.noUserNumber)
  }

  handleClickLoggedIn = () =>{
    this.setState({randomNum: Math.floor(Math.random() * this.props.userRestaurants.length)})
    this.setState({renderCardLoggedIn:true})
    this.setState({renderCardNotLoggedIn: false})
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

      <div className='homeColorContainer'>
        <div className='homeCardContainer'>
          <Card>
            <CardBody>
              <CardTitle>Grubber</CardTitle>
              <CardSubtitle>A perfect place for your perfect plate -A PP for your PP</CardSubtitle>
            </CardBody>
            <CardImg top src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZXNlYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="Card image cap"/>
            <CardBody>
              <CardText>What's for dinner</CardText>
              <CardLink href="#"><button>Randomize your Grub</button></CardLink>
              <CardLink href="#"><button>Randomize all Grub</button></CardLink>
            </CardBody>
            <img id='homeplanetImage'src={HomePlanet}/>
          </Card>
        </div>
      </div>
      <div>
        {this.state.renderCardNotLoggedIn && foodTypes.filter((value, index)=> index === this.state.noUserNumber).map((type, index)=>{
          return(
            <Card key={index}>
            <CardBody>
              <CardTitle>{type.foodtype}</CardTitle>
            </CardBody>
            <CardSubtitle>{type.image}</CardSubtitle>
          </Card> 
          )
        })}
        {logged_in && this.state.renderCardLoggedIn && userRestaurants.filter((restaurant, index) => index === this.state.randomNum).map((restaurant, index) => {
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