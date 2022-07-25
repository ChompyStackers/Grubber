// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import { shallow, configure } from 'enzyme'
 
// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import RestaurantNew from './RestaurantNew'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
configure({ adapter: new Adapter() })

describe("When RestaurantNew renders", () => {
  let newRender
  beforeEach(() => {
    newRender = shallow(<RestaurantNew {...props}/>)
  })
  let props = {current_user:{id:1}}
  it("displays a form", () => {
    const form = newRender.find("Form")
    expect(form.length).toEqual(1)
  })
  it ("displays an input for the restaurants name", () => {
    const restaurantNameRender = newRender.find('[name="name"]')
    expect(restaurantNameRender.length).toEqual(1)
  })
  it ("displays an input for the restaurants street", () => {
    const restaurantStreetRender = newRender.find('[name="street"]')
    expect(restaurantStreetRender.length).toEqual(1)
  })
  it ("displays an input for the restaurants city", () => {
    const restaurantCityRender = newRender.find('[name="city"]')
    expect(restaurantCityRender.length).toEqual(1)
  })
  it ("displays an input for the restaurants state", () => {
    const restaurantStateRender = newRender.find('[name="state"]')
    expect(restaurantStateRender.length).toEqual(1)
  })
  it ("displays an input for the restaurants food type", () => {
    const restaurantFoodTypeRender = newRender.find('[name="foodtype"]')
    expect(restaurantFoodTypeRender.length).toEqual(1)
  })
  it ("displays an input for the restaurants comment", () => {
    const restaurantCommentRender = newRender.find('[name="comment"]')
    expect(restaurantCommentRender.length).toEqual(1)
  })
  it ("displays an input for the restaurants image", () => {
    const restaurantImageRender = newRender.find('[name="image"]')
    expect(restaurantImageRender.length).toEqual(1)
  })
  it ("displays a button to create a new restaurant", () => {
    const restaurantButtonRender = newRender.find('[name="submit"]')
    expect(restaurantButtonRender.length).toEqual(1)
  })
})