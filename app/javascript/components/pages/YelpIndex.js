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
      restaurant: "",     
      submitted: false
    }
  }

  handleChange = (e) => {
    let { restaurant } = this.state
    restaurant = e.target.value
    this.setState({restaurant: restaurant})
  }
  handleSubmit = () => {
    console.log("restaurant object:", this.state.restaurant)
    this.props.readYelp(`${this.props.ip.postal}`, `${this.state.restaurant}`).then(response=> this.setState({submitted:true}))
    
    
  }
  
  render() {
    console.log(this.state.restaurant)
    return (
    <>
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="search" 
            className="mr-sm-2">restaurants</Label>
          <Input type="text" name="search" id="restaurant" placeholder="Restaurant name"
          onChange={this.handleChange}
          value={this.state.restaurant} />
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
            <CardText>Type: {restaurant.categories}</CardText>
            <CardText>{restaurant.price}</CardText>  
          </CardBody>
        </Card>  
        )
      })}
    </>

    )
  }
}
