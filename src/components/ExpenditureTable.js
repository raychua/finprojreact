import React from "react";
import { withRouter } from "react-router";

function ExpenditureTable({ displayInfo }) {
  function UpdateFinRecord(finRecordId) {
    console.log("row.id", finRecordId);
    //history.push("/person/update/" + finRecordId);
  }

  return (
    <div>
      {displayInfo.people.map((person) => (
        <div>
          <div className="TableHeader"> {person.name}</div>

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
                <tr key={row.title} onClick={() => UpdateFinRecord(row.id)}>
                  <td component="th">{row.title}</td>
                  <td align="right">${row.amount}</td>
                  <td align="center">{row.category}</td>
                  <td align="center">{row.classification}</td>
                </tr>
              );
            })}
          </table>
        </div>
      ))}

      <div className="TableHeader"> Total Expenditure</div>
      <div className="TableHeader"> ${displayInfo.totalExpenditure}</div>
    </div>
  );
}

export default withRouter(ExpenditureTable);
