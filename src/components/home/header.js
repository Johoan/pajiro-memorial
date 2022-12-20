import React from "react";
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

const links1 = [
  { href: '#staff', text: 'Staff' },
  { href: '#student', text: 'Student' },
  { href: '#alumni', text: 'Alumni' },
]

const links2 = [
  { href: '#home', text: 'Home' },
  { href: '#acad', text: 'Academics' },
  { href: '#about', text: 'About Us' },
  { href: '#infogal', text: 'Info & Gallery' },
  { href: '#blog', text: 'Blogs' },
  { href: '#news', text: 'News' },
  { href: '#admission', text: 'Admission', className: 'btnadd' },
  { href: '/login', text: 'LOGIN' },
];

const createNavItem1 = ({ href, text, className }) => (
  <NavItem>
    <NavLink href={href} className={className}>{text}</NavLink>
  </NavItem>
);

const createNavItem2 = ({ href, text, className }) => (
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
            <img src="" alt="School Logo"/>
          </div>
          <div>
            <Navbar color="light" light expand="md">
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {links1.map(createNavItem1)}
              </Nav>
              </Collapse>
            </Navbar>
          </div>
        </div>
        <Navbar color="primary" light expand="md">
          <NavbarBrand href="/">Pajiro Memorial</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {links2.map(createNavItem2)}
            </Nav>
          </Collapse>
        </Navbar>
        <Slides />
      </div>
    );
  }
}
