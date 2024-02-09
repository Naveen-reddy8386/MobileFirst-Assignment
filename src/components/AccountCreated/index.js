import { Link } from "react-router-dom";
import "./index.css";
import Header from "../Header";
import { FaArrowRightLong } from "react-icons/fa6";
import { BiBadgeCheck } from "react-icons/bi";

const AccountCreated = () => {
  return (
    <div className="container">
      <Header />
      <div className="cont">
        <div className="page">
          <BiBadgeCheck className="check" />
          <h1 className="success">Account Created Successfully</h1>
          <Link to="/home">
            <button className="create_button">
              Create your first post
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
export default AccountCreated;
