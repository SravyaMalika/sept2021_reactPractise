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
import { HiSearch } from 'react-icons/hi';
import { MdMessage, MdNotifications } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';
import Icons from '../UIComponent/Icon'

const Header = (props) => {


  return (
    <div>
      <Navbar color="white" light>

        <Icons><HiSearch /></Icons>
        <div style={{ float: "right" }}>
          <Icons><MdMessage /></Icons>
          <Icons><MdNotifications /></Icons>
          <Icons><BiUserCircle /></Icons>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;


