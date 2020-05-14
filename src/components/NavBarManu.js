import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faHome, faPlusSquare, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { Nav, Navbar } from "react-bootstrap";

class NavBarManu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Resto</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#link">
                                <Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#link">
                                <Link to="/list"><FontAwesomeIcon icon={faList} /> List</Link>
                            </Nav.Link><Nav.Link href="#link"><Link to="/create"><FontAwesomeIcon icon={faPlusSquare} />Create</Link></Nav.Link>
                            <Nav.Link href="#link"><Link to="/search"><FontAwesomeIcon icon={faSearch} />Search</Link></Nav.Link>
                            {
                                localStorage.getItem('login') ?
                                    <Nav.Link href="#link"><Link to="/logout"><FontAwesomeIcon icon={faUser} />Logout</Link></Nav.Link>
                                    :
                                    <Nav.Link href="#link"><Link to="/login"><FontAwesomeIcon icon={faUser} />Login</Link></Nav.Link>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
}


export default NavBarManu