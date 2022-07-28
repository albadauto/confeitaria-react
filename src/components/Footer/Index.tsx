import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import { FooterMain } from './style'

export default function Footer() {
  return (
    <FooterMain>
        <Container>
            <Row>
                <Col>
                Desenvolvido e projetado by: José Adauto
                </Col>
            </Row>
        </Container>
    </FooterMain>
  )
}
