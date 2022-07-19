import React, { Component } from 'react'
import Hamburgericon from "../assets/hamburgerIcon.png"
import TitleImage from "../assets/Title image.png"
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
    // console.log("this is the current user", current_user)
    return (
        <div>
        <Navbar className="grubNavBar" expand="md">
          <NavbarBrand href="/"><div id="headerContainterTitle"><img className='titleImage' src={TitleImage}/><div id='titleText'>Grubber</div></div></NavbarBrand>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar className='dropdownBurger'>
                <DropdownToggle nav caret>
                <img className="hamburgerIcon" src={Hamburgericon} />
                </DropdownToggle>
                <DropdownMenu >
                <DropdownItem id="All restaurants" href='/restaurantindex'>
                   All Restaurants
                </DropdownItem>
                <DropdownItem id="About Us" href='/AboutUs'>
                  About Us
                </DropdownItem>
                <DropdownItem divider />
                {logged_in &&  
                <>
                <DropdownItem href='/myrestaurants'>
                  My Restaurants
                </DropdownItem>
                <DropdownItem href='/restaurantnew'>
                  New Restaurant
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
        </Navbar>
      </div>
    )
  }
}


