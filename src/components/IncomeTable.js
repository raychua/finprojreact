import React from "react";

function IncomeTable({ displayInfo }) {
  return (
    <div>
      <table>
        <tr>
          <th>
            <b>Person</b>
          </th>
          <th align="right">
            <b>Gross Income</b>
          </th>
          <th align="center">
            <b>Net Income</b>
          </th>
        </tr>

        {displayInfo.people.map((row) => {
          console.log("row", row);
          return (
            <tr key={row.title}>
              <td component="th" align="left">
                {row.name}
              </td>
              <td align="right">${row.grossIncome.toFixed(2)}</td>
              <td align="right">${row.netIncome.toFixed(2)}</td>
            </tr>
          );
        })}
        <tr>
          <td component="th">
            <b>Total</b>
          </td>
          <td align="right">
            <b>
              $
              {displayInfo.totalGrossIncome
                ? displayInfo.totalGrossIncome.toFixed(2)
                : displayInfo.totalGrossIncome}
            </b>
          </td>
          <td align="right">
            <b>
              $
              {displayInfo.totalNetIncome
                ? displayInfo.totalNetIncome.toFixed(2)
                : displayInfo.totalNetIncome}
            </b>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default IncomeTable;
