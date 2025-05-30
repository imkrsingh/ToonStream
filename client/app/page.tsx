import { Suspense } from "react"
import Footer from "../components/Footer"
import HeroSection from "../components/Hero"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

const page = () => {
  return (
    <>
    <Navbar/>
    <Suspense fallback={<div>Loading...</div>}>
      <HeroSection />
    </Suspense>
    <Footer/>
    </>
  )
}

export default page