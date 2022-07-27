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
    <Navbar bg="light" expand="lg">
      {localStorage.getItem("token")}
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" onClick={() => handleLoginTest()}>{menuData.login}</Nav.Link>
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
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
