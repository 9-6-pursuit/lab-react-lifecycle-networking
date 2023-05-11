import React from "react";
import { useState, useEffect } from "react";

import Employee from "./Employee";
import "./EmployeeList.css";


export const EmployeeList = () => {

  const [employees, setEmployees] = useState([])

  useEffect(()=> {
    fetch(`https://resource-veterinarian-api.fly.dev/api/employees`)
    .then((response) => response.json())
    .then((response) => {
   
      setEmployees(response)
    })
    .catch((error) => console.error(error))
  }, [])

  // BASE_URL = https://resource-veterinarian-api.fly.dev/api
  // Get all employees: `${BASE_URL}/employees`
  // Get a single employee: `${BASE_URL}/employees/${employee.id}`
  // Get all pets: `${BASE_URL}/api/pets`
  // Get all pets assigned to an employee: `${BASE_URL}/api/pets?employeeId=${employee.id}`



  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map(employee => {
          return (
            <Employee 
            key = {employee.id}
            employee = {employee}
            />
            )
          })}
      </section>
    </main>
  );
};

export default EmployeeList;
