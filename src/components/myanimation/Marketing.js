import React from "react";
import CustomNavbar from "../../components/CustomNavbar";
import AgencyBanner from "../../components/Banner/AgencyBanner";
import BannerData from "../../components/Banner/BannerData";
import MarketingService from "../../components/Service/MarketingService";
import ServiceData from "../../components/Service/ServiceData";
import AgencyAbout from "../../components/About/AgencyAbout";
import Features from "../../components/Features/Features";
// import MarketingTestimonial from "../../components/Testimonial/MarketingTestimonial";
import AgencyAction from "../../components/AgencyAction";
import FooterTwo from "../../components/Footer/FooterTwo";
import FooterData from "../../components/Footer/FooterData";

const Marketing = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar nClass="m-auto" hbtnClass="new_btn" />
      <AgencyBanner BannerData={BannerData} />
      <MarketingService ServiceData={ServiceData} />
      <AgencyAbout ServiceData={ServiceData} />
      <Features />
      {/* <MarketingTestimonial BannerData={BannerData} /> */}
      <AgencyAction />
      <FooterTwo FooterData={FooterData} />
    </div>
  );
};
export default Marketing;
