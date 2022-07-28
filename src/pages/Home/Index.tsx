import React, { ChangeEvent, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CarouselDoceria from '../../components/Carousel/Index'


export default function Home() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <CarouselDoceria />
      <Container>
        <Row>
          <Col className='text-center'>
            <h2>Novidades da <span>Confeitaria-React</span></h2>
          </Col>
        </Row>
      </Container>
      
    </>

  )
}