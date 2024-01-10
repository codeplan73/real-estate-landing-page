import Image from 'next/image'
import Hero from './Hero'
import Recommendation from './Recommendation'
import Advantage from './Advantage'
import Testimonial from './Testimonial'
import Contact from './Contact'

export default function Home() {
  return (
    <main className="max-w-7xl container mx-auto">
      {/* hero section */}
      <Hero />
      {/* recommendation section */}
      <Recommendation />
      {/* advantage section */}
      <Advantage />
      {/* testimonial section */}
      <Testimonial />
      {/* contact section */}
      <Contact />
      {/* learn more section */}
      {/* footer section */}
    </main>
  )
}
