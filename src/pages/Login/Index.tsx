import React, { useState } from 'react'
import { Col, Row, Container, Form, FloatingLabel, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../../api';
import { IUser } from '../../interfaces/user.interface';
import { logged } from '../../redux/slices/menu-slice';
import "./style.css"

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState<IUser>({} as IUser)
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
      setLoading(true);
    try {
      const response = await api.post("/auth", userData);
      const token = response.data.token.token;
      sessionStorage.setItem("token", token);
      navigate("/")
      dispatch(logged())
    } catch {
      toast.error("Erro: Usuário não encontrado")
    }finally{
      
      setLoading(false)
    }
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
              <Form.Control type="text" placeholder='Email' value={userData.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({ ...userData, email: e.target.value })} />
            </FloatingLabel>
          </Col>
        </Row>
        <br />
        <Row>
          <Col className="mx-5">
            <FloatingLabel label="Senha">
              <Form.Control type="password" placeholder='Senha' value={userData.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserData({ ...userData, password: e.target.value })} />
            </FloatingLabel>
          </Col>
        </Row>

        <Row>
          <Col className="mx-5 mt-3 text-center">
            <Button className="sysButtonUpperCase" variant="light" type="submit">Login</Button>
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
      {loading && 
        <Row>
          <Col className="text-center font-weight-bold">
            <h4>Carregando...</h4>
          </Col>
        </Row>
      }
      </Form>

    </Container>
  )
}
