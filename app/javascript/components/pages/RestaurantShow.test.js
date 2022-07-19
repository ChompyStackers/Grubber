// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { mount, shallow } from 'enzyme'
 
// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import RestaurantShow from './RestaurantShow'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When restaurantShow renders", () => {
  let showRender
    beforeEach(() => {
      showRender = shallow(<RestaurantShow/>)
    })
    it("displays a form", () => {
      const form = showRender.find("Form")
      expect(form).toBeTruthy()
    })
    it("should render a component", ()=>{
      const button = showRender.find("Button")
      expect(button).toBeTruthy()
    })
    it("should render a component", ()=>{
      const button = showRender.find("Button")
      expect(button).toBeTruthy()
    })
    it("has the a label", ()=>{
      const formlabel = showRender.find("Form")
      expect(formlabel.length).toBeTruthy()
    })
    it("has a handleChange method", ()=>{
      const input = showRender.find("Input")
      input.simulate("change", {target:{value:'jorge'}})
      expect(showRender.state().name).toEqual('jorge')
    
    })
})
// add tests for handleChange,handleSubmit, and handleDelete