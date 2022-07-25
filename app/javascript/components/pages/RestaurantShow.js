import React, { Component } from 'react'
import {
    Form,
    FormGroup,
    Input,
    Label, 
    Button
  } from 'reactstrap'
  import { Redirect } from 'react-router-dom'

export default class RestaurantShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      editRestaurant: {
        name: this.props.restaurant ? this.props.restaurant.name : "", 
        street: this.props.restaurant ? this.props.restaurant.street : "", 
        city: this.props.restaurant ? this.props.restaurant.city : "",  
        state: this.props.restaurant ? this.props.restaurant.state : "",  
        foodtype: this.props.restaurant ? this.props.restaurant.foodtype : "", 
        comment: this.props.restaurant ? this.props.restaurant.comment : "", 
        image: this.props.restaurant ? this.props.restaurant.image : "", 
      },
      submitted: false
    }
  }
  handleChange = (e) => {
    let { editRestaurant } = this.state
    editRestaurant[e.target.name] = e.target.value
    this.setState({editRestaurant: editRestaurant})
  }
  handleSubmit = () => {
    this.props.updateRestaurant(this.state.editRestaurant, this.props.id)
    this.setState({submitted: true})
  }
  handleDelete = () => {
    this.props.deleteRestaurant(this.props.id)
    this.setState({submitted: true})
  }
 
  render() {
  const { restaurant } = this.props
    return (
      <div className='homeCardContainer'>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      <div className='container'>
      { restaurant && 
        <Form id='newRestaurantForm'>
          <FormGroup>
            <Label>Name</Label>
            <Input data-testid="down"
              placeholder ={restaurant.name}
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </FormGroup>

          <FormGroup>
            <Label>Street</Label>
            <Input
              placeholder ={restaurant.street}
              type="text"
              name="street"
              onChange={this.handleChange}
              value={this.state.street}
            />
          </FormGroup>

          <FormGroup>
            <Label>City</Label>
            <Input
              placeholder ={restaurant.city}
              type="text"
              name="city"
              onChange={this.handleChange}
              value={this.state.city}
            />
          </FormGroup>

          <FormGroup>
            <Label>State</Label>
            <Input
              type="text"
              name="state"
              onChange={this.handleChange}
              value={this.state.state}
              placeholder ={restaurant.state}
            />
          </FormGroup>

          <FormGroup>
            <Label>Food Type</Label>
            <Input
              type="text"
              name="foodtype"
              onChange={this.handleChange}
              value={this.state.foodtype}
              placeholder ={restaurant.foodtype}
            />
          </FormGroup>

          <FormGroup>
            <Label>Comment</Label>
            <Input
              type="text"
              name="comment"
              onChange={this.handleChange}
              value={this.state.comment}
              placeholder ={restaurant.comment}
            />
          </FormGroup>

          <FormGroup>
            <Label>Image</Label>
            <Input
              type="text"
              name="image"
              onChange={this.handleChange}
              value={this.state.image}
              placeholder ={restaurant.image}
            />
          </FormGroup>

          <Button
            name="submit"
            onClick={this.handleSubmit}>
            Update Restaurant
          </Button>
          <Button
            name="submit"
            onClick={this.handleDelete}>
            Delete Restaurant
          </Button>
          {this.state.submitted && <Redirect to="/restaurantindex" />}
        </Form>
      }
      </div>
      </div>
    )
  } 
}