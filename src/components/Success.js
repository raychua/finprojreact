import React from "react";
import "../App.css";
import { connect } from "react-redux";

function Success({ successObj, displayInfoObj, history }) {
  const goHome = () => {
    history.push("/home");
  };
  console.log("displayInfoObj", displayInfoObj);

  return (
    <div className="EntryBox">
      <div className="TitleBar">
        <span className="vertalign">{successObj.title}</span>
      </div>
      <div className="MessageBox">
        <span className="vertalign">{successObj.message}</span>
      </div>
      <div className="ButtonBar">
        <button className="SubmitBtn" onClick={goHome}>
          OK
        </button>
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    successObj: state.reducer.success,
  };
};

export default connect(mapStatetoProps)(Success);
