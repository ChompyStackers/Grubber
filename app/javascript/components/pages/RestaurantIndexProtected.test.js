// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import { shallow, configure } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import RestaurantIndexProtected from './RestaurantIndexProtected'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
configure({adapter: new Adapter()})

describe("When restaurantProtectedIndex renders", () => {
    it("displays the user restaurant card", () => {
      const protecindex= shallow(<RestaurantIndexProtected/>)
      const protecindexHeader = protecindex.find("div")
      expect(protecindexHeader.length).toEqual(1)
    })
})