import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input,Card, 
  CardImg, 
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  } from 'reactstrap'

export default class YelpIndex extends Component {

  constructor(props){
    super(props)
    this.state = {
      search: "",
      newRestaurant: {
        name:"", 
        street:"", 
        city:"", 
        state:"", 
        foodtype:"", 
        comment:"", 
        image:"",
        user_id: this.props.current_user.id
      },     
      submitted: false,
    }
  }

  handleChange = (e) => {
    let { search } = this.state
    search = e.target.value
    this.setState({search: search})
  }
  handleClick = () =>{
    this.props.readYelp(`${this.props.ip.postal}`, `${this.state.search}`)
    setTimeout(() => { this.setState({submitted:true}) }, 1000);
  }
  handleState = (yelpRestaurant) =>{
    // set the state to the values
    let newRestaurant = {...this.state.newRestaurant, name: yelpRestaurant.name, street: yelpRestaurant.location.address1, city: yelpRestaurant.location.city, state: yelpRestaurant.location.state, foodtype: yelpRestaurant.categories.map(value=>`${value.title}`).pop(), comment: `${yelpRestaurant.rating}`, image: yelpRestaurant.image_url, user_id: this.props.current_user.id }
    // restaurant.name = newRestaurant.name
    // restaurant.street = newRestaurant.location.address1
    // restaurant.city = newRestaurant.location.city
    // restaurant.state = newRestaurant.location.state
    // restaurant.foodtype = newRestaurant.categories.map(value=>`${value.title}`)
    // restaurant.comment = newRestaurant.rating
    // restaurant.image = newRestaurant.image_url
    console.log("this is what im trying to change:", newRestaurant);
    console.log("yelpRest:",yelpRestaurant)
    this.setState({newRestaurant: newRestaurant})
     
  }
  handleCreate(restaurant){
    this.handleState(restaurant)
    setTimeout(() => { this.props.createRestaurant(this.state.newRestaurant) }, 1000);
  }
  
  
  render() {
    console.log("newRestaurant State:",this.state.newRestaurant)
    return (
    <>
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="search" 
            className="mr-sm-2">restaurants</Label>
          <Input type="text" name="search" id="restaurant" placeholder="Restaurant name"
          onChange={this.handleChange}
          value={this.state.search} />
        </FormGroup>
        <Button onClick={this.handleClick} >Search Grub</Button>
      </Form>
      {this.state.submitted && this.props.yelpRestaurants.businesses.map((restaurant, index)=> {
        return (
          <Card key={index}>
          <CardImg top id="cardimage"src={restaurant.image_url} alt="Card image cap" />
          <CardBody>
            <CardTitle>{restaurant.name}</CardTitle>
            <CardSubtitle>Location: {restaurant.location.address1},{restaurant.location.city},{restaurant.location.state},{restaurant.location.zip_code}</CardSubtitle>
            <CardText>Type: {restaurant.categories.map((value,index)=>`${value.title} `)}</CardText>
            <CardText >{restaurant.price}</CardText>  
            <Button onClick={()=>this.handleCreate(restaurant)}>Add to my restaurants</Button>
            {/* make a resource*/}
          </CardBody>
        </Card>  
        )
      })}
    </>

    )
  }
}
