import React from 'react'
import Image from 'next/image'

const RecommendationCard = () => {
  return (
    <div className="max-w-sm p-2 bg-white rounded-md drop-shadow-xl shadow-xl">
      <Image
        src="/img/house-1.jpeg"
        alt="card image"
        width={1000}
        height={1000}
        className="max-h-60 rounded inset-5"
      />
      <div className="flex flex-col space-y-3 pt-3">
        <h2 className="text-2xl font-semibold">Perumuhan Tata Surya</h2>
        <p className="text-sm text-slate-600">10 buhan Dr, Byaan, MB 39272</p>
        <div className="flex items-center justify-between">
          <p className="text-red-500 font-bold">$235,000</p>
          <p className="text-blue-800 bg-blue-100 px-2 font-bold">
            360 Living View
          </p>
        </div>
        <button className="w-full bg-blue-800 text-white font-semibold py-2 rounded">
          Book Now
        </button>
      </div>
    </div>
  )
}

export default RecommendationCard
