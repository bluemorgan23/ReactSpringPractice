// import React, {Component} from "react";
// import {Navbar, NavItem} from 'reactstrap';


// export default function Nav() {
//     return (
//         <Navbar className="navBar" light color="faded">
//             <NavItem className="navList">
//                 Chris Morgan
//             </NavItem>
//             <NavItem className="navList">
//                 About
//             </NavItem>
//             <NavItem className="navList">
//                 Experience
//             </NavItem>
//             <NavItem className="navList">
//                 Tech
//             </NavItem>
//         </Navbar>
//     )
// }



import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Chris Morgan</NavbarBrand>
          <NavbarToggler enabled={true} onClick={() => this.toggleNavbar()} className="ml-2" />
          <Collapse className="collapseList" isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="#">About Me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Experience</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Tech</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}