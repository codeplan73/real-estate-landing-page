import React from 'react'

const HeadingBanner = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="flex flex-col space-y-6">
      <h4 className="border border-gray-400 max-w-max p-1 rounded-sm bg-white drop-shadow-md text-blue-800 font-semibold text-sm uppercase">
        {title}
      </h4>
      <h2 className="text-2xl md:text-4xl font-black font-serif">{text}</h2>
    </div>
  )
}

export default HeadingBanner
