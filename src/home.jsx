import React from 'react'
import Header from './components/header'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSeachedCar from './components/MostSearchedCar'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'


function Home() {
  return (
    <div>
      {/* header */}
      <Header/>
      {/* hero */}
      <Hero/>
      {/* Category */}
       <Category/>
       {/* MostSearchedCar */}
       <MostSeachedCar/>
       {/* InfoSection */}
       <InfoSection/>
       {/* Footer */}
       <Footer/>
    </div>
  )
}

export default Home