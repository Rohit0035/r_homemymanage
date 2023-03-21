import React from "react";
import CustomNavbar from "../../components/CustomNavbar";
import CrmBanner from "../../components/Banner/CrmBanner";
// import StartupFeatures from "../../components/Features/StartupFeatures";
import Stservice from "../../components/Service/Sservice/StartupService";
import Testimonial from "../../components/Testimonial/Testimonial";
import Cprogress from "../../components/CircleProgressbar";
// import PrototypeFooter from "../../components/Footer/PrototypeFooter";
import FooterData from "../../components/Footer/FooterData";
import FooterTwo from "../Footer/FooterTwo";

const Goal = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar nClass="m-auto" hbtnClass="new_btn" />
      <CrmBanner />
      {/* <StartupFeatures /> */}
      <Stservice />
      <Cprogress />
      <Testimonial
        tClass="testimonial_area_four sec_pad"
        FooterData={FooterData}
      />
      <FooterTwo FooterData={FooterData} />
    </div>
  );
};
export default Goal;
