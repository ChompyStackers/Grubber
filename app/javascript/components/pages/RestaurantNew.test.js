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
})