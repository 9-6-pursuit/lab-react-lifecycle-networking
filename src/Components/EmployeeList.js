import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";
import { useState, useEffect } from "react";
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
  return (<main>
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
  )
};

export default EmployeeList;
