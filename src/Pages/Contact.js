import React from "react";
import CustomNavbar from "../components/CustomNavbar";
import Contacts from "../components/Contacts";
import FooterTwo from "../components/Footer/FooterTwo";
import FooterData from "../components/Footer/FooterData";

const About = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />

      <Contacts />
      <FooterTwo FooterData={FooterData} />
    </div>
  );
};
export default About;
