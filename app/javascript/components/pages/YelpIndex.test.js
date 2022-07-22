// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import { shallow, configure } from 'enzyme'
 
// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import YelpIndex from './YelpIndex'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
configure({ adapter: new Adapter() })

describe("When yelpIndex renders", () => {
  let props = {current_user:{id:1}}
    let yelpRender
    beforeEach(() => {
      yelpRender = shallow(<YelpIndex {...props} />)
    })
    it("displays a card", () => {
      const yelpForm = yelpRender.find("Form")
      expect(yelpForm.length).toEqual(1)
    })
    it("displays a button", () => {
      const yelpButton = yelpRender.find("Button")
      expect(yelpButton.length).toEqual(1)
    })
})