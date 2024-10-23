import React from "react";
import ContactUs from "../Components/ContactUs";
import NavigationBar from "../Components/NavigationBar";
import CategorySection from "../Components/CategorySection";
import Footer from "../Components/Footer";


function ContactUs_page() {
  return (
    <>
      <NavigationBar />
      <CategorySection />
      <ContactUs/>
      <Footer/>
    </>
  );
}

export default ContactUs_page;
