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
          newRestaurant: {
            name:"", 
            street:"", 
            city:"", 
            state:"", 
            foodtype:"", 
            comment:"", 
            image:"",
            // user_id:current_user.id
          },
          submitted: false
        }
        // const {
        //   logged_in,
        //   current_user,
        //   new_user_route,
        //   sign_in_route,
        //   sign_out_route
        // } = this.props  
      }
      handleChange = (e) => {
        let { newRestaurant } = this.state
        newRestaurant[e.target.name] = e.target.value
        this.setState({newRestaurant: newRestaurant})
      }
      handleSubmit = () => {
        this.props.createRestaurant(this.state.newRestaurant)
        this.setState({submitted: true})
      }
      
  render() {
    console.log("this is the current user", this.props.current_user)
    return (
        <Form>
        <FormGroup>
            <Label>Name</Label>
            <Input
                type="text"
                name="name"
                onChange={this.handleChange}
                value={this.state.newRestaurant.name}
            />
        </FormGroup>

        <FormGroup>
            <Label>Street</Label>
            <Input
                type="text"
                name="street"
                onChange={this.handleChange}
                value={this.state.newRestaurant.street}
            />
        </FormGroup>

        <FormGroup>
            <Label>City</Label>
            <Input
                type="text"
                name="city"
                onChange={this.handleChange}
                value={this.state.newRestaurant.city}
            />
        </FormGroup>

        <FormGroup>
            <Label>State</Label>
            <Input
                type="text"
                name="state"
                onChange={this.handleChange}
                value={this.state.newRestaurant.state}
            />
        </FormGroup>

        <FormGroup>
            <Label>Food Type</Label>
            <Input
                type="text"
                name="foodtype"
                onChange={this.handleChange}
                value={this.state.newRestaurant.foodtype}
            />
        </FormGroup>

        <FormGroup>
            <Label>Comment</Label>
            <Input
                type="text"
                name="comment"
                onChange={this.handleChange}
                value={this.state.newRestaurant.comment}
            />
        </FormGroup>

        <FormGroup>
            <Label>Image</Label>
            <Input
                type="text"
                name="image"
                onChange={this.handleChange}
                value={this.state.newRestaurant.image}
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

