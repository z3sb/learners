import React from 'react'

const FreeCourseCard = (props) => {
  const {imgUrl, title, students, rating} = props.item
  return (
    <div className="single__free__course">
      <div className="free__course__img mb-5">
        <img src={imgUrl} alt="Web Development" className='w-100'/>
        <button className="btn free__btn">Free</button>
      </div>
      <div className="free__course__details">
        <h6>{title}</h6>
        <div className='d-flex align-items-center gap-5'>
          <span className='d-flex align-items-center gap-2'><i className="ri-user-line"></i> {students}K</span>
          <span className='d-flex align-items-center gap-2'><i className="ri-star-fill"></i> {rating}K</span>
        </div>
      </div>
    </div>
  )
}
export default FreeCourseCard;