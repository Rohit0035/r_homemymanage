import React from "react";
import TextLoop from "react-text-loop";
import { FcGoogle } from "react-icons/fc";

const ChatBanner = () => {
  return (
    <section className="chat_banner_area">
      <img
        className="p_absoulte cloud"
        data-parallax='{"x": 0, "y": 150}'
        src={require("../../img/home-chat/cloud.png")}
        alt=""
      />
      <img
        className="p_absoulte left wow fadeInLeft"
        data-wow-delay="0.2s"
        src={require("../../img/home-chat/left_leaf.png")}
        alt=""
      />
      <img
        className="p_absoulte right wow fadeInRight"
        data-wow-delay="0.3s"
        src={require("../../img/home-chat/right_leaf.png")}
        alt=""
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="chat_banner_content">
              {/* <div className="c_tag wow fadeInUp">
                <img
                  src={require("../../img/home-chat/live_chat.png")}
                  alt=""
                />{" "}
                Live chat
              </div> */}
              <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                Your
                <TextLoop>
                  <h2
                    className="clr-1 ml-2 mr-2"
                    style={{ fontWeight: 700, color: "red" }}
                  >
                    Personal
                  </h2>
                  <h2
                    className="clr-1 ml-2 mr-2"
                    style={{ fontWeight: 700, color: "#ecb22e" }}
                  >
                    Business
                  </h2>
                  <h2
                    className="clr-1 ml-2 mr-2"
                    style={{ fontWeight: 700, color: "#174ae7" }}
                  >
                    Task
                  </h2>
                  <h2
                    className="clr-1 ml-2 mr-2"
                    style={{ fontWeight: 700, color: "green" }}
                  >
                    Productivity
                  </h2>
                </TextLoop>
                Manager at your fingertips
              </h2>
              <p
                className="f_400  l_height28 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                Mymanager is your all in one platform that will eliminate the
                need to use multiple SaaS products. Switch from productivity
                loss to meeting the newest member of your team — Your Manager
              </p>
              <div
                className="text-center pr_50 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                {/* <a href="/#" className="chat_btn btn_hover">
                  Read More
                </a> */}
                <button className="email-btn">
                  Sign up with email address
                </button>

                <button className="google-btn">
                  <FcGoogle fontSize={30} className="mr-2" />
                  Sign up with Google
                </button>
                <div className="">
                  <span>
                    (Create your free account. No credit card is required)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-2">
            <div className="chat_img">
              <img
                className="p_absoulte p_one"
                src={require("../../img/home-chat/panguin_img_one.png")}
                alt=""
              />
              <img
                className="p_absoulte p_two"
                src={require("../../img/home-chat/panguin_img_two.png")}
                alt=""
              />
              <img
                className="p_absoulte p_three"
                src={require("../../img/home-chat/panguin_img_three.png")}
                alt=""
              />
              <div className="round one"></div>
              <div className="round two"></div>
              <div className="round three"></div>
              <img
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                src={require("../../img/home-chat/Messages.png")}
                alt="chat-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatBanner;
