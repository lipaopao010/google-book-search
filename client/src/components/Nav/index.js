import React from 'react';
import { Navbar , Nav } from 'react-bootstrap';

export default function NavSection () {
    return(
    <Navbar bg="light" expand="lg">
  
    <Nav className="mr-auto">
      <Nav.Link href="search">Search</Nav.Link>
      <Nav.Link href="saved">Saved</Nav.Link>
      
    </Nav>
    
</Navbar>
    )}