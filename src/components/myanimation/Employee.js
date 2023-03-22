import React from "react";
import CustomNavbar from "../../components/CustomNavbar";
import SupportBanner from "../../components/Banner/SupportBanner";
import BannerData from "../../components/Banner/BannerData";
import SupportPartnerlogo from "../../components/SupportPartnerlogo";
// import SupportItem from "../Service/SupportItem";
import Designtab from "../../components/Features/Designtab";
import SupportIntegration from "../../components/SupportIntegration";
import FooterData from "../../components/Footer/FooterData";
import FooterTwo from "../Footer/FooterTwo";

const Employee = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar nClass="m-auto" hbtnClass="new_btn" />
      <SupportBanner />
      <SupportPartnerlogo BannerData={BannerData} />
      {/* <SupportItem /> */}
      <Designtab />
      <SupportIntegration />

      <FooterTwo FooterData={FooterData} />
    </div>
  );
};
export default Employee;
