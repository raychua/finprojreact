import React, { useEffect, useState } from "react";
import "../App.css";
import "./MainDisplay.css";
import { connect } from "react-redux";
import { saveFinRecordId } from "../actions/Action";
import ExpenditureTable from "./ExpenditureTable";
import SummaryTable from "./SummaryTable";
import IncomeTable from "./IncomeTable";
import SavingsTable from "./SavingsTable";
import axios from "../utils/axios";
import { Doughnut } from "react-chartjs-2";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function MainDisplay({ saveFinRecordId, history }) {
  const [displayInfo, setDisplayInfo] = useState({
    people: [],
    categoryExpenditures: [],
  });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    mainDisplay();
    setTimeout(() => {
      setIsLoaded(true);
    }, 1);
  }, []);

  const mainDisplay = async () => {
    try {
      const returnedInfo = await axios.get("/v1/finrecords");
      setDisplayInfo(returnedInfo.data);
    } catch (err) {
      alert(err);
    }
  };

  const data = {
    labels: ["Expenditure", "Investment"],
    datasets: [
      {
        data: [
          displayInfo.expenditure
            ? displayInfo.expenditure.toFixed(2)
            : displayInfo.expenditure,
          displayInfo.investment,
        ],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  return (
    <div>
      {!isLoaded ? (
        <Loader />
      ) : (
        <section className="container">
          <div className="leftside"></div>
          <div className="line1">
            <div className="ExpenditureDetailsHeader"> Income & Savings</div>
            <div className="TableHeader"> Income</div>
            <IncomeTable displayInfo={displayInfo} />
            <div className="TableHeader"> Savings</div>
            <SavingsTable displayInfo={displayInfo} />
          </div>
          <div className="line2">
            <div className="ExpenditureDetailsHeader"> Expenditure Details</div>
            <ExpenditureTable displayInfo={displayInfo} />
          </div>
          <div className="line3">
            <div className="ExpenditureDetailsHeader"> Overall Summary</div>
            <div className="ExpenditureRatio">
              <div className="h1"> Expenditure/Investment Ratio</div>
              <div>
                <Doughnut data={data} />
              </div>
            </div>
            <div className="VerticalSpacer"> </div>
            <div className="TableHeader"> Expenditure Category Breakdown</div>
            <div>
              <SummaryTable displayInfo={displayInfo} />
            </div>
          </div>
          <div className="rightside"></div>
        </section>
      )}
    </div>
  );
}

const mapStatetoProps = (state) => {
  return { displayInfoObj: state.reducer.displayInfoObj };
};
const mapDispatchToProps = (dispatch) => ({
  saveFinRecordId: (finRecordId) => dispatch(saveFinRecordId(finRecordId)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(MainDisplay);
