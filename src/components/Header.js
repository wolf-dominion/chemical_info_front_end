import React from 'react'
import { Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom'

function Header() {

    return(
            <Navbar className="w-auto p-3 fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">Chemical Information</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">

                    </Nav>
                    <Nav>
                    <Nav.Link >Home</Nav.Link>
                    <Nav.Link >My Profile</Nav.Link>
                    <Nav.Link >Policies and Politics</Nav.Link>
                    <Nav.Link >Forum</Nav.Link>
                    <Nav.Link >Contact</Nav.Link>

                    <Nav.Link> 
                        Login
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}

export default Header