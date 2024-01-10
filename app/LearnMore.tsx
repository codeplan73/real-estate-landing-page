import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const LearnMore = () => {
  return (
    <div className="bg-slate-100 w-full max-w-7xl px-10 md:px-20 py-10">
      <div className="bg-white rounded-md p-4 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h2 className="text-2xl md:text-4xl font-black font-serif">
              Easy host, easy earn more income
            </h2>
            <p className="text-md text-slate-500 leading-10">
              10 rights at an estimated $200 a night
            </p>
          </div>
          <Link
            href="#"
            className="bg-blue-800 text-white py-2 px-2 font-semibold"
          >
            Learn More
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="max-w-sm">
            <Image
              src="/img/int-1.jpeg"
              className="h-full rounded-lg"
              alt=""
              height={1000}
              width={1000}
            />
          </div>
          <div className="max-w-sm">
            <Image
              src="/img/int-2.jpeg"
              className="h-full rounded-lg"
              alt=""
              height={1000}
              width={1000}
            />
          </div>
          <div className="max-w-sm">
            <Image
              src="/img/int-3.jpeg"
              className="h-full rounded-lg"
              alt=""
              height={1000}
              width={1000}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearnMore
