import React from "react";
import HostingFeaturesItem from "./HostingFeaturesItem";

const HostingFeaturesTwo = () => {
  return (
    <section className="hosting_features_area pt-0">
      <div className="container">
        <HostingFeaturesItem
          rowClass="flex-row-reverse"
          hImage="business2.png"
          hTitle="Solutions for Your small business"
          hPragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          icon="icon9.png"
          icon2="icon10.png"
          text="Reseller "
          text2=" Lorem Ipsum"
          tdescription="Hunky dory barney fanny around up the duff no biggie."
          tdescription2="Hunky dory barney fanny around up the duff no biggie."
        />
      </div>
    </section>
  );
};

export default HostingFeaturesTwo;
