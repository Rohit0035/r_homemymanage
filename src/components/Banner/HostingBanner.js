import React from "react"
import Fade from "react-reveal/Fade"
const HostingBanner = () => {
  return (
    <section className='hosting_banner_area'>
      <Fade bottom cascade>
        <ul className='list-unstyled b_line'>
          <li className='wow fadeInUp' data-wow-delay='0.4s'>
            <img src={require("../../img/hosting/line_01.png")} alt='' />
          </li>
          <li className='wow fadeInUp' data-wow-delay='0.7s'>
            <img src={require("../../img/hosting/line_02.png")} alt='' />
          </li>
          <li className='wow fadeInUp' data-wow-delay='0.9s'>
            <img src={require("../../img/hosting/line_03.png")} alt='' />
          </li>
          <li className='wow fadeInUp' data-wow-delay='1.2s'>
            <img src={require("../../img/hosting/line_04.png")} alt='' />
          </li>
          <li className='wow fadeInUp' data-wow-delay='0.4s'>
            <img src={require("../../img/hosting/line_05.png")} alt='' />
          </li>
          <li className='wow fadeInUp' data-wow-delay='1s'>
            <img src={require("../../img/hosting/line_06.png")} alt='' />
          </li>
          <li className='wow fadeInUp' data-wow-delay='1s'>
            <img src={require("../../img/hosting/line_07.png")} alt='' />
          </li>
          <li className='wow fadeInUp' data-wow-delay='1.3s'>
            <img src={require("../../img/hosting/line_08.png")} alt='' />
          </li>
        </ul>
      </Fade>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-7 d-flex align-items-center'>
            <div className='hosting_content'>
              <h2 className='wow fadeInUp' data-wow-delay='0.3s'>
                Shop Detail With Manager
              </h2>
              <p className='wow fadeInUp' data-wow-delay='0.5s'>
                Mymanager is your all in one platform that will eliminate the need to use multiple
                SaaS products. Switch from productivity loss to meeting the newest member of your
                team — Your Manager
              </p>
              <a
                href='https://me.mymanager.com/login'
                className='btn_get btn_hover new_btn'
                data-wow-delay='0.7s'
              >
                Try Mymanager
              </a>
            </div>
          </div>
          <div className='col-lg-6 col-md-5'>
            <img
              className='img-fluid wow fadeInRight'
              data-wow-delay='0.7s'
              src={require("../../img/hosting/shop-img.jpg")}
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  )
}
export default HostingBanner
