import React from "react";

const SupportBanner = () => {
  return (
    <section className="support_home_area">
      <div className="banner_top">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-left">
              <h2
                className="f_p f_size_40 l_height60 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                Mymanager
                <span className="f_700 ml-2 mr-2">Employee support</span>{" "}
                software
              </h2>
              <p
                className="f_size_18 l_height30 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                Mymanager is your all in one platform that will eliminate the
                need to use multiple SaaS products. Switch from productivity
                loss to meeting the newest member of your team — Your Manager
              </p>
              <a
                href="https://mymanager.com/login"
                className="er_btn er_btn_two mt-2"
              >
                Try Mymanager <i className="ti-arrow-right"></i>
              </a>
            </div>
            <div className="col-md-6 text-left">
              <div className="" data-wow-delay="0.9s">
                <img
                  src={require("../../img/new-home/employee-dash.jpg")}
                  alt=""
                  width="100%"
                />
              </div>
            </div>
          </div>
          {/* <div className="support_home_img wow fadeInUp" data-wow-delay="0.9s">
            <img src={require("../../img/new-home/banner.png")} alt="" />
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default SupportBanner;
