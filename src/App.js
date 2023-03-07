import React, { useState } from "react";
import Counter from "./components/Counter";
import Paragraph from "./components/Paragraph";
import RendParag from "./components/RendParag";
import Salary from "./components/Salary";

const App = () => {
  let [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);

  const decrement = () => setCounter(counter - 1);

  let [par, setPar] = useState([]);

  const handlePar = (newObj) => {
    let newPar = [...par];
    newPar.push(newObj);
    setPar(newPar);
  };

  let employees = [
    {
      name: "SALAMAT",
      surname: "BAIKE",
      days: 20,
      salaryPerDay: 80,
      id: Date.now(),
    },
    {
      name: "Dastan",
      surname: "aaa",
      days: 15,
      salaryPerDay: 40,
      id: Date.now(),
    },
    {
      name: "Emir",
      surname: "bbb",
      days: 22,
      salaryPerDay: 60,
      id: Date.now(),
    },
    {
      name: "Sheraman",
      surname: "ccc",
      days: 15,
      salaryPerDay: 55,
      id: Date.now(),
    },
    {
      name: "Albina",
      surname: "kkk",
      days: 18,
      salaryPerDay: 44,
      id: Date.now(),
    },
    {
      name: "Azret",
      surname: "hhh",
      days: 10,
      salaryPerDay: 22,
      id: Date.now(),
    },
    {
      name: "Mirdin",
      surname: "Agai",
      days: 20,
      salaryPerDay: 70,
      id: Date.now(),
    },
    {
      name: "Bayish",
      surname: "zzz",
      days: 16,
      salaryPerDay: 33,
      id: Date.now(),
    },
    {
      name: "Adilet",
      surname: "Gazybekov",
      days: 11,
      salaryPerDay: 16,
      id: Date.now(),
    },
    {
      name: "Aidana",
      surname: "pppp",
      days: 5,
      salaryPerDay: 28,
      id: Date.now(),
    },
  ];

  let [salary, setSalary] = useState(employees);

  return (
    <div>
      <Counter decrement={decrement} increment={increment} counter={counter} />
      <Paragraph handlePar={handlePar} />
      <RendParag par={par} />
      <Salary salary={salary} />
    </div>
  );
};

export default App;
