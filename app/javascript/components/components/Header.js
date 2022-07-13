import React, { Component } from 'react'
import Hamburgericon from "../assets/Hamburger icon.png"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
  
export default class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }  
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props

    console.log("current_user", sign_in_route)
    return (
        <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/">Grubber</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
               <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <img src={Hamburgericon} />
                </DropdownToggle>
                <DropdownMenu end>
                <DropdownItem id="All restaurants" href='/restaurantindex'>
                   All Restaurants
                  </DropdownItem>
                  
                  <DropdownItem id="About Us" href='/AboutUs'>
                    About Us
                  </DropdownItem>
                  <DropdownItem divider />
                  {logged_in &&  
                  <>
                  <DropdownItem href='/restaurants/:id'>
                    My Restaurants
                  </DropdownItem>
                  <DropdownItem href='/users/sign_out'>
                    Sign Out
                  </DropdownItem>
                  </>
                  }
                  {!logged_in && 
                  <>
                 <DropdownItem href='/users/sign_in'>
                    Sign In
                    </DropdownItem>
                   <DropdownItem href='/users/sign_up'>
                    Sign Up
                  </DropdownItem>
                  </>
                  }
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}


