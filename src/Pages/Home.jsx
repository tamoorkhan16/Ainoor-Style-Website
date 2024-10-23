import React from "react";
import NavigationBar from "../Components/NavigationBar"
import CategorySection from "../Components/CategorySection";
import Slider from "../Components/Slider";
import Footer from "../Components/Footer";
import Categories from "../Components/Categories";
import Notice from "../Components/Notice";

function Home() {
  return (
    <>
      <NavigationBar />
      <CategorySection />
      <Slider />
      <Notice/>
      <Categories />
      <Footer />
    </>
  );
}

export default Home;
