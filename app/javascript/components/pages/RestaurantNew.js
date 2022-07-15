import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {
    Form,
    FormGroup,
    Input,
    Label, 
    Button
  } from 'reactstrap'

export default class RestaurantNew extends Component {
  
    constructor(props){
        super(props)
        this.state = {
          restaurant: {
            name:"", 
            street:"", 
            city:"", 
            state:"", 
            foodtype:"", 
            comment:"", 
            image:""
          },
          submitted: false
        }
        
      }
      handleChange = (e) => {
        let { restaurant } = this.state
        restaurant[e.target.name] = e.target.value
        this.setState({restaurant: restaurant})
      }
      handleSubmit = () => {
        this.props.createRestaurant(this.state.restaurant)
        this.setState({submitted: true})
      }
      
      
  render() { 
    return (
        <Form>
        <FormGroup>
            <Label>Name</Label>
            <Input
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.restaurant.name}
            />
        </FormGroup>

        <FormGroup>
            <Label>Street</Label>
            <Input
                type="text"
                name="street"
                onChange={this.handleChange}
                value={this.state.restaurant.street}
            />
        </FormGroup>

        <FormGroup>
            <Label>City</Label>
            <Input
                type="text"
                name="city"
                onChange={this.handleChange}
                value={this.state.restaurant.city}
            />
        </FormGroup>

        <FormGroup>
            <Label>State</Label>
            <Input
                type="text"
                name="state"
                onChange={this.handleChange}
                value={this.state.restaurant.state}
            />
        </FormGroup>

        <FormGroup>
            <Label>Food Type</Label>
            <Input
                type="text"
                name="foodtype"
                onChange={this.handleChange}
                value={this.state.restaurant.foodtype}
            />
        </FormGroup>

        <FormGroup>
            <Label>Comment</Label>
            <Input
                type="text"
                name="comment"
                onChange={this.handleChange}
                value={this.state.restaurant.comment}
            />
        </FormGroup>

        <FormGroup>
            <Label>Image</Label>
            <Input
                type="text"
                name="image"
                onChange={this.handleChange}
                value={this.state.restaurant.image}
            />
        </FormGroup>

        <Button
          name="submit"
          onClick={this.handleSubmit}>
          Create a New Restaurant
        </Button>
        {this.state.submitted && <Redirect to="/restaurantindex" />}
      </Form>
    )
  }
}

