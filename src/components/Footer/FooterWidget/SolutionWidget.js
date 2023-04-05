import React, { Component } from "react";
import Reveal from "react-reveal/Reveal";
class SolutionWidget extends Component {
  render() {
    let FooterData = this.props.FooterData;
    var { ftitle } = this.props;
    return (
      <Reveal effect="fadeInUp" duration={1400}>
        <div className="col-lg-5 col-md-6">
          <div
            className="f_widget about-widget pl_70 wow fadeInLeft"
            data-wow-delay="0.4s"
          >
            <h3 className="f-title f_600 t_color f_size_18 mb_40">{ftitle}</h3>
            <div className="row">
              <div className="col-lg-6">
                <ul className="list-unstyled f_list">
                  {FooterData.Solution.map((item) => {
                    return (
                      <li key={item.id}>
                        <a href="/">{item.text}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="list-unstyled f_list">
                  <li>
                    <a href="/Home-ERP">Solutions</a>
                  </li>
                  <li>
                    <a href="/Home-ERP">Enterprise</a>
                  </li>
                  <li>
                    <a href="/Home-ERP">Pricing</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* second box */}
          <div
            className="f_widget about-widget pl_70 wow fadeInLeft mt-4"
            data-wow-delay="0.4s"
          >
            <h3 className="f-title f_600 t_color f_size_18 mb_40">Niche</h3>
            <div className="row">
              <div className="col-lg-6">
                <ul className="list-unstyled f_list">
                  {FooterData.Niche.map((item) => {
                    return (
                      <li key={item.id}>
                        <a href="/">{item.text}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="list-unstyled f_list">
                  {FooterData.NicheTwo.map((item) => {
                    return (
                      <li key={item.id}>
                        <a href="/">{item.text}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          {/* second box close */}
        </div>
      </Reveal>
    );
  }
}

export default SolutionWidget;
