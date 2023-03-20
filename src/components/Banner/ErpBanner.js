import React from "react";
import TextLoop from "react-text-loop";

const ErpBanner = () => {
  return (
    <section className="erp_banner_area_two">
      <ul className="list-unstyled cloud_animation">
        <li>
          <img src={require("../../img/erp-home/cloud_01.png")} alt="" />
        </li>
        <li>
          <img src={require("../../img/erp-home/cloud_02.png")} alt="" />
        </li>
        <li>
          <img src={require("../../img/erp-home/cloud_03.png")} alt="" />
        </li>
        <li>
          <img src={require("../../img/erp-home/cloud_04.png")} alt="" />
        </li>
        <li>
          <img src={require("../../img/erp-home/cloud_05.png")} alt="" />
        </li>
        <li>
          <img src={require("../../img/erp-home/cloud_06.png")} alt="" />
        </li>
      </ul>
      <div className="erp_shap"></div>
      <div className="section_intro">
        <div className="section_container">
          <div className="intro">
            <div className=" intro_content">
              <h1>
                Manage Your
                <TextLoop>
                  <h1
                    className="clr-1 ml-1 mr-1"
                    style={{ fontWeight: 700, color: "red" }}
                  >
                    Daily Task
                  </h1>
                  <h1
                    className="clr-1 ml-1 mr-1"
                    style={{ fontWeight: 700, color: "#ecb22e" }}
                  >
                    Motivation
                  </h1>
                  <h1
                    className="clr-1 ml-1 mr-1"
                    style={{ fontWeight: 700, color: "#174ae7" }}
                  >
                    Reminders
                  </h1>
                  <h1
                    className="clr-1 ml-1 mr-1"
                    style={{ fontWeight: 700, color: "red" }}
                  >
                    Finances
                  </h1>
                </TextLoop>
              </h1>
              <p>
                Whatever work you do, you can use Mymanager for your business.
              </p>
              <a href="/#" className="er_btn er_btn_two">
                Try Mymanager
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="animation_img wow fadeInUp" data-wow-delay="0.3s">
        <div className="container">
          <img src={require("../../img/erp-home/erp_dashboard.jpg")} alt="" />
        </div>
      </div>
    </section>
  );
};

export default ErpBanner;
