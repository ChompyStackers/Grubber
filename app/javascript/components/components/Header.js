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
    return (
        <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/">Grubber</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
               <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  < img src = {Hamburgericon} />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                   All restaurants
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    My Restaurants
                  </DropdownItem>
                  <DropdownItem>
                    Sign Out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}


