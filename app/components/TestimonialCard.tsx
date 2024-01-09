import { Avatar } from '@radix-ui/themes'
import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

const TestimonialCard = ({
  text,
  name,
  profession,
}: {
  text: string
  name: string
  profession: string
}) => {
  return (
    <div className="max-w-xs flex flex-col space-y-5 my-6 bg-white shadow-xl drop-shadow-xl px-4 py-4 rounded-md">
      <FaQuoteLeft className="text-4xl text-slate-400" />
      <p className="text-sm">{text}</p>
      <div className="flex items-center justify-start space-x-2">
        <Avatar
          size="3"
          src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
          radius="full"
          fallback="T"
        />
        <div className="flex flex-col">
          <h4>{name}</h4>
          <p>{profession}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
