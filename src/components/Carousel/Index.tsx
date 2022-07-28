import React from 'react'
import { Carousel } from 'react-bootstrap'
import "./style.css"
export default function CarouselDoceria() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i0.wp.com/blogchefcenter.com.br/wp-content/uploads/2020/04/original-d461d5e89a7461a3330b04e8cc2239d5.jpg?fit=724%2C483&ssl=1"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.saboravida.com.br/wp-content/uploads/2019/05/tendencias-da-confeitaria-para-2019.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://guaipaembalagem.com.br/wp-content/uploads/2021/02/acessorios-de-confeitaria-1-1-1080x627.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
