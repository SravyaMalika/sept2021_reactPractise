import React, { useState } from 'react';
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
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {HiSearch} from 'react-icons/hi';
import {MdMessage,MdNotifications} from 'react-icons/md';
import {BiUserCircle} from 'react-icons/bi';

const Header = (props) => {
 

  return (
    <div>
      <Navbar color="white" light expand="md">
            
      
          <Nav className="mr-auto" navbar>
          <HiSearch />
          </Nav>
          
          <NavbarText><MdMessage /></NavbarText>
          <MdNotifications />
          <BiUserCircle/>

          
    
      </Navbar>
    </div>
  );
}

export default Header;