import React from "react";
import "../App.css";
import "./Person.css";
import axios from "../utils/axios";

class CreatePerson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      grossIncome: 0,
      netIncome: 0,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  submitPerson = async () => {
    try {
      console.log("this.state.name", this.state.name);
      const res = await axios.post("/v1/person", {
        name: this.state.name,
        grossIncome: this.state.grossIncome,
        netIncome: this.state.netIncome,
      });
    } catch (err) {
      alert(err);
    }
  };

  render() {
    return (
      <div className="Person">
        <div className="PersonTitle">Create a new Person</div>
        <div className="PersonProperty">Name</div>
        <div className="PersonField">
          <input
            className="inputText"
            name="name"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="PersonProperty">Gross Income</div>
        <div className="PersonField">
          <input
            className="inputText"
            name="grossIncome"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="PersonProperty">Net Income</div>
        <div className="PersonField">
          <input
            className="inputText"
            name="netIncome"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="ButtonBar">
          <button className="CancelBtn">Cancel</button>
          <button className="SubmitBtn" onClick={this.submitPerson}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default CreatePerson;
