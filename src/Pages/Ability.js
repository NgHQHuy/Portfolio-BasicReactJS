import React from "react";
import "./Styles/Ability.scss";

class Ability extends React.Component {
  state = {
    fe: false,
    opl: false,
    snt: false,
    sk: false,
    lg: false,
    other: false,
  };
  handleOnClickFE = () => {
    this.setState({
      fe: !this.state.fe,
    });
    let btnFe = document.querySelector(".btn-fe");
    if (!this.state.fe) {
      btnFe.classList.add("btn-fe-actived");
    } else {
      btnFe.classList.remove("btn-fe-actived");
    }
  };
  handleOnClickOpl = () => {
    this.setState({
      opl: !this.state.opl,
    });
    let btnOpl = document.querySelector(".btn-opl");
    if (!this.state.opl) {
      btnOpl.classList.add("btn-opl-actived");
    } else {
      btnOpl.classList.remove("btn-opl-actived");
    }
  };
  handleOnClickSnt = () => {
    this.setState({
      snt: !this.state.snt,
    });
    let btnSnt = document.querySelector(".btn-snt");
    if (!this.state.snt) {
      btnSnt.classList.add("btn-snt-actived");
    } else {
      btnSnt.classList.remove("btn-snt-actived");
    }
  };
  handleOnClickSk = () => {
    this.setState({
      sk: !this.state.sk,
    });
    let btnSk = document.querySelector(".btn-sk");
    if (!this.state.sk) {
      btnSk.classList.add("btn-sk-actived");
    } else {
      btnSk.classList.remove("btn-sk-actived");
    }
  };
  handleOnClickLg = () => {
    this.setState({
      lg: !this.state.lg,
    });
    let btnLg = document.querySelector(".btn-lg");
    if (!this.state.lg) {
      btnLg.classList.add("btn-lg-actived");
    } else {
      btnLg.classList.remove("btn-lg-actived");
    }
  };
  handleOnClickOther = () => {
    this.setState({
      other: !this.state.other,
    });
    let btnOth = document.querySelector(".btn-other");
    if (!this.state.other) {
      btnOth.classList.add("btn-other-actived");
    } else {
      btnOth.classList.remove("btn-other-actived");
    }
  };
  render() {
    return (
      <div className="ability-content">
        <div className="ability-title">
          CHOOSE <span>THE BUTTONS BELLOW</span> TO SEE!
        </div>
        <div className="ability-container">
          <div className="skill-btn front-end">
            <button className="btn-fe" onClick={() => this.handleOnClickFE()}>
              Front-end
            </button>
            {this.state.fe && (
              <div className="skill-content fe-content">
                HTML, CSS, Bootstrap, Javascript, ReactJs
              </div>
            )}
          </div>
          <div className="skill-btn other-programming-language">
            <button className="btn-opl" onClick={() => this.handleOnClickOpl()}>
              Other programming languages
            </button>
            {this.state.opl && (
              <div className="skill-content other-pl-content">
                Used to word with C#, Java, Python
              </div>
            )}
          </div>
          <div className="skill-btn softrware">
            <button className="btn-snt" onClick={() => this.handleOnClickSnt()}>
              Software and tool
            </button>
            {this.state.snt && (
              <div className="skill-content software-content">
                Adobe Photoshop, Figma, Microsoft SQL Server
              </div>
            )}
          </div>
          <div className="skill-btn support-knowledge">
            <button className="btn-sk" onClick={() => this.handleOnClickSk()}>
              Supporting knowledge
            </button>
            {this.state.sk && (
              <div className="skill-content sp-knowledge-content">
                UX-UI, Design Patterns
              </div>
            )}
          </div>
          <div className="skill-btn language">
            <button className="btn-lg" onClick={() => this.handleOnClickLg()}>
              Language
            </button>
            {this.state.lg && (
              <div className="skill-content language-content">
                Basic English with Toeic 565
              </div>
            )}
          </div>
          <div className="skill-btn other">
            <button
              className="btn-other"
              onClick={() => this.handleOnClickOther()}
            >
              Other
            </button>
            {this.state.other && (
              <div className="skill-content other-content">
                self-study, creative, problem analysis, logical thinking
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Ability;
