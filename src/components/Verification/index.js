import { Link } from "react-router-dom";
import { FaRocket } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Header from "../Header";
import AccountCreated from "../AccountCreated";
import "./index.css";

const Verification = () => {
  return (
    <div className="container">
      <Header />
      <div className="cont">
        <div className="page">
          <FaRocket className="rocket" />
          <h1 className="head">Create Your Accont</h1>
          <p className="verify_cont">
            Please verify your email ID to continue. We have sent an OTP to this
            email.
          </p>
          <input className="input" type="text" placeholder="Enter OTP" />
          <Link to="/account">
            <button className="create_button">
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
};
export default Verification;
