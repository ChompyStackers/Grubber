// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import { shallow, configure } from 'enzyme'
 
// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import RestaurantShow from './RestaurantShow'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
configure({ adapter: new Adapter() })

describe("When restaurantShow renders", () => {
    const props = {
        restaurants: [
          {name: "kimiko", 
          street: "123 Ash St.",
          city: "San Diego",
          state: "CA",
          foodType: "Japanese",
          comment: "Decent, 2 out of 5 stars.",
          image: "https://newdenizen.com/wp-content/uploads/2019/06/lasagna-coperta.jpg"
          }
        ]
    }

    let showRender
    beforeEach(() => {
      showRender = shallow(<RestaurantShow {...props}/>)
      
    })
    it("displays a form", () => {
      const form = showRender.find("Form")
      expect(form).toBeTruthy()
    })
})