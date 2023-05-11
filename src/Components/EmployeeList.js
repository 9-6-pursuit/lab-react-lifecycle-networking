import React from "react";
import { useState,useEffect } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";




export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);


  useEffect(() => {
    fetch(`https://resource-veterinarian-api.fly.dev/api/employees`)
    .then((response) => response.json())
    .then((response) => {
      setEmployees(response)
    })
  },[])


  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map(el=> <Employee key={el.id} employee={el}/>)}
      </section>
    </main>
  );
};

export default EmployeeList;
