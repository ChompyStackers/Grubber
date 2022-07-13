import React, { Component } from 'react'
import {
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap'

export default class RestaurantNew extends Component {
    constructor(props){
        super(props)
        this.state = {
          newRestaurant: {
            name:text, 
            street:text, 
            city:text, 
            state:text, 
            foodType:text, 
            comment:text, 
            image:text, 
            user_id:integer 
          }
        }
      }
      handleChange = (e) => {
        let { newRestaurant } = this.state
        newRestaurant[e.target.name] = e.target.value
        this.setState({newRestaurant: newRestaurant})
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
                value={this.state.newRestaurant.name}
            />
        </FormGroup>
      </Form>
    )
  }
}

