import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
const footerQuickLinks = [
  {
    display: 'Home',
    url: "#"
  },
  {
    display: 'About Us',
    url: "#"
  },
  {
    display: 'Courses',
    url: "#"
  },
  {
    display: 'Pages',
    url: "#"
  },
  {
    display: 'Blog',
    url: "#"
  },
]
const footerInfoLinks = [
  {
    display: 'Privacy Policy',
    url: "#"
  },
  {
    display: 'Membership',
    url: "#"
  },
  {
    display: 'Purchases Guide',
    url: "#"
  },
  {
    display: 'Terms of Service',
    url: "#"
  }
]
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3'>
            <h2 className='d-flex align-items-center gap-1'><i className="ri-pantone-line"></i> Learners.</h2>
            <div className="follows">
              <p className='mb-0'>Follow us on social media</p>
              <span><a href="https://www.facebook.com/profile.php?id=100044635810599"><i className="ri-facebook-line"></i></a></span>
              <span><a href="https://www.instagram.com/z3.sb"><i className="ri-instagram-line"></i></a></span>
              <span><a href="https://www.linkedin.com/in/haider-xr-a0581523b/"><i className="ri-linkedin-line"></i></a></span>
              <span><a href="https://www.twitter.com/Haider68756653"><i className="ri-twitter-line"></i></a></span>
            </div>
          </Col>
          <Col lg='3'>
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className='link__list'>
              {
                footerQuickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="border-0 ps-0 link__item"><a href={item.url}>{item.display}</a></ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h6 className="fw-bold">Information</h6>
            <ListGroup className='link__list'>
              {
                footerInfoLinks.map((item, index) => (
                  <ListGroupItem key={index} className="border-0 ps-0 link__item"><a href={item.url}>{item.display}</a></ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h6 className="fw-bold">Get in Touch</h6>
            <p>Address: Iraq Baghdad</p>
            <p>Phone: +964 772 759 9259</p>
            <p>Email: oslvuao@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer;