import Image from 'next/image'
import Hero from './Hero'
import Recommendation from './Recommendation'
import Advantage from './Advantage'
import Testimonial from './Testimonial'
import Contact from './Contact'
import LearnMore from './LearnMore'

export default function Home() {
  return (
    <main className="max-w-7xl container mx-auto">
      <Hero />
      <Recommendation />
      <Advantage />
      <Testimonial />
      <Contact />
      <LearnMore />
    </main>
  )
}
