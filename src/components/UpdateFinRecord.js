import React, { useState, useEffect } from "react";
import "../App.css";
import "../DropDownMenu.css";
import axios from "../utils/axios";
import { connect } from "react-redux";
import { saveSuccess } from "../actions/Action";

function UpdateFinRecord({ saveSuccess, history, match }) {
  const [persondId, setPersonId] = useState("");
  const [peopleList, setPeopleList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Insurance");
  const [classification, setClassification] = useState("Investment");
  const [finrecord, setFinRecord] = useState({});

  useEffect(() => {
    getFinRecord();
    getPeople();
    getCategoryList();
  }, []);

  const getFinRecord = async () => {
    try {
      console.log("params:", match.params);
      const finRecordId = match.params.id;
      console.log("finRecordId:", finRecordId);
      const returnedInfo = await axios.get("/v1/finrecords/" + finRecordId);
      setFinRecord(returnedInfo.data);
      setPersonId(returnedInfo.data.personId);
      setTitle(returnedInfo.data.title);
      setAmount(returnedInfo.data.amount);
      setCategory(returnedInfo.data.category);
      setClassification(returnedInfo.data.classification);
    } catch (err) {
      alert(err);
    }
  };

  const getCategoryList = async () => {
    try {
      const returnedInfo = await axios.get("/v1/finrecords/categories");
      setCategoryList(returnedInfo.data);
    } catch (err) {
      alert(err);
    }
  };

  const getPeople = async () => {
    try {
      const returnedInfo = await axios.get("/v1/person");
      setPeopleList(returnedInfo.data);
    } catch (err) {
      alert(err);
    }
  };

  const submitFinRecord = async () => {
    try {
      await axios.put("/v1/finrecords/" + finrecord.id, {
        person: persondId,
        title: title,
        amount: amount,
        category: category,
        classification: classification,
      });
      const successObj = {
        title: "Success",
        message: title + " information is updated successfully.",
      };
      saveSuccess(successObj);
      history.push("/finrecords/success");
    } catch (err) {
      alert(err);
    }
  };

  const deleteFinRecord = async () => {
    try {
      await axios.delete("/v1/finrecords/" + finrecord.id, {
        person: persondId,
      });
      const successObj = {
        title: "Success",
        message: title + " information is deleted successfully.",
      };
      saveSuccess(successObj);
      history.push("/finrecords/success");
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
        <span className="vertalign">Update Finance Record</span>
      </div>
      <div className="Property">
        <span className="vertalign">Finance Record Owner</span>
      </div>
      <div className="Field">
        <select
          id="persondId"
          name="persondId"
          value={persondId}
          onChange={(event) => setPersonId(event.target.value)}
          onBlur={(event) => setPersonId(event.target.value)}
        >
          <option value="" disabled selected>
            Select your option
          </option>
          {peopleList.map((person) => {
            return (
              <option key={person.id} value={person.id}>
                {person.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="Property">
        <span className="vertalign">Item</span>
      </div>
      <div className="Field">
        <input
          className="inputText"
          name="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>
      <div className="Property">
        <span className="vertalign">Amount</span>
      </div>
      <div className="Field">
        <input
          className="inputText"
          name="amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </div>
      <div className="Property">
        <span className="vertalign">Category</span>
      </div>
      <div className="Field">
        <select
          id="category"
          name="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          onBlur={(event) => setCategory(event.target.value)}
        >
          <option value="" disabled selected>
            Select your option
          </option>
          {categoryList.map((category) => {
            return (
              <option key={category.category} value={category.category}>
                {category.category}
              </option>
            );
          })}
        </select>
      </div>
      <div className="Property">
        <span className="vertalign">Classification</span>
      </div>
      <div className="Field">
        <select
          id="classification"
          name="classification"
          value={classification}
          onChange={(event) => setClassification(event.target.value)}
          onBlur={(event) => setClassification(event.target.value)}
        >
          <option value="" disabled selected>
            Select your option
          </option>
          <option key="Investment" value="Investment">
            Investment
          </option>
          <option key="Expenditure" value="Expenditure">
            Expenditure
          </option>
        </select>
      </div>

      <div className="ButtonBar">
        <button className="CancelBtn" onClick={goBack}>
          Cancel
        </button>
        <button className="SubmitBtn" onClick={submitFinRecord}>
          Update
        </button>
        <button className="DeleteBtn" onClick={deleteFinRecord}>
          Delete
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  saveSuccess: (successObj) => dispatch(saveSuccess(successObj)),
});

export default connect(null, mapDispatchToProps)(UpdateFinRecord);
