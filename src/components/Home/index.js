import { Component } from "react";
import Header from "../Header";
import "./index.css";

class Home extends Component {
  state = {};

  allPost() {
    return <h1>All Post(0)</h1>;
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="post_container">
          <div className="buttons_container">
            <button className="post_button b1">All Post</button>
            <button className="post_button b2">Commented Post</button>
            <button className="post_button b3">Replied Post</button>
          </div>
          <div className="post">{this.allPost()}</div>
        </div>
      </div>
    );
  }
}
export default Home;
