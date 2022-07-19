// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import { shallow, configure } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import RestaurantNew from './RestaurantNew'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
configure({adapter: new Adapter()})

describe("When New renders", ()=>{
    let newRender
    beforeEach(() => {
      newRender = shallow(<RestaurantNew />)
    })
    it("displays the new restaurant form", () => {
      const newFormRender = newRender.find("Form")
      expect(newFormRender.length).toEqual(1)
    }) 
  })