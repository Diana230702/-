import React, { useState } from "react";

const Salary = (props) => {
  console.log(props.salary);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name:</th>
            <th>surname:</th>
            <th>Days:</th>
            <th>SalaryPerDay:</th>
            <th>Salary:</th>
          </tr>
          {props.salary.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.surname}</td>

              <td>
                <input type="text" defaultValue={item.days} />
              </td>
              <td>
                <input type="text" defaultValue={item.salaryPerDay} />
              </td>
              <td>{item.days * item.salaryPerDay}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Salary;
