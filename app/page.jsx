import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import UpcomingEvents from '@/components/UpcomingEvents'
import Recognitions from '@/components/Recognitions'
import Committees from '@/components/Committees'
import Authorities from '@/components/Authorities'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <UpcomingEvents />
      <Recognitions />
      <Committees />
      <Authorities />
      <Contact />
      <Footer />
    </main>
  )
}
