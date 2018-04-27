import React, {Component} from 'react';
import {
    Container,
    Row,
    Navbar,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export default class SideNav extends Component {

    render() {
        return (
            <div className="container-fluid">
                <Row>

                    <nav class="col-md-2 d-none d-md-block bg-dark sidebar">
                        <div class="sidebar-sticky">
                            <ul class="nav flex-column">

                                <NavItem>
                                    <NavLink href="#"> Option 1 </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#"> Option 2 </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#"> Option 3 </NavLink>
                                </NavItem>

                            </ul>

                        </div>
                    </nav>

                </Row>
            </div>
        )
    }

}