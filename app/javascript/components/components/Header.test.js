// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import { shallow, configure } from 'enzyme'
 
// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Header from './Header'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
configure({ adapter: new Adapter() })

describe("When Header renders", () => {
  let headerRender
  beforeEach(() => {
    headerRender = shallow(<Header />)
  })
  it("displays a title", () => {
    const title = headerRender.find("NavbarBrand").text()
    expect(title).toEqual("<NavbarBrand />")
  })
  it("displays a image", () => {
    const hamburgericon = headerRender.find("img")
    expect(hamburgericon.length).toEqual(2)
  })
  it("displays Dropdownlinks", () => {
    const dropdowns = headerRender.find("DropdownItem")
    expect(dropdowns.length).toEqual(5)
  })
})
