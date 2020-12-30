import React,{ Component }  from "react";
import {Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";
import { Redirect } from 'react-router-dom';

class NavbarComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isOpen: false,
    };
  }
  // const [isOpen, setIsOpen] = useState(false);

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen});
  }

  componentDidMount() {
  }
    
  render(){
  return (
    <div>
      <Navbar color="info" light expand="md">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/task1">Task1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/index">Chỉ mục</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/task3">Task3</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/task4">Task 4</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
}

export default NavbarComponent;