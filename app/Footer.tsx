import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className=" text-white flex flex-col">
      <div className="bg-blue-800 flex flex-col md:flex-row gap-4 px-10 md:px-20 py-10">
        <div className="w-full md:w-4/12">
          <Image
            src="/img/logo-1.png"
            alt="footer logo"
            className="h-20 w-20"
            width={1000}
            height={1000}
          />
          <p className="leading-tight text-sm">
            Design amazing digital experience that creates more happy in the
            week
          </p>
        </div>
        <div className="w-full md:w-8/12 flex flex-col md:flex-row items-start gap-6 justify-between">
          <div className="w-full md:w-6/12 flex">
            <div className="flex flex-1 flex-col items-start space-x-4 space-y-2">
              <h4 className="text-lg font-semibold">Company</h4>
              <Link href="#">About Us</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Press</Link>
              <Link href="#">News</Link>
              <Link href="#">Media List</Link>
              <Link href="#">Contact</Link>
            </div>

            <div className="flex flex-1 flex-col  items-start space-x-4 space-y-2">
              <h4 className="text-lg font-semibold">Resources</h4>
              <Link href="#">Blog</Link>
              <Link href="#">Newsletter</Link>
              <Link href="#">Event</Link>
              <Link href="#">Help Center</Link>
              <Link href="#">Support</Link>
            </div>
          </div>

          <div className="w-full md:w-6/12 flex">
            <div className="flex flex-col flex-1 items-start space-x-4 space-y-2">
              <h4 className="text-lg font-semibold">Social</h4>
              <Link href="#">Twitter</Link>
              <Link href="#">Facebook</Link>
            </div>

            <div className="flex flex-col flex-1 items-start space-x-4 space-y-2">
              <h4 className="text-lg font-semibold">Company</h4>
              <Link href="#">Terms</Link>
              <Link href="#">Privacy</Link>
              <Link href="#">Cookies</Link>
              <Link href="#">License</Link>
              <Link href="#">Settings</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-900 w-full flex flex-col-reverse md:flex-row justify-between items-center gap-4 px-10 md:px-20 py-5">
        <p>
          &copy; 2024 <Link href="">Globe Raven</Link>. All rights reserved
        </p>
        <div className="flex space-x-4">
          <Link href="#">
            <FaTwitter />
          </Link>
          <Link href="#">
            <FaLinkedin />
          </Link>
          <Link href="#">
            <FaFacebook />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
