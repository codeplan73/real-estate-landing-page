import React from 'react'
import Image from 'next/image'

interface Image {
  src: string
  alt: string
  width: number
  height: number
  className: string
}
interface Prop {
  image: string
  title: string
  address: string
  price: string
  mapView: string
  buttonText: string
}

const RecommendationCard = ({
  image,
  title,
  address,
  price,
  mapView,
  buttonText,
}: Prop) => {
  return (
    <div className="max-w-sm p-2 bg-white rounded-md drop-shadow-xl shadow-xl">
      <Image
        src={image}
        alt="card image"
        width={1000}
        height={1000}
        className="max-h-60 rounded inset-5"
      />
      <div className="flex flex-col space-y-3 pt-3">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="text-sm text-slate-600">{address}</p>
        <div className="flex items-center justify-between">
          <p className="text-red-500 font-bold">{price}</p>
          <p className="text-blue-800 bg-blue-100 px-2 font-bold">{mapView}</p>
        </div>
        <button className="w-full bg-blue-800 text-white font-semibold py-2 rounded">
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default RecommendationCard
