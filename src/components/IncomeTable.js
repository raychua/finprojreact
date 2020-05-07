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
              <td component="th">{row.name}</td>
              <td align="right">${row.grossIncome}</td>
              <td align="center">${row.netIncome}</td>
            </tr>
          );
        })}
        <tr>
          <td component="th">
            <b>Total</b>
          </td>
          <td align="right">
            <b>${displayInfo.totalGrossIncome}</b>
          </td>
          <td align="center">
            <b>${displayInfo.totalNetIncome}</b>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default IncomeTable;
