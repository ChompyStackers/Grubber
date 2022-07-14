import React, { Component } from 'react'
import {
    Form,
    FormGroup,
    Input,
    Label, 
    Button
  } from 'reactstrap'


export default class RestaurantShow extends Component {
 
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
    const { restaurant } = this.props
  
    return (
  <>
    <div>
    <Form>
        <FormGroup>
            <Label>Name</Label>
            <Input
            placeholder = "placeholder"
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
          Update Restaurant
        </Button>
        <Button
          name="submit"
          onClick={this.handleSubmit}>
          Delete Restaurant
        </Button>
        {this.state.submitted && <Redirect to="/restaurantindex" />}
      </Form>
    </div>
  </>
    )
  } 
}