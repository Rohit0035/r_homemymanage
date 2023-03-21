import React from "react";
import SecurityFeaturesItem from "./SecurityFeaturesItem";

const SecurityFeatures = () => {
  return (
    <section className="h_security_area">
      <div className="container">
        <div className="hosting_title security_title text-center">
          <h2 className="wow fadeInUp" data-wow-delay="0.2s">
            Daily Task Report
          </h2>
        </div>
        <div className="row">
          <SecurityFeaturesItem
            itemClass="pr_70"
            image="security_1.png"
            Title="Share Task with the whole team"
            pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <SecurityFeaturesItem
            itemClass="pl_70"
            image="security_2.png"
            Title="Advanced Task Management"
            pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <SecurityFeaturesItem
            itemClass="pr_70"
            image="security_3.png"
            Title="Task feedback "
            pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <SecurityFeaturesItem
            itemClass="pl_70"
            image="security_4.png"
            Title="Mymanager Task Protector"
            pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </div>
    </section>
  );
};
export default SecurityFeatures;
