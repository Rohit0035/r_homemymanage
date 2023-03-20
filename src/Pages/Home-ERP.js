import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import HomeERP from "../components/Banner/ErpBanner";
import ErpService from "../components/Service/ErpService";
import ErpAction from "../components/ErpAction";
import ErpFeatures from "../components/Features/ErpFeatures";
import Erpanalytics from "../components/Erpanalytics";
import ErpCustomerlogo from "../components/ErpCustomerlogo";
import ErpActionTwo from "../components/ErpActionTwo";
import ErpTestimonial from "../components/Testimonial/ErpTestimonial";
import FooterData from "../components/Footer/FooterData";
import FooterTwo from "../components/Footer/FooterTwo";

const Homeerp = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar nClass="m-auto" hbtnClass="new_btn" />
      <HomeERP />
      <ErpService />
      <ErpAction />
      <ErpFeatures />
      <Erpanalytics />
      <ErpCustomerlogo />
      <ErpTestimonial />
      <ErpActionTwo />
      <FooterTwo FooterData={FooterData} />
    </div>
  );
};
export default Homeerp;
