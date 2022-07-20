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
    it("should render a label", ()=>{
      const formlabel = showRender.find("Form")
      expect(formlabel).toBeTruthy()
    })
    it("should render a name", ()=>{
      const formlabel = showRender.find("name")
      expect(formlabel).toBeTruthy()
    })
    it("should render as street", ()=>{
      const formlabel = showRender.find("street")
      expect(formlabel).toBeTruthy()
    })
    it("should render as city", ()=>{
      const formlabel = showRender.find("city")
      expect(formlabel).toBeTruthy()
    })
    it("should render a foodtype", ()=>{
      const formlabel = showRender.find("foodtype")
      expect(formlabel).toBeTruthy()
    })
    it("should render a comment", ()=>{
      const formlabel = showRender.find("comment")
      expect(formlabel).toBeTruthy()
    })
    it("should render an image", ()=>{
      const formlabel = showRender.find("image")
      expect(formlabel).toBeTruthy()
    })
    it("has a handleChange method", ()=>{
      const hChange = showRender.find("handleChange")
      expect(hChange).toBeTruthy()
    })
    it("has a handleSubmit method", ()=>{
      const hSubmit = showRender.find("handleSubmit")
      expect(hSubmit).toBeTruthy()
    })
    it("has a handleDelete method", ()=>{
      const hDelete = showRender.find("handleChange")
      expect(hDelete).toBeTruthy()
    })
})