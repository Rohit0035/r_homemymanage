import React from "react";
import "@webpunk/circular-text";

import "../../assets/roundtext.css";
// import TextAnimation from "./TextAnimation";
import Plx from "react-plx/lib/Plx";
export default function TextAround() {
  const exampleParallaxData = [
    {
      start: 700,
      duration: 100,
      properties: [
        {
          startValue: -100,
          endValue: -20,
          property: "translateY",
        },
        {
          startValue: 1,
          endValue: 20,
          property: "translateX",
        },
        {
          startValue: 0,
          endValue: 20,
          property: "translate",
        },
        {
          startValue: 0,
          endValue: 2,
          property: "translateY",
        },
      ],
    },
  ];
  const exampleParallaxDatas = [
    {
      start: 700,
      duration: 100,
      properties: [
        {
          startValue: 100,
          endValue: 30,
          property: "translateY",
        },
        {
          startValue: 1.5,
          endValue: -20,
          property: "translateX",
        },
        {
          startValue: 0,
          endValue: 20,
          property: "translate",
        },
        {
          startValue: 0,
          endValue: 5,
          property: "translateY",
        },
      ],
    },
  ];
  return (
    <section className="app_featured_area" id="features">
      <div className="container">
        <div className="row flex-row-reverse app_feature_info">
          <div className="col-lg-6">
            <div className="app_fetured_item">
              <Plx
                className="app_item item_one"
                parallaxData={exampleParallaxData}
              >
                <i className="ti-face-smile f_size_40 w_color"></i>
                <h6 className="f_p f_400 f_size_16 w_color l_height45">
                  Solutions
                </h6>
              </Plx>
              <Plx
                className="app_item item_two"
                parallaxData={exampleParallaxDatas}
              >
                <i className="ti-receipt f_size_40 w_color"></i>
                <h6 className="f_p f_400 f_size_16 w_color l_height45">
                  Honest pricing
                </h6>
              </Plx>
              <div
                className="app_item item_three"
                data-parallax='{"x": 50, "y": 10}'
              >
                <i className="ti-face-smile f_size_40 w_color"></i>
                <h6 className="f_p f_400 f_size_16 w_color l_height45">
                  Management
                </h6>
              </div>
              <div
                className="app_item item_four"
                data-parallax='{"x": -20, "y": 50}'
              >
                <i className="ti-tablet f_size_40 w_color"></i>
                <h6 className="f_p f_400 f_size_16 w_color l_height45">
                  Enterprise
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="col-md-6">
              <div className="arond-spin text-center">
                <img
                  className="fadeInRight"
                  data-wow-delay="0.3s"
                  src={require("../../img/home-software/pie.png")}
                  alt=""
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <section>
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-6">
    //         <div className="col-lg-6">
    //           <div className="app_fetured_item">
    //             <Plx
    //               className="app_item item_one"
    //               parallaxData={exampleParallaxData}
    //             >
    //               <i className="ti-face-smile f_size_40 w_color"></i>
    //               <h6 className="f_p f_400 f_size_16 w_color l_height45">
    //                 Community
    //               </h6>
    //             </Plx>
    //             <Plx
    //               className="app_item item_two"
    //               parallaxData={exampleParallaxDatas}
    //             >
    //               <i className="ti-receipt f_size_40 w_color"></i>
    //               <h6 className="f_p f_400 f_size_16 w_color l_height45">
    //                 Honest pricing
    //               </h6>
    //             </Plx>
    //             <div
    //               className="app_item item_three"
    //               data-parallax='{"x": 50, "y": 10}'
    //             >
    //               <i className="ti-face-smile f_size_40 w_color"></i>
    //               <h6 className="f_p f_400 f_size_16 w_color l_height45">
    //                 Management
    //               </h6>
    //             </div>
    //             <div
    //               className="app_item item_four"
    //               data-parallax='{"x": -20, "y": 50}'
    //             >
    //               <i className="ti-tablet f_size_40 w_color"></i>
    //               <h6 className="f_p f_400 f_size_16 w_color l_height45">
    //                 Mobile Design
    //               </h6>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    //   <div></div>
    // </section>
  );
}
