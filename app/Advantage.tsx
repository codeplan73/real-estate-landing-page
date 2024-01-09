import React from 'react'

import { FaRegHeart } from 'react-icons/fa'
import { RiHotelFill } from 'react-icons/ri'
import { RiPriceTag2Line } from 'react-icons/ri'
import HeadingBanner from './components/HeadingBanner'

const Advantage = () => {
  return (
    <div className="w-full px-10 md:px-20 py-20 bg-slate-200 flex flex-col gap-6">
      <HeadingBanner title=" WHY CHOOSE US" text=" Your Dream Home Awaits" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4 bg-white drop-shadow-xl shadow-xl p-6 rounded-xl">
          <FaRegHeart className="text-red-500 text-4xl font-bold" />
          <h4 className="text-xl font-bold font-serif">Comfortable Living</h4>
          <p className="text-md">
            Discover a range of homes designed to provide you and your family
            with the utmost comfort. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Eveniet mollitia similique architecto, fugit totam
            nemo neque atque autem cum optio!
          </p>
        </div>
        <div className="flex flex-col gap-4 bg-white drop-shadow-xl shadow-xl p-6 rounded-xl">
          <RiHotelFill className="text-red-500 text-4xl font-bold" />
          <h4 className="text-xl font-bold font-serif">Luxurious Spaces</h4>
          <p className="text-md">
            Indulge in the luxury of our carefully crafted residences. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Eveniet mollitia
            similique architecto, fugit totam nemo neque atque autem cum optio!
          </p>
        </div>
        <div className="flex flex-col gap-4 bg-white drop-shadow-xl shadow-xl p-6 rounded-xl">
          <RiPriceTag2Line className="text-red-500 text-4xl font-bold" />
          <h4 className="text-xl font-bold font-serif">Best Price Guarantee</h4>
          <p className="text-md">
            Explore our listings and find your dream home at the best price.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            mollitia similique architecto, fugit totam nemo neque atque autem
            cum optio!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Advantage
