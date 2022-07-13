import React, { Component } from 'react'
import { Card, 
  CardImg, 
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  Button } from 'reactstrap';
  
export default class RestaurantIndex extends Component {
  render() {
    const mockData = [ 
        {name: "ABC", 
        street: "123 Ash St.",
        city: "San Diego",
        state: "CA",
        foodType: "Italian",
        comment: "Decent, 2 out of 5 stars.",
        image: "https://newdenizen.com/wp-content/uploads/2019/06/lasagna-coperta.jpg"

        },

        {name: "kimiko", 
        street: "123 Ash St.",
        city: "San Diego",
        state: "CA",
        foodType: "Japanese",
        comment: "Decent, 2 out of 5 stars.",
        image: "https://newdenizen.com/wp-content/uploads/2019/06/lasagna-coperta.jpg"

        },
        {name: "Alberto's", 
        street: "123 Ash St.",
        city: "San Diego",
        state: "CA",
        foodType: "Mexican",
        comment: "Decent, 2 out of 5 stars.",
        image: "https://newdenizen.com/wp-content/uploads/2019/06/lasagna-coperta.jpg"

        },
    ]
    return (
      <div>
      { mockData.map(( object , index) => { 
            return(
              <Card key={index}>
                <CardImg top id="cardimage"src={object.image} alt="Card image cap" />
                <CardBody>
                  <CardTitle>{object.name}</CardTitle>
                  <CardSubtitle>{object.street}, {object.city}, {object.state}</CardSubtitle>
                  <CardText>{object.foodType}</CardText>
                  <CardText>{object.comment}</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
        )})
      }
      </div>
    )
  }
}
