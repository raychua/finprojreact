import React from "react";
import "./ExpenditureTable.css";
import { withRouter } from "react-router";

function ExpenditureTable({ displayInfo, history }) {
  function UpdateFinRecord(finRecordId) {
    console.log("row.id", finRecordId);
    history.push("/finrecord/update/" + finRecordId);
  }

  return (
    <div>
      {displayInfo.people.map((person) => (
        <div>
          <div className="TableHeader"> {person.name}</div>
          <div className="tableRoundCorners">
            <table>
              <tr>
                <th>
                  <b>Item</b>
                </th>
                <th align="right">
                  <b>Amount</b>
                </th>
                <th align="center">
                  <b>Category</b>
                </th>
                <th align="center">
                  <b>Classification</b>
                </th>
              </tr>

              {displayInfo[person.name].map((row) => {
                console.log("row", row);
                return (
                  <tr
                    key={row.title}
                    onClick={() => UpdateFinRecord(row.id)}
                    className="expenditureRow"
                  >
                    <td component="th" align="left">
                      {row.title}
                    </td>
                    <td align="right">${row.amount.toFixed(2)}</td>
                    <td align="left">{row.category}</td>
                    <td align="center">{row.classification}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      ))}

      <div className="TableHeader"> Total Expenditure</div>
      <div className="TableHeader">
        $
        {displayInfo.totalExpenditure
          ? displayInfo.totalExpenditure.toFixed(2)
          : displayInfo.totalExpenditure}
      </div>
    </div>
  );
}

export default withRouter(ExpenditureTable);
