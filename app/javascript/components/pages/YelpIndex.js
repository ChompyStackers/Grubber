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
      submitted: false,
      newRestaurant: {
        name:"", 
        street:"", 
        city:"", 
        state:"", 
        foodtype:"", 
        comment:"", 
        image:"",
        user_id: this.props.current_user.id
      }
    }
  }

  handleChange = (e) => {
    let { search } = this.state
    search = e.target.value
    this.setState({search: search})
  }
  handleSubmit = () => {
    console.log("restaurant object:", this.state.search)
    this.props.readYelp(`${this.props.ip.postal}`, `${this.state.search}`) 
    setTimeout(() => {  this.setState({submitted:true}) }, 1200);
  }
  handleCreate = () => {
    const {newRestaurant} = this.state
    this.props.createRestaurant(newRestaurant)
  }
  
  render() {
   
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
        <Button onClick={this.handleSubmit} >Search Grub</Button>
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
            <Button onClick={this.handleCreate}>Add to my restaurants</Button>
            {/* on click we need the index of that restaurant to pass it to our handleCreate method. We also need the values from that restaurant passed... We need a way to translate our values from a card into a restaurant object that matches our POST method to oour database */}
          </CardBody>
        </Card>  
        )
      })}
    </>

    )
  }
}
