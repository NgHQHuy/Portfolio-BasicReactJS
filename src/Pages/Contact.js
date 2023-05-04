import React from "react";
import "./Styles/Contact.scss";
import { useNavigate } from "react-router-dom";

function withNavigate(Component) {
  return (props) => <Component {...props} navigate={useNavigate()} />;
}

class Contact extends React.Component {
  render() {
    return (
      <div className="contact-content">
        <div className="contact-title">CONTACT</div>
        <div className="contact-container">
          <div className="basic-contact row">
            <div className="phone">
              <i className="bi bi-telephone-fill"></i>
              0911077615
            </div>
            <div className="email">
              <i className="bi bi-envelope-fill"></i>
              nguyenhoangquanghuy2000@gmail.com
            </div>
            <div className="address">
              <i className="bi bi-house-door-fill"></i>
              New Saigon Apaartment, Phuoc Kien, Nha Be, Ho Chi Minh
            </div>
          </div>
          <div className="social-contact row">
            <a
              className="facebook"
              target="blank"
              href="https://www.facebook.com/profile.php?id=100005325062850"
            >
              <button>
                <i className="fa fa-facebook"></i>
              </button>
            </a>
            <a
              className="instagram"
              target="blank"
              href="https://www.instagram.com/hy.11101000011011000000"
            >
              <button>
                <i className="fa fa-instagram"></i>
              </button>
            </a>
            <a
              className="github"
              target="blank"
              href="https://github.com/NgHQHuy"
            >
              <button>
                <i className="fa fa-github"></i>
              </button>
            </a>
            <a
              className="twitter"
              target="blank"
              href="https://twitter.com/luce_gloriosa"
            >
              <button>
                <i className="fa fa-twitter"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default withNavigate(Contact);
