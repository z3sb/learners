import React from 'react';
import './hero-section.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../../assests/images/hero-img1.png'

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='6' md="6">
            <div className="hero__content">
              <h2 className='mb-4'>Anytime Anywhere <br /> Learn on your Suitable Schedule</h2>
              <p className='mb-4'>Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit. Officiis quo necessitatibus inventore, 
                a nisi sunt ab optio <br /> aut perspiciatis quos consectetur deserunt sed dolorem molestias.
              </p>
              <div className="search">
                <input type="text" placeholder='Search' />
                <button className='btn'><i className="ri-search-line"></i></button>
              </div>
            </div>
          </Col>
          <Col>
            <Col>
              <img src={heroImg} alt="Hero Image" className='w-100' />
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default HeroSection;