import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

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
    this.props.readYelp(`${this.props.ip.postal}`, `${this.state.restaurant}`)
    // this.setState({submitted: true})
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
    </>

    )
  }
}
