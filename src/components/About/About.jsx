import React from 'react';
import './About.css';
import { Container, Row, Col } from 'reactstrap';
import AboutImage from '../../assests/images/about-us.png';
import CountUp from 'react-countup';
const About = () => {
  return (
    <section className='about'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="about__img">
              <img src={AboutImage} alt="About Us Image" className='w-100' />
            </div>
          </Col>
          <Col lg='6' md='6'>
            <div className="about__content">
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Deleniti ex rem reiciendis cumque quae sint eos sunt tempora aperiam voluptatibus.
              </p>
              <div className="about__counter">
                <div className='d-flex gap-5 align-items-center'>
                  <div className="single__counter">
                    <span><CountUp start={0} end={25} duration={2} suffix={'K'} /></span>
                    <p className="counter__title">Completed Projects</p>
                  </div>
                  <div className="single__counter">
                    <span><CountUp start={0} end={12} duration={2} suffix={'M'} /></span>
                    <p className="counter__title">Patient Around World</p>
                  </div>
                </div>
                <div className='d-flex gap-5 align-items-center'>
                  <div className="single__counter">
                    <span><CountUp start={0} end={25} duration={2} suffix={'K'} /></span>
                    <p className="counter__title">Completed Projects</p>
                  </div>
                  <div className="single__counter">
                    <span><CountUp start={0} end={12} duration={2} suffix={'M'} /></span>
                    <p className="counter__title">Patient Around World</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default About;