import React, { Fragment } from 'react'
import Header from '../components/Header/Header';
import HeroSection from '../components/Hero-Section/HeroSection';
import Company from '../components/Company-section/Company';
import About from '../components/About/About';
import Courses from '../components/Courses-section/Courses';
import ChooseUs from '../components/Choose-us/ChooseUs';
import Feature from '../components/Feature-section/Feature';
import FreeCourse from '../components/Free-Courses/FreeCourse';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';
const Home = () => {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Company />
      <About />
      <Courses />
      <ChooseUs />
      <Feature />
      <FreeCourse />
      <Testimonials />
      <Newsletter />
      <Footer />
    </Fragment>
  )
}
export default Home;