import React from "react";
import { Carousel } from "react-bootstrap";

export default function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-75"
          src="https://en.tengrinews.kz/userdata/gallery_en/2020/gallery_590/thumb_m/photo_11757.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75"
          src="https://en.tengrinews.kz/userdata/gallery_en/2014/gallery_570/thumb_m/photo_10498.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75"
          src="https://en.tengrinews.kz/userdata/gallery_en/2014/gallery_554/thumb_m/photo_10212.jpg"
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
  );
}
