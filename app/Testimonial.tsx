import React from 'react'
import HeadingBanner from './components/HeadingBanner'

const Testimonial = () => {
  return (
    <div className="w-full px-10 md:px-20 py-20 bg-slate-50 flex flex-col gap-6">
      <HeadingBanner title="Testimonial" text="What our Customer says" />
    </div>
  )
}

export default Testimonial
