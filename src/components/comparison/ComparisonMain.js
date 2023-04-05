import React from "react";
import CustomNavbar from "../CustomNavbar";
import FooterTwo from "../Footer/FooterTwo";
import FooterData from "../Footer/FooterData";
import CompBanner from "../Banner/CompBanner";
import Faq from "../../Pages/Faq";
import FaqSection from "../FaqSection";
import PricePlan from "./PricePlan";
import CompireSlide from "./CompireSlide";

export default function ComparisonMain() {
  return (
    <div className="body_wrapper">
      <CustomNavbar nClass="m-auto" hbtnClass="new_btn" />
      <CompBanner />
      <CompireSlide />
      <PricePlan />
      <FaqSection />
      <FooterTwo FooterData={FooterData} />
    </div>
  );
}
