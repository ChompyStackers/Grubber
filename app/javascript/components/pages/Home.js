import React, { Component } from 'react'
import { Card,
  CardImg,
  CardText,
  CardBody,
CardTitle, 
Button,
CardSubtitle } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import cardbackground from '../assets/cardbackground.png'
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
    const {ip} = this.props
  
    const {userRestaurants}= this.props
    return (
      <>
      {/* <div className='homeColorContainer'> */}
        <div className='homeCardContainer' id='homeCard'>
          {this.state.renderCardNotLoggedIn && foodTypes.filter((value, index)=> index === this.state.noUserNumber).map((type, index)=>{
            return(
            <Card key={index}>
              <img id='homeplanetImage'src={HomePlanet}/>
              <div id='imagesContainer'>
              <CardBody>
                <CardText id='emojiText'>{type.image}</CardText>
                <img className='cardBackground'src={cardbackground}/>
              </CardBody>
              </div>
              <CardBody>
                <CardTitle>{type.foodtype}</CardTitle>
                <CardText></CardText>
              </CardBody>   
              <div id="stars"></div>
              <div id="stars2"></div>
              <div id="stars3"></div>
              <div className='homeButtonsContainer'>
                {<button className='homeButtons' onClick={this.handleClick}>
                Randomize Grub type
                </button>}
                {logged_in && <button className='homeButtons' onClick={this.handleClickLoggedIn}>
                Randomize your Grub
                </button>}
              </div>
            </Card>
              )
          })}
          {logged_in && this.state.renderCardLoggedIn && userRestaurants.filter((restaurant, index) => index === this.state.randomNum).map((restaurant, index) => {
            return(
              <Card key={index}>
                <div id='imagesContainer'>
                  <CardBody>
                    <img className='cardBackground'src={cardbackground}/>
                    <CardImg id='homeCardImage'src={restaurant.image} alt="Card image cap"/>
                   </CardBody>
                </div>
                <CardBody>
                  <CardTitle>{restaurant.name}</CardTitle>
                  <CardText>{restaurant.street}, {restaurant.city}, {restaurant.state}</CardText> 
                </CardBody>
                <img id='homeplanetImage'src={HomePlanet}/>
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div className='homeButtonsContainer'>
                {<button className='homeButtons' onClick={this.handleClick}>
                Randomize Grub type
                </button>}
                {logged_in && <button className='homeButtons' onClick={this.handleClickLoggedIn}>
                Randomize your Grub
                </button>}
              </div>
              </Card> 
          )
          })}
         
        </div>
        
      {/* </div> */}
      </>
    )
  }
}