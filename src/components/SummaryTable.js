import React from "react";

function SummaryTable({ displayInfo }) {
  return (
    <div>
      <table>
        <tr>
          <th>
            <b>Category</b>
          </th>
          <th align="right">
            <b>Amount</b>
          </th>
          <th align="center">
            <b>Percentage</b>
          </th>
        </tr>

        {displayInfo.categoryExpenditures.map((row) => {
          console.log("row", row);
          return (
            <tr key={row.title}>
              <td component="th">{row.category}</td>
              <td align="right">${row.totalAmount}</td>
              <td align="center">{row.percentage}%</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default SummaryTable;
