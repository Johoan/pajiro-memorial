import React from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";
import logo from '/home/john/Desktop/pajiro-memorial/pajiro-memorial/public/logo192.png';


const items = [
  {
    src:
      {logo},
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src:
      "https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-4.jpg",
    altText: "Slide 2",
    caption: "School library",
    header: "",
    key: "2",
  },
  {
    src:
      "https://demos.creative-tim.com/argon-design-system-pro/assets/img/faces/team-3.jpg",
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
];

const Slides = () => (
  <Row>
    <Col md="11.5" className="mx-auto">
      <UncontrolledCarousel items={items} />
    </Col>
  </Row>
);

export default Slides;

