import React, { useState } from 'react'
import { Col, Row, Container, Form, FloatingLabel, Button } from 'react-bootstrap'
import { IUser } from '../../interfaces/user.interface';
import "./style.css"
export default function Login() {
  const [userData, setUserData] = useState<IUser>({} as IUser)
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <Container className="border border-dark mt-5 main-login">
      <Row>
        <Col className="text-center">
          <h2>Faça login e aproveite nosso <span> serviço </span></h2>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col className="mx-5">
            <FloatingLabel label="Email">
              <Form.Control type="text" placeholder='Email' value={userData.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({ ...userData, name: e.target.value })} />
            </FloatingLabel>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="mx-5">
            <FloatingLabel label="Senha">
              <Form.Control type="text" placeholder='Senha' />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col className="mx-5 mt-3 text-center">
            <Button className="sysButtonUpperCase" variant="light">Login</Button>
          </Col>
        </Row>
        <Row>
          <Col className="mx-5 mt-3 text-center">
            <a href="">Não tem conta? Registre-se já!</a>
          </Col>
        </Row>
        <Row>
          <Col className="mx-5 mt-3 text-center">
            <a href="">Esqueci minha senha</a>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}
