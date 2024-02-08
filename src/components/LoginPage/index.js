import { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Verification from "../Verification";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";
import "./index.css";
import Header from "../Header";

class LoginPage extends Component {
  state = {
    email: "",
    name: "",
    error: false,
  };

  nameInput = (e) => {
    this.setState({ name: e.target.value });
    console.log(e.target.value);
  };
  emailInput = (e) => {
    this.setState({ email: e.target.value });
    console.log(e.target.value);
  };

  otpButton = () => {
    const { email, name } = this.state;
    if (email === "" || name === "") {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }
  };

  render() {
    const { error } = this.state;
    return (
      <div className="container">
        <Header />
        <div className="cont">
          <div className="page">
            <FaRocket className="rocket" />
            <h1 className="head">Create Your Accont</h1>
            <input
              className={error ? "input_err" : "input"}
              type="text"
              placeholder="Enter Your Name"
              onChange={this.nameInput}
            />
            {error && <p className="error">Name is required</p>}
            <input
              className={error ? "input_err" : "input"}
              type="text"
              placeholder="Enter Email Id"
              onChange={this.emailInput}
            />
            {error && <p className="error">Email ID is required</p>}
            <Link to="/verification">
              <button onClick={this.otpButton} className="create_button">
                Continue
                <span>
                  <FaArrowRightLong className="arrow" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginPage;
