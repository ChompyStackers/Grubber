import React, { Component } from 'react'
import { Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
CardTitle, 
CardSubtitle } from 'reactstrap';


export default class Home extends Component {
  render() {
    return (
    <div>Home
      <Card>
      <CardBody>
        <CardTitle>Grubber</CardTitle>
        <CardSubtitle>A perfect place for your perfect plate -A PP for your PP</CardSubtitle>
      </CardBody>
      <img width="100%" src="https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZXNlYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="Card image cap" />
      <CardBody>
        <CardText>What's for dinner</CardText>
        <CardLink href="#"><button>Randomize your Grub</button></CardLink>
        <CardLink href="#"><button>Randomize all Grub</button></CardLink>
      </CardBody>
    </Card>
  </div>
    )
  }
}