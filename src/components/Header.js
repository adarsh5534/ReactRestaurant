import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
        <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://i.postimg.cc/FFLxJTG8/image.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Smoke House
          </Navbar.Brand>
        </Container>
      </Navbar>
    
    </>
  )
}

export default Header