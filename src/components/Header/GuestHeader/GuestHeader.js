import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
import CloudUpload from '@material-ui/icons/CloudUpload';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useSelector } from 'react-redux';

const GuestHeader = () => {

    const isLoggedIn = useSelector(state => state.users.currentUser.isLoggedIn);


 

    return (
        // <header>
        //     <h1>Our React Header. Probably will be on every page </h1>
        // </header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            {/* <Navbar.Brand href="/home">Flickr</Navbar.Brand> */}
            <Link to={isLoggedIn ?  "/home" : "/"} style={{textDecoration: 'none'}}>Flickr</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            
        <Nav>
        <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
  
            <NavLink className="navbar navbar-dark bg-dark" to="/login" >Login</NavLink>
            <NavLink className="navbar navbar-dark bg-dark" to="/signup">Signup</NavLink>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
    );
};

export default GuestHeader;