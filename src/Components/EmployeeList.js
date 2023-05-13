import React from "react";
import { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";


export const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://resource-veterinarian-api.fly.dev/api/employees`)
      .then((response) => {
        if (!response.ok) { 
          setError('response not work'); 
          return; 
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          setEmployees(data);
          setError(null);
        }
      })
      .catch((err) => {
        setError('problem fetch ' + err);
      });
  }, [])
  

  return (
    <main>
      <h2>All Staff</h2>
      {error && <p className="error">{error}</p>}
      <section className="employee-list">
        {employees.map(employee => {
          return (
            <Employee key={employee.id} employee={employee}/>
          )
        })}
      </section>
    </main>
  );
};

export default EmployeeList;
