import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import coursesImg1 from '../../assests/images/web-design.png';
import coursesImg2 from '../../assests/images/graphics-design.png';
import coursesImg3 from '../../assests/images/ui-ux.png';
import './Courses-section.css'
import CoursesCard from './CoursesCard';

const coursesData = [
  {
    id:'01',
    title: 'Web Design BootCamp-2022 for Beginners',
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: coursesImg1
  },
  {
    id:'02',
    title: 'Professional Graphics Design, PhotoShop, Adobe XD, Figma',
    lesson: 20,
    students: 10.5,
    rating: 3.9,
    imgUrl: coursesImg2
  },
  {
    id:'03',
    title: 'UI/UX BootCamp for Beginners in 2022',
    lesson: 18,
    students: 13.5,
    rating: 9.9,
    imgUrl: coursesImg3
  }
]

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className="course__top d-flex justify-content-center align-items-center">
              <div className="course__top__left">
                <h2>Our Popular Courses</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Distinctio laboriosam laudantium odio, 
                  fugit nostrum tempora mollitia accusantium porro asperiores praesentium.
                </p>
              </div>
              <div className='course__top__right'>
                <button className="btn">See All </button>
              </div>
            </div>
          </Col>
          {
            coursesData.map(item => (
              <Col lg='4' mb='6'>
                <CoursesCard key={item.id} item={item} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}
export default Courses;