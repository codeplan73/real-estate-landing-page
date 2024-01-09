'use client'

import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Box, Text, Tabs } from '@radix-ui/themes'
import HeroForm from './components/HeroForm'

const Hero = () => {
  return (
    // <div className="bg-[url('/img/re-hero-img.jpeg')] h-[100%]">
    <div
      className="bg-center md:bg-cover h-screen md:h-[80vh] bg-no-repeat flex flex-col items-center md:items-start justify-center  px-4 md:px-20 w-[100vw] space-y-5 md:pt-20"
      style={{ backgroundImage: "url('/img/re-hero-img.jpeg')" }}
    >
      <div className="flex flex-col text-white text-3xl md:text-6xl font-bold font-serif space-y-2">
        <h2>Find your</h2>
        <h2>best Smart</h2>
        <h2>Real Estate.</h2>
      </div>

      <Tabs.Root
        defaultValue="sale"
        className="bg-white p-4 w-full md:w-6/12 shadow-2xl drop-shadow-2xl rounded-sm"
      >
        <Tabs.List>
          <Tabs.Trigger value="sale">For Sale</Tabs.Trigger>
          <Tabs.Trigger value="rent">To Rent</Tabs.Trigger>
          <Tabs.Trigger value="loan">To Loan</Tabs.Trigger>
        </Tabs.List>

        <Box px="4" pt="3" pb="2">
          <Tabs.Content value="sale">
            <HeroForm search="Search" />
          </Tabs.Content>

          <Tabs.Content value="rent">
            <HeroForm search="Search" />
          </Tabs.Content>

          <Tabs.Content value="loan">
            <HeroForm search="Search" />
          </Tabs.Content>
        </Box>
      </Tabs.Root>

      <div className="w-full flex flex-col md:flex-row items-center justify-between ">
        <div className="flex items-center justify-center space-x-8 bg-white p-6 rounded-sm shadow-2xl drop-shadow-2xl">
          <div className="flex flex-col gap-1 items-center">
            <h2 className="text-2xl font-semibold font-serif text-blue-800">
              250 +
            </h2>
            <p className="text-xs text-slate-500">Property Sale</p>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <h2 className="text-2xl font-semibold font-serif text-blue-800">
              500 +
            </h2>
            <p className="text-xs text-slate-500">Apartment Sale</p>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <h2 className="text-2xl font-semibold font-serif text-blue-800">
              300 +
            </h2>
            <p className="text-xs text-slate-500">Customers</p>
          </div>
        </div>
        <div className="hidden md:flex flex-col space-y-2 p-4 items-center justify-center bg-white shadow-2xl drop-shadow-2xl">
          <h2 className="text-4xl text-blue-800 font-semibold">4.8</h2>
          <div className="flex items-start gap-1">
            <FaStar className="text-yellow-400 text-md font-extrabold" />
            <FaStar className="text-yellow-400 text-md font-extrabold" />
            <FaStar className="text-yellow-400 text-md font-extrabold" />
            <FaStar className="text-yellow-400 text-md font-extrabold" />
            <FaStar className="text-yellow-400 text-md font-extrabold" />
          </div>
          <p className="text-xs text-slate-500">Trusted on</p>
          <p className="text-sm text-blue-800 font-bold">500+ Reviews</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
