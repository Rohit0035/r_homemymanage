import React from "react";
import Reveal from "react-reveal";
import VideoLooper from "react-video-looper";
import VideoEnter from "../../img/videolist/enterprise-hero.IN.mp4";
const AppBanner = () => {
  return (
    <section className="app_banner_area pag-ent" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <Reveal bottom cascade>
              <div className="app_banner_contentmt mt_40 ">
                <h2
                  className="f_p f_700 f_size_50  mb_20 wow fadeInLeft"
                  data-wow-delay="0.2s"
                >
                  with loved ones Built with enterprises for enterprises
                </h2>
                <p
                  className="f_400 f_size_18 l_height30  wow fadeInLeft"
                  data-wow-delay="0.3s"
                >
                  Mymanager is secure. It’s flexible. It’s software that people
                  actually enjoy using. And it’s here to help your business.
                  <br />
                </p>
                <a
                  href=".#"
                  className="btn_hover mt_30 app_btn wow fadeInLeft"
                  data-wow-delay="0.5s"
                >
                  Get Started
                </a>
              </div>
            </Reveal>
          </div>
          <div className="col-lg-5">
            <VideoLooper
              source={VideoEnter}
              start={4.31}
              end={9.48}
              height="400px"
            />

            {/* <div className="app_img">
              <img
                className="app_screen one wow fadeInDown"
                src={require("../../img/home7/01.png")}
                alt=""
              />
              <img
                className="app_screen two wow fadeInDown"
                src={require("../../img/home7/03.png")}
                alt=""
              />
              <img
                className="app_screen three wow fadeInDown"
                src={require("../../img/home7/02.png")}
                alt=""
              />
              <img
                className="mobile"
                src={require("../../img/home7/app.png")}
                alt=""
              />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppBanner;
