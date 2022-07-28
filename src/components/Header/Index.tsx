import React, { useEffect } from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useMenu, verifyLoginMenu } from '../../redux/slices/menu-slice';
import "./style.css";
export default function Header() {
  const dispatch = useDispatch();
  const menuData = useSelector(useMenu);

  useEffect(() => {
    dispatch(verifyLoginMenu())
  }, [])

  function handleLoginTest() {
    if (!localStorage.getItem("token")) {
      localStorage.setItem("token", "fasdfasdfasdfas")
      window.location.reload()

    } else {
      window.location.reload()
    }
  }

  function unsign() {
    localStorage.removeItem("token")
    window.location.reload()
  }

  return (
    <Navbar expand="lg">
      {localStorage.getItem("token")}
      <Container >
        <Navbar.Brand href="/" style={{color: "#fff", fontWeight: "bold"}}>Confeitaria - React</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/login" onClick={() => handleLoginTest()}>{menuData.login}</Nav.Link>
            <Nav.Link href="#action2" onClick={() => unsign()}>Deslogar</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
