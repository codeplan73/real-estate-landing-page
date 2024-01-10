import React from 'react'
import Image from 'next/image'
import HeadingBanner from './components/HeadingBanner'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className="w-full md:max-w-7xl flex items-start justify-start py-20 px-10 md:px-20 rounded-xl">
      <form className="w-full md:w-6/12 bg-white md:pr-20">
        <HeadingBanner title="Contact" text="Get in Touch" />
        <p className="text-md text-slate-600">
          Start your search with an expert local agent there no pressure or
          obligation.
        </p>

        <div className="mt-6 w-full flex flex-col gap-6">
          <div className="flex flex-col space-y-1">
            <label htmlFor="fullname" className="text-sm">
              Fullname
            </label>
            <input
              type="text"
              name=""
              className="outline-teal-600 border border-slate-400 rounded-lg py-2 px-2"
              placeholder="Fullname"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="fullname" className="text-sm">
              Email
            </label>
            <input
              type="text"
              name=""
              className="outline-teal-600 border border-slate-400 rounded-lg py-2 px-2"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="fullname" className="text-sm">
              Message
            </label>
            <textarea
              name=""
              className="outline-teal-600 border border-slate-400 rounded-lg py-2 px-2"
              placeholder="Message"
              rows={5}
            ></textarea>
          </div>

          <div className="flex items-center justify-start gap-4">
            <input
              type="checkbox"
              id="subscribe"
              name="subscribe"
              required
              className="border border-slate-400 rounded-lg py-2 px-2"
            />
            <label htmlFor="subscribe" className="text-sm">
              You agree to our friendly{' '}
              <Link href="#" className="underline">
                Terms of use
              </Link>{' '}
              and{' '}
              <Link href="#" className="underline">
                Policy Privacy
              </Link>
            </label>
          </div>

          <button className="text-white bg-blue-900 py-3 rounded-md">
            Send
          </button>
        </div>
      </form>
      <div className="hidden md:block md:w-6/12">
        <Image
          src="/img/re-int-2.jpeg"
          alt=""
          height={1000}
          width={1000}
          className="w-full overflow-hidden rounded-xl"
        />
      </div>
    </div>
  )
}

export default Contact
