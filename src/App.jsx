import React from "react";
import "./CSS/index.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import FAQs from "./Pages/FAQs";
import Mens_TShirts_Page from "./Pages/Mens_TShirts_Page";
import Mens_TrackSuits_Page from "./Pages/Mens_TrackSuits_Page";
import ContactUs_page from "./Pages/ContactUs_page";
import ComplaintForm_Page from "./Pages/ComplaintForm_Page";
import AboutUs_Page from "./Pages/AboutUs_Page";
import Customer_Feedback_Page from "./Pages/Customer_Feedback_Page";
import Women_TShirts_Page from "./Pages/Women_TShirts_Page";
import Women_SportBra_Page from "./Pages/Women_SportBra_Page";
import OrderStatus_Page from "./Pages/OrderStatus_Page";
import Jackets_Page from "./Pages/Jackets_Page";
import Hoodies_Page from "./Pages/Hoodies_Page";
import Coats_Page from "./Pages/Coats_Page";
import Mens_Jacket_Page from "./Pages/Mens_Jacket_Page";
import Women_GymSuit_Page from "./Pages/Women_GymSuit_Page";
import ShippingPolicy_Page from "./Pages/ShippingPolicy_Page";
import ExchangeAndReturns_Page from "./Pages/ExchangeAndReturns_Page";
import FitnessSuit_Page from "./Pages/FitnessSuit_Page";
import Mens_Wear_Short_Pages from "./Pages/Mens_Wear_Short_Pages";
import SweatShirts_Page from "./Pages/SweatShirts_Page";
import Women_SweatSuitPage from "./Pages/Women_SweatSuitPage";
import Women_TrackSuits_Page from "./Pages/Women_TrackSuits_Page";
import LeatherBelts_Page from "./Pages/LeatherBelts_Page";
import LeatherPants_Page from "./Pages/LeatherPants_Page";
import LeatherGloves_Page from "./Pages/LeatherGloves_Page";
import AccBjjGi_Page from "./Pages/AccBjjGi_Page";
import AccSportJersey_Page from "./Pages/AccSportJersey_Page";
import AccGloves_Page from "./Pages/AccGloves_Page";
import AccBjjGiBelts from "./Components/AccBjjGiBelts";
import AccRashGuards_Page from "./Pages/AccRashGuards_Page";
import AccBjjgiBelts_Page from "./Pages/AccBjjgiBelts_Page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FAQs" element={<FAQs />} />
        <Route path="/ContactUs" element={<ContactUs_page />} />
        <Route path="/Tracking Order" element={<OrderStatus_Page />} />
        <Route path="/ComplaintForm" element={<ComplaintForm_Page />} />
        <Route path="/CustomerFeedback" element={<Customer_Feedback_Page />} />
        <Route path="/AboutUs" element={<AboutUs_Page />} />
        <Route
          path="/Men's Wear/Men's T-Shirts"
          element={<Mens_TShirts_Page />}
        />
        <Route path="/Men's Wear/Hoodies" element={<Hoodies_Page />} />
        <Route path="/Men's Wear/Sweat Shirts" element={<SweatShirts_Page />} />
        <Route path="/Men's Wear/Shorts" element={<Mens_Wear_Short_Pages />} />
        <Route path="/Men's Wear/Fitness Suit" element={<FitnessSuit_Page />} />
        <Route path="/Leather/Coats" element={<Coats_Page />} />
        <Route
          path="/Men's Wear/Men's TrackSuits"
          element={<Mens_TrackSuits_Page />}
        />
        <Route
          path="/Women's Wear/Women's T-Shirts"
          element={<Women_TShirts_Page />}
        />
        <Route
          path="/Women's Wear/Women's Sports Bra"
          element={<Women_SportBra_Page />}
        />
        <Route
          path="/Women's Wear/Women's Sweat Suits"
          element={<Women_SweatSuitPage />}
        />
        <Route
          path="/Women's Wear/Women's Gym Suits"
          element={<Women_GymSuit_Page />}
        />
        <Route
          path="/Women's Wear/Women's TrackSuits"
          element={<Women_TrackSuits_Page />}
        />
        <Route path="/Leather/Jackets" element={<Jackets_Page />} />
        <Route path="/Leather/Belts" element={<LeatherBelts_Page />} />
        <Route path="/Leather/Pants" element={<LeatherPants_Page />} />
        <Route path="/Leather/Gloves" element={<LeatherGloves_Page />} />
        <Route path="/Accessories/Bjj Gi" element={<AccBjjGi_Page />} />
        <Route
          path="/Accessories/Sport Jersey"
          element={<AccSportJersey_Page />}
        />
        <Route path="/Accessories/Gloves" element={<AccGloves_Page />} />
        <Route
          path="/Accessories/Bjj Gi Belts"
          element={<AccBjjgiBelts_Page />}
        />
        <Route
          path="/Accessories/Rash Guards"
          element={<AccRashGuards_Page />}
        />

        <Route path="/Shipping Policy" element={<ShippingPolicy_Page />} />
        <Route
          path="/Exchange and Returns"
          element={<ExchangeAndReturns_Page />}
        />
      </Routes>
    </>
  );
}

export default App;
