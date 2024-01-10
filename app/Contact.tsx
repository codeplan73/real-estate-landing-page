import React from 'react'
import Image from 'next/image'
import HeadingBanner from './components/HeadingBanner'

const Contact = () => {
  return (
    <div className="w-full md:max-w-7xl flex items-start justify-start my-10 p-6">
      <form className="w-full md:w-6/12 bg-white">
        <HeadingBanner title="Contact" text="Get in Touch" />
      </form>
      <div className="hidden md:block md:w-6/12">
        <Image
          src="/img/re-int-2.jpeg"
          alt=""
          height={1000}
          width={1000}
          className="w-full h-auto"
        />
      </div>
    </div>
  )
}

export default Contact
