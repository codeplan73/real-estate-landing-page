import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const HeroForm = ({ search }: { search: string }) => {
  return (
    <form className="flex flex-col md:flex-row w-full space-x-0 md:space-x-4">
      <div className="flex flex-col">
        <label htmlFor="" className="flex items-center gap-2">
          Location <IoIosArrowDown />
        </label>
        <input
          type="text"
          className="md:w-full rounded py-1 outline-none"
          placeholder="Enter Location"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="" className="flex items-center gap-2">
          Type <IoIosArrowDown />
        </label>
        <input
          type="text"
          className="md:w-full rounded py-1 outline-none"
          placeholder="Type of House"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="" className="flex items-center gap-2">
          Price Range <IoIosArrowDown />
        </label>
        <input
          type="text"
          className="md:w-full rounded py-1 outline-none"
          placeholder="$150 - $350"
        />
      </div>

      <div className="flex place-items-center">
        <button className="bg-blue-900 w-full text-white px-4 py-3 rounded-sm">
          {search}
        </button>
      </div>
    </form>
  )
}

export default HeroForm
