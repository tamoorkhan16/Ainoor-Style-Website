import React from 'react'
import Mens_TShirts from '../Components/Mens_TShirts'
import NavigationBar from '../Components/NavigationBar'
import Footer from '../Components/Footer'
import CategorySection from '../Components/CategorySection'

function Mens_TShirts_Page() {
  return (
    <>
     <NavigationBar/>
     <CategorySection/>
     <Mens_TShirts/>
     <Footer/> 
    </>
  )
}

export default Mens_TShirts_Page
