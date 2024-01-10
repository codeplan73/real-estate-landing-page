'use client'

import React from 'react'
// import Slider from 'react-slick'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import HeadingBanner from './components/HeadingBanner'
import TestimonialCard from './components/TestimonialCard'

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  }
  return (
    <div className="w-full px-10 md:px-20 py-20 bg-slate-50 flex flex-col gap-8">
      <HeadingBanner title="Testimonial" text="What our Customer says" />

      <Slider {...settings}>
        <TestimonialCard
          text=" As a real estate investor, I appreciate the professionalism and market
          knowledge of this team. They helped me make informed decisions, and
          their guidance significantly contributed to my investment success."
          name="Sarah Thompson "
          profession="Real Estate Investor "
        />
        <TestimonialCard
          text=" We are extremely satisfied with the property management services
          provided by this team. Their attention to detail and commitment to
          excellence exceeded our expectations."
          name="Michael Rodriguez"
          profession="Property Owner "
        />
        <TestimonialCard
          text=" As a real estate investor, I appreciate the professionalism and market
          knowledge of this team. They helped me make informed decisions, and
          their guidance significantly contributed to my investment success."
          name="Sarah Thompson "
          profession="Real Estate Investor "
        />
        <TestimonialCard
          text=" Working with this real estate team was a fantastic experience. They
          helped us find our dream home, and their expertise made the entire
          process smooth and stress-free. Highly recommend!"
          name="SEmma Johnson "
          profession="Home Buyer"
        />
      </Slider>
    </div>
  )
}

export default Testimonial
