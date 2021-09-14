import { Nav, NavItem, NavLink } from 'reactstrap';
 const Sidebar = () => {
    return(
        <Nav vertical>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#"> Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#"> Link</NavLink>
        </NavItem>
      </Nav>
    );
}
export default Sidebar;