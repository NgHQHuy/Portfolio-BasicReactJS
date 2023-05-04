import React from "react";
import "./Styles/Aboutme.scss";
import { TypeAnimation } from "react-type-animation";
import avt from "../Assets/images/avatar.jpg";

class Aboutme extends React.Component {
  render() {
    let text1 = `I am currently a final year software engineering. I am looking for a place to learn and develop my abilities. I'm quite confident that I am self-disciplined, inquisitive and responsible.`;
    let text2 = `I want to start with the front-end position, to strengthen and develop my knowledge and aesthetic ability. In the long term, I will through work to learn and gain experience expanding into the back-end field and aiming for full-stack developer.`;
    let text = text1 + "\n" + text2;
    return (
      <div className="summary-content overflow-auto">
        <div className="summary-title">
          HERE IS A BRIEF INFORMATION ABOUT ME
        </div>
        <div className="summary-container container">
          <div className="summary-container-content row">
            <div className="avatar-n-name col-lg-5 col-xl-5">
              <div className="avatar">
                <img src={avt} alt="" className="avt rounded-circle" />
              </div>
              <div className="line"></div>
              <div className="name">
                <div>
                  NGUYEN HOANG QUANG HUY <br /> 09/05/2000
                </div>
              </div>
            </div>
            <div className="information col-lg-7 col-xl-7">
              <div className="hover-swipe">Hover the card bellow to flip!</div>
              <div className="card-inf">
                <div className="card-intro">
                  <TypeAnimation
                    style={{ display: "block", wordBreak: "break-all" }}
                    sequence={[`${text}`]}
                    speed={85}
                  />
                </div>
                <div className="card-edu">
                  <h1>TON DUC THANG UNIVERSITY</h1>
                  ----------------------------------
                  <br />
                  <span>GPA: 7.25/10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Aboutme;
