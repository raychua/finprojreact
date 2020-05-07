import React from "react";
import "../App.css";
import TopMenu from "./TopMenu";

class FinancialProjectApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="Whole">
          <TopMenu />
        </div>
      </div>
    );
  }
}

export default FinancialProjectApp;
