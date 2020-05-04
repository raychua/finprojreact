import React from "react";
import "../App.css";

class TopMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="menubar">
        <div className="MenuTop">
          <div className="dropdown">
            <button className="dropbtn">Person</button>
            <div className="dropdown-content">
              <a href="#">Create New Person</a>
              <a href="#">Update Person</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopMenu;
