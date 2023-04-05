import React from "react"
import ReactBeforeSliderComponent from "react-before-after-slider-component"
import "react-before-after-slider-component/dist/build.css"
import "../../assets/comparison.css"

export default function CompireSlide() {
  const FIRST_IMAGE = {
    imageUrl: "https://gymdesk.com/images/lp/comparison/mindbody-members.png",
  };
  const SECOND_IMAGE = {
    imageUrl: "https://gymdesk.com/images/lp/comparison/maonrails-members.png",
  };
  // const delimiterIconStyles = {
  //   width: "50px",
  //   height: "50px",
  //   backgroundSize: "cover",
  //   borderRadius: "none",
  //   backgroundImage: "url(<dff>)",
  // };

  return (
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='laptop-frame mt-5'>
              <ReactBeforeSliderComponent
                className='test'
                firstImage={FIRST_IMAGE}
                secondImage={SECOND_IMAGE}
                // style={delimiterIconStyles}
              />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='lap-content mt-5'>
              <h2 className='f_p f_size_30 f_700 t_color3 l_height45  mb-30'>
                Easy To Use Member Management
              </h2>
              <p>
                Spot issues quickly without being overwhelmed. Address expiring memberships, overdue
                payments and missing waivers with ease on your laptop or mobile device.
              </p>
              <p>
                Spot issues quickly without being overwhelmed. Address expiring memberships, overdue
                payments and missing waivers with ease on your laptop or mobile device.
              </p>
              <div
                className='action_btn d-flex align-items-centerwow fadeInRight'
                data-wow-delay='0.6s'
              >
                <a href='https://me.mymanager.com/login' className='er_btn er_btn_two '>
                  Try Mymanager <i className='ti-arrow-right'></i>
                </a>
              </div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='lap-content mt-5'>
              <h2 className='f_p f_size_30 f_700 t_color3 l_height45  mb-30'>
                Easy To Use Member Management
              </h2>
              <p>
                Spot issues quickly without being overwhelmed. Address expiring memberships, overdue
                payments and missing waivers with ease on your laptop or mobile device.
              </p>
              <p>
                Spot issues quickly without being overwhelmed. Address expiring memberships, overdue
                payments and missing waivers with ease on your laptop or mobile device.
              </p>
              <div
                className='action_btn d-flex align-items-center mt_40 wow fadeInRight'
                data-wow-delay='0.6s'
              >
                <a href='https://me.mymanager.com/login' className='er_btn er_btn_two'>
                  Try Mymanager <i className='ti-arrow-right'></i>
                </a>
              </div>
            </div>
          </div>

          <div className='col-md-6'>
            <div className='laptop-frame mt-5'>
              <ReactBeforeSliderComponent
                className='test'
                firstImage={FIRST_IMAGE}
                secondImage={SECOND_IMAGE}
                // delimiterColor={delimiterIconStyles}
              />
            </div>
          </div>

          <div className='col-md-6'>
            <div className='laptop-frame mt-5'>
              <ReactBeforeSliderComponent
                className='test'
                firstImage={FIRST_IMAGE}
                secondImage={SECOND_IMAGE}
                // delimiterColor={delimiterIconStyles}
              />
            </div>
          </div>

          <div className='col-md-6'>
            <div className='lap-content mt-5'>
              <h2 className='f_p f_size_30 f_700 t_color3 l_height45  mb-30'>
                Easy To Use Member Management
              </h2>
              <p>
                Spot issues quickly without being overwhelmed. Address expiring memberships, overdue
                payments and missing waivers with ease on your laptop or mobile device.
              </p>
              <p>
                Spot issues quickly without being overwhelmed. Address expiring memberships, overdue
                payments and missing waivers with ease on your laptop or mobile device.
              </p>
              <div
                className='action_btn d-flex align-items-center mt_40 wow fadeInRight'
                data-wow-delay='0.6s'
              >
                <a href='https://me.mymanager.com/login' className='er_btn er_btn_two'>
                  Try Mymanager <i className='ti-arrow-right'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
