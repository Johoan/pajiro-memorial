import React from "react";
import { ReactDOM } from "react";
import Slides from './slides.js';




import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const links = [
  { href: '#home', text: 'Home' },
  { href: '#card', text: 'Product' },
  { href: '#about', text: 'About' },
  { href: '#cata', text: 'Categories' },
  { href: '#test', text: 'Blogs' },
  { href: '#test2', text: 'News' },
  { href: '#busns', text: 'Adds', className: 'btnadd' },
  { href: '/login', text: 'LOGIN' },
];

const createNavItem = ({ href, text, className }) => (
  <NavItem>
    <NavLink href={href} className={className}>{text}</NavLink>
  </NavItem>
);

export default class Menunav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {links.map(createNavItem)}
            </Nav>
          </Collapse>
        </Navbar>
        <Slides />
      </div>
    );
  }
}
