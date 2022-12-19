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
  { href: '#acad', text: 'Academics' },
  { href: '#about', text: 'About Us' },
  { href: '#infogal', text: 'Info & Gallery' },
  { href: '#test', text: 'Blogs' },
  { href: '#news', text: 'News' },
  { href: '#admission', text: 'Admission', className: 'btnadd' },
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
        <div>
          <div>
            <img src=""/>
          </div>
          <div>

          </div>
        </div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Pajiro Memorial</NavbarBrand>
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
