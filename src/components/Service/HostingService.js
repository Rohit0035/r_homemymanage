import React from "react";
import Sectitle from "../Title/Sectitle";
import HRServiceItems from "./HostingServiceitem";

const HostingService = () => {
  return (
    <section className="hosting_service_area">
      <div className="container">
        <Sectitle
          sClass="hosting_title text-center"
          Title="Designed for Business with Manager."
          TitleP="Mymanager is your all in one platform that will eliminate the need to use multiple SaaS products. "
        />
        <div className="row">
          <HRServiceItems
            hostingicon="icon1.png"
            hostingserviceTitle="Dashboard"
            hostingservicedescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
          <HRServiceItems
            hostingicon="icon2.png"
            hostingserviceTitle="Course"
            hostingservicedescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
          <HRServiceItems
            hostingicon="icon3.png"
            hostingserviceTitle="Category"
            hostingservicedescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
          <HRServiceItems
            hostingicon="icon4.png"
            hostingserviceTitle="Solution"
            hostingservicedescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
          <HRServiceItems
            hostingicon="icon5.png"
            hostingserviceTitle="Order"
            hostingservicedescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
          <HRServiceItems
            hostingicon="icon6.png"
            hostingserviceTitle="Setting"
            hostingservicedescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          />
        </div>
      </div>
    </section>
  );
};
export default HostingService;
