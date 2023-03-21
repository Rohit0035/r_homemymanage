import React from "react";
import CustomNavbar from "../../components/CustomNavbar";
import SecurityBanner from "../../components/Banner/SecurityBanner";
import SecurityFeatures from "../../components/Features/SecurityFeatures";
import Analyticeslist from "../../components/Analyticeslist";
// import SecurityCustomerLogo from "../../components/SecurityCustomersLogo";
import FooterData from "../../components/Footer/FooterData";
import FooterTwo from "../Footer/FooterTwo";

const Task = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar nClass="m-auto " hbtnClass="new_btn" />
      <SecurityBanner />
      <SecurityFeatures />

      <Analyticeslist />
      {/* <SecurityCustomerLogo /> */}
      <FooterTwo FooterData={FooterData} />
    </div>
  );
};

export default Task;
