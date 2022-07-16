import React, { Component } from 'react'
import { Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
CardTitle, 
CardSubtitle } from 'reactstrap';


export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      randomNum:1
    }
  }

  handleClick = () =>{
    this.setState({randomNum: Math.floor(Math.random() * this.props.restaurants.length)})
    console.log("randumNumber", this.state.randomNum)
    }
    
  render() {
    console.log("test restaurant", this.props.restaurants)
    const{restaurants} = this.props
    return (
    <div>
     {restaurants && restaurants.filter(randomRest => randomRest.id === this.state.randomNum ).map(restaurant => {
      return(
        <Card>
        <CardBody>
          <CardTitle>{restaurant.name}</CardTitle>
          <CardSubtitle>{restaurant.street},{restaurant.city}, {restaurant.state}</CardSubtitle>
        </CardBody>
        <img width="100%" src={restaurant.image} alt="Card image cap" />
        
      </Card> 
      )

     })}
      
    <button>
      
      Randomize your Grub
      </button>

    <button
      onClick={this.handleClick}>
      Randomize all Grub
    </button>


  </div>
    )
  }
}