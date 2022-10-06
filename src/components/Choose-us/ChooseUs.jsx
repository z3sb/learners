import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap';
import chooseImg from '../../assests/images/why-choose-us.png';
import './choose-us.css';
import ReactPlayer from 'react-player';

const ChooseUs = () => {
  const [showVideo, setShowViedo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ut adipisci optio a numquam rem beatae mollitia minima minus ipsam, 
                earum consectetur, modi et ab esse tempore laudantium? Incidunt, 
                delectus iure? Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Fugiat ipsam totam impedit a, vitae perferendis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, exercitationem.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, iure.
              </p>
            </div>
          </Col>
          <Col lg='6'>
            <div className="choose__img">
              {
                showVideo ?
                <ReactPlayer
                url='https://www.youtube.com/watch?v=2nWzOR1Jolg' 
                controls width='100%' height='300px' />
                : <img src={chooseImg} 
                alt="Why you should choose us" 
                className='w-100' />
              }
              {
                !showVideo && (
                  <span className='play__icon'>
                    <i className="ri-play-circle-line" onClick={() => setShowViedo(!showVideo)}></i>
                  </span>
                ) 
              }
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default ChooseUs;