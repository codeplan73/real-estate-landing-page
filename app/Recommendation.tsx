import React from 'react'
import RecommendationCard from './components/RecommendationCard'

const Recommendation = () => {
  return (
    <div className="w-full px-10 md:px-20 py-20 bg-slate-100 flex flex-col gap-6">
      <h4 className="border border-gray-400 max-w-min p-1 rounded-sm text-blue-800 font-semibold text-sm">
        DISCOVER
      </h4>

      <div className="w-full flex flex-col gap-6 md:flex-row items-center justify-between">
        <div className="flex flex-col gap-3 w-full md:w-6/12">
          <h2 className="text-2xl md:text-4xl font-black font-serif">
            Best recommendation
          </h2>
          <p className="text-sm">
            Discover our exlusive selection of the finest one-of-a-kind beauty
            properties architecural masterpieces.
          </p>
        </div>

        <div className="w-full md:w-6/12 flex items-center justify-start md:justify-end space-x-6">
          <p className="cursor-pointer bg-blue-800 text-white px-4 py-2">
            Popular
          </p>
          <p>Penthouse</p>
          <p>Apartment</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <RecommendationCard
          image="/img/house-1.jpeg"
          title="Perumahan Tata Surya"
          address="1026 Bulhan Dr, Bryann, MS 39237"
          price="$235,000"
          mapView="360 Living Area"
          buttonText="Book Now"
        />
        <RecommendationCard
          image="/img/house-2.jpeg"
          title="Perumahan Tata Surya"
          address="1026 Bulhan Dr, Bryann, MS 39237"
          price="$235,000"
          mapView="360 Living Area"
          buttonText="Book Now"
        />
        <RecommendationCard
          image="/img/house-3.jpeg"
          title="Perumahan Tata Surya"
          address="1026 Bulhan Dr, Bryann, MS 39237"
          price="$235,000"
          mapView="360 Living Area"
          buttonText="Book Now"
        />
      </div>
    </div>
  )
}

export default Recommendation
