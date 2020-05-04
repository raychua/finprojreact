import React from "react";
import "../App.css";
import TopMenu from "./TopMenu";
import CreatePerson from "./CreatePerson";

class FinancialProjectApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="TopMenu">
          <TopMenu />
        </div>
        <div>
          <CreatePerson />
        </div>
      </div>
    );
  }
}

export default FinancialProjectApp;
