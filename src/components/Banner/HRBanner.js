import React from 'react';
import Reveal from 'react-reveal/';
const HRBanner =() =>{
    return(
        <section className="startup_banner_area_three">
            <div className="container">
                <div className='box-content'>
                    <div className="row">
                        <div className="col-lg-6">
                        <Reveal bottom cascade duration={1100}>
                            <div className="startup_content_three">
                                <h2><span>THE EASIEST WAY TO </span><br></br>
                                <span className='st-2'>ANIMATION</span>
                                </h2>
                                <p>Download free alpha videos</p>
                                {/* <a href=".#" className="btn_six slider_btn">Get Started</a>
                                <a href="https://www.youtube.com/watch?v=sU3FkzUKHXU" className="popup-youtube btn_six slider_btn"><i className="fa fa-play-circle"></i>Watch Video</a> */}
                            
                            </div>
                            </Reveal>
                        </div>
                        <div className="col-lg-6">
                            <div className='box-img'>
                            <img className="phone" src={require('../../img/new/0222.png')} alt="" />
                            </div>
                            {/* <div className="stratup_app_screen">
                                <Reveal effect="slideInnew"><img className="phone" src={require('../../img/new/0222.png')} alt=""/></Reveal>
                                <Reveal effect="slideInnew"><img className="laptop" src={require('../../img/new/0111.png')} alt=""/></Reveal>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HRBanner;