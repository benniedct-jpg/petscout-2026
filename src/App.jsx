import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Value from './components/Value'
import Lineup from './components/Lineup'
import Program from './components/Program'
import Booking from './components/Booking'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Ticker />
        <Value />
        <Lineup />
        <Program />
        <Booking />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
