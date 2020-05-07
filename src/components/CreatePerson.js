import React, { useState } from "react";
import "../App.css";
import axios from "../utils/axios";
import { connect } from "react-redux";
import { saveSuccess } from "../actions/Action";

function CreatePerson({ saveSuccess, history }) {
  const [name, setName] = useState("");
  const [grossIncome, setGrossIncome] = useState("");
  const [netIncome, setNetIncome] = useState("");

  const submitPerson = async () => {
    try {
      await axios.post("/v1/person", {
        name: name,
        grossIncome: grossIncome,
        netIncome: netIncome,
      });
      const successObj = {
        title: "Success",
        message: name + " information is created successfully.",
      };
      saveSuccess(successObj);
      history.push("/person/success");
    } catch (err) {
      alert(err);
    }
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="EntryBox">
      <div className="TitleBar">
        <span className="vertalign">Create a new Person</span>
      </div>
      <div className="Property">
        <span className="vertalign">Name</span>
      </div>
      <div className="Field">
        <input
          className="inputText"
          name="name"
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="Property">
        <span className="vertalign">Gross Income</span>
      </div>
      <div className="Field">
        <input
          className="inputText"
          name="grossIncome"
          onChange={(event) => setGrossIncome(event.target.value)}
        />
      </div>
      <div className="Property">
        <span className="vertalign">Net Income</span>
      </div>
      <div className="Field">
        <input
          className="inputText"
          name="netIncome"
          onChange={(event) => setNetIncome(event.target.value)}
        />
      </div>
      <div className="ButtonBar">
        <button className="CancelBtn" onClick={goBack}>
          Cancel
        </button>
        <button className="SubmitBtn" onClick={submitPerson}>
          Submit
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  saveSuccess: (successObj) => dispatch(saveSuccess(successObj)),
});

export default connect(null, mapDispatchToProps)(CreatePerson);
