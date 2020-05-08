import React from "react";
import { Bar } from "react-chartjs-2";

function SavingsTable({ displayInfo }) {
  let data = {
    labels: [],
    //labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Savings",
        backgroundColor: "rgba(255,99,132)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [],
      },
    ],
  };
  return (
    <div>
      <table>
        <tr>
          <th>
            <b>Person</b>
          </th>
          <th align="right">
            <b>Amount</b>
          </th>
          <th align="center">
            <b>Percentage</b>
          </th>
        </tr>

        {displayInfo.people.map((row) => {
          console.log("row", row);

          data.labels.push(row.name);
          data.datasets[0].data.push(row.savings);
          return (
            <tr key={row.title}>
              <td component="th" align="left">
                {row.name}
              </td>
              <td align="right">${row.savings.toFixed(2)}</td>
              <td align="right">{row.savingsPercent}%</td>
            </tr>
          );
        })}
        <tr>
          <td component="th" align="left">
            <b>Total</b>
          </td>
          <td align="right">
            <b>
              $
              {displayInfo.savings
                ? displayInfo.savings.toFixed(2)
                : displayInfo.savings}
            </b>
          </td>
          <td align="right">
            <b>{displayInfo.savingsPercent}%</b>
          </td>
        </tr>
      </table>

      <div className="ExpenditureRatio">
        <div className="h1">Monthly Savings</div>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    </div>
  );
}

export default SavingsTable;
