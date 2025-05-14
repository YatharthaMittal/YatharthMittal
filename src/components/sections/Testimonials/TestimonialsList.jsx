import React from 'react'
import Testimonial from './Testimonial'

const TestimonialsList = ({testimonials}) => {
  return (
    <ul className='flex flex-col col-span-12 gap-y-6' id="cards">
      {testimonials.map((test)=>(
        <Testimonial test={test} key={test.name}/>
      ))}
    </ul>
  )
}

export default TestimonialsList