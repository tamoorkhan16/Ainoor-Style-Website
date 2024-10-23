import React from 'react'
import FaqsSection from '../Components/FaqsSection'
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'
import CategorySection from '../Components/CategorySection'

function FAQs() {
  return (
    <>
    <NavigationBar/>
    <CategorySection/>
      <FaqsSection/>
      <Footer/>
    </>
  )
}

export default FAQs
