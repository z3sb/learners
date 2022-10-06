import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import courseImg01 from '../../assests/images/web-development.png';
import courseImg02 from '../../assests/images/kids-learning.png';
import courseImg03 from '../../assests/images/seo.png';
import courseImg04 from '../../assests/images/ui-ux.png';
import './free-couse.css';
import FreeCourseCard from './FreeCourseCard';

const freeCourseData = [
  {
    id: '01', 
    title: "Basic Web Development Course",
    imgUrl: courseImg01,
    students:5.5,
    rating: 4.8
  },
  {
    id: '02', 
    title: "Coding for Junior Basic Course",
    imgUrl: courseImg02,
    students:9.5,
    rating: 8.9
  },
  {
    id: '03', 
    title: "Search Engine Optimization-Basic",
    imgUrl: courseImg03,
    students:1.9,
    rating: 1.5
  },
  {
    id: '04', 
    title: "Basic UI/UX Design  - Figma",
    imgUrl: courseImg04,
    students:3.9,
    rating: 2.4
  },
]

const FreeCourse = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className='fw-bold'>Our Free Courses</h2>
          </Col>
          {
            freeCourseData.map(item => (
              <Col lg='3' key={item.id}>
                <FreeCourseCard item={item} />
              </Col>
            ))
          }
        </Row>
      </Container>
    </section>
  )
}
export default FreeCourse;