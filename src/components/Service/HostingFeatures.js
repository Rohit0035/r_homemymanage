import React from "react";
import HostingFeaturesItem from "./HostingFeaturesItem";
import HostingFeaturesItemTwo from "./HostingFeaturesItemTwo";

const HostingFeatures = () => {
  return (
    <section className="hosting_features_area">
      <div className="container">
        <HostingFeaturesItemTwo
          hImage="business1.png"
          hTitle="Solutions for Your small business"
          hPragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          icon="icon7.png"
          icon2="icon8.png"
          text="High speed "
          text2="Move faster"
          tdescription="Hunky dory barney fanny around up the duff no biggie."
          tdescription2="Hunky dory barney fanny around up the duff no biggie."
        />
      </div>
    </section>
  );
};

export default HostingFeatures;
