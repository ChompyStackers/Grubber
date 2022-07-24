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
      // submitted: false,
    }
  }

  handleChange = (e) => {
    let { search } = this.state
    search = e.target.value
    this.setState({search: search})
  }
  handleSubmit = (e) =>{
    e.preventDefault()
    this.props.readYelp(`${this.props.ip.postal}`, `${this.state.search}`)
  }
  handleState = (yelpRestaurant) =>{
    let newRestaurant = {...this.state.newRestaurant, 
      name: yelpRestaurant.name, 
      street: yelpRestaurant.location.address1, 
      city: yelpRestaurant.location.city, 
      state: yelpRestaurant.location.state, 
      foodtype: yelpRestaurant.categories.map(value=>`${value.title}`).pop(), 
      comment: `${yelpRestaurant.rating}`,
      image: yelpRestaurant.image_url, 
      user_id: this.props.current_user.id }
    this.setState({newRestaurant: newRestaurant})
     
  }
  handleCreate(restaurant){
    this.handleState(restaurant)
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.newRestaurant !== this.state.newRestaurant){
      this.props.createRestaurant(this.state.newRestaurant)
    }
  }
  
  render() {
    return (
      
          <div id='yelpSearchContainer'>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div className="customCardContainer">
              <Form id='yelpSearch' inline onSubmit={this.handleSubmit}>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0" id='searchBar'>
                  <Input type="text" name="search" id="restaurant" placeholder="Search for Grub"
                  onChange={this.handleChange}
                  value={this.state.search} />
                </FormGroup>
                <Button type='submit' >Search Grub</Button>
              </Form>
              <div className="customCards">
              {this.props.submitted && this.props.yelpRestaurants.businesses.map((restaurant, index)=> {
                return (
                <div className="customCard" key={index}>
                <span className="customCardHeader" >
                  <img src={restaurant.image_url}/>
                  <span className="customCardTitle">
                    <h3>{restaurant.name}</h3>
                  </span>
                </span>
                <span className="customCardText">
                  Type of food:  {restaurant.categories.map((value,index)=>`${value.title} `)}<br/>
                  Location: {restaurant.location.address1},{restaurant.location.city},{restaurant.location.state}.<br/>
                  Rating/Comments: {restaurant.rating}<br/>
                  Price: {restaurant.price}<br/>
                  <button onClick={()=>this.handleCreate(restaurant)}>Add to My Grub</button>
                </span>
            
              </div>
              )})}
              </div>
          </div>
        </div>
    )
  }
}
