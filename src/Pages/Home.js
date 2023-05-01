import React from "react";
import "./Styles/Home.scss";
import { toast } from "react-toastify";
import nextIcon from "./Styles/icons/move-to-next.png";
import { useNavigate } from "react-router-dom";

function withNavigate(Component) {
  return (props) => <Component {...props} navigate={useNavigate()} />;
}

class Home extends React.Component {
  state = {
    name: "",
  };

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnClick = () => {
    if (this.state.name) {
      toast.success("Let's go! " + this.state.name);
      this.props.navigate("/aboutme");
    } else {
      toast.warning("So... Let's go! Mr Unknown");
      this.props.navigate("/aboutme");
    }
  };

  render() {
    return (
      <div className="main-content">
        <div className="main-content-items">
          <div className="welcome">WELCOME</div>
          <div className="guest-name">
            <div className="ask-name">May I know your name?</div>
            <div className="input-and-next">
              <input
                className="input-name"
                type="text"
                placeholder="Type here. (max 30 characters)"
                value={this.state.name}
                onChange={(event) => this.handleOnChange(event)}
                maxLength={30}
              />
              <button className="next" onClick={() => this.handleOnClick()}>
                <img src={nextIcon} alt="" />
              </button>
            </div>
          </div>
          <div className="hi-guest">
            Oh! Hi,
            <br />
            <span className="guest-name-appear"> {this.state.name}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withNavigate(Home);
