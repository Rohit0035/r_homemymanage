import React, { Component } from "react";
import VideoLooper from "react-video-looper";
import shop_one from "../../img/videolist/shop-v1.mp4";
// import shop_two from "../../img/videolist/shop-v2.mp4";
class HostingFeaturesItemTwo extends Component {
  render() {
    let {
      rowClass,
      hImage,
      hTitle,
      hPragraph,
      icon,
      icon2,
      text,
      text2,
      tdescription,
      tdescription2,
    } = this.props;
    return (
      <div className={`row ${rowClass}`}>
        <div className="col-lg-6">
          <div className="h_features_img">
            <VideoLooper
              source={shop_one}
              start={4.31}
              end={9.48}
              height="500px"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="h_features_content">
            <div className="hosting_title">
              <h2>{hTitle}</h2>
              <p>{hPragraph}</p>
            </div>
            <div className="media h_features_item">
              <img src={require("../../img/hosting/" + icon)} alt="" />
              <div className="media-body">
                <h4 className="h_head">{text}</h4>
                <p>{tdescription}</p>
              </div>
            </div>
            <div className="media h_features_item">
              <img src={require("../../img/hosting/" + icon2)} alt="" />
              <div className="media-body">
                <h4 className="h_head">{text2}</h4>
                <p>{tdescription2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HostingFeaturesItemTwo;
