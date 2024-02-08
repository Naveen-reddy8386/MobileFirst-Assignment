import { Link } from "react-router-dom";
import "./index.css";
import Header from "../Header";
import { FaRocket } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import LoginPage from "../LoginPage";

const FirstPage = () => {
  const toLoginPage = () => {
    return <LoginPage />;
  };

  return (
    <div className="container">
      <Header />
      <div className="inner">
        <div className="users">
          <FaRocket className="rocket" />
          <p className="indian">Only for Indian Users</p>
        </div>
        <h1 className="main_con">
          Start posting anonymously where no one will judge.
        </h1>
        <p className="welcome">Welcome to Stranger discussion forum</p>
        <Link to="/loginpage">
          <button onClick={toLoginPage} className="create_button">
            Create Your Account
            <span>
              <FaArrowRightLong className="arrow" />
            </span>
          </button>
        </Link>

        <p className="have_acc">
          Already have account? <span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default FirstPage;
