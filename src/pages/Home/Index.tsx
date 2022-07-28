import React, { ChangeEvent, useState } from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap'
import CarouselDoceria from '../../components/Carousel/Index';
import "./style.css"
export default function Home() {

  return (
    <>
      <CarouselDoceria />
      <Container>
        <Row>
          <Col className='text-center mt-5'>
            <h2>Novidades da <span>Confeitaria-React</span></h2>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://s2.glbimg.com/rjxp5NU8HGtBrvD9ORMVwMC6cdo=/0x0:324x250/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/09/21/10_25_34_875_receita_bolo_morango_chantilly2.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="light" className="sysButton">Conferir</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://4.bp.blogspot.com/-gz0e91WxJvk/XB977LSvD8I/AAAAAAAANxM/njtQEa_HLaMHxu3Zx2CSzH-ZWNnNYVqnACLcBGAs/s1600/red-velvet-com-morangos.JPG" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="light" className="sysButton">Conferir</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://mariacarambola.files.wordpress.com/2012/07/220712-bolo-morango-brigadeiro-castanha-do-para-1.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="light" className="sysButton">Conferir</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.ytimg.com/vi/wol6Yy4IvDc/maxresdefault.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="light" className="sysButton">Conferir</Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>

      </Container>

    </>

  )
}