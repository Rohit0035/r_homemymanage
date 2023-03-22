import React from "react";
import CustomNavbar from "../../components/CustomNavbar";
import HostingBanner from "../../components/Banner/HostingBanner";
import HostingService from "../../components/Service/HostingService";
import HostingFeatures from "../../components/Service/HostingFeatures";
import HostingFeaturesTwo from "../../components/Service/HostingFeaturesTwo";
// import HostingMap from "../../components/HostingMap";
import FooterData from "../../components/Footer/FooterData";
import FooterTwo from "../Footer/FooterTwo";

const Shop = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar nClass="m-auto" hbtnClass="new_btn" />
      <HostingBanner />
      <HostingService />
      <HostingFeatures />
      <HostingFeaturesTwo />

      {/* <HostingMap /> */}

      <FooterTwo FooterData={FooterData} />
    </div>
  );
};
export default Shop;
