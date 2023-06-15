import React from "react";
import { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {

  const [empolyees, setEmpolyees] = useState([])

  useEffect(()=> {
    fetch(`https://resource-veterinarian-api.fly.dev/api/employees`)
    .then((response)=>response.json())
    .then((response)=>{
      setEmpolyees(response)
    })

  }, [])


  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {empolyees.map(employee => {
          return (<Employee key={employee.id} employee={employee} />
          )
        })}
        
      </section>
    </main>
  );
};

// when this component is rendered line 10 - 19 will display on our page
// everything BEFORE will run 
// Use effect is a method, it takes some paramaters, the first it takes is a function
// Use effect will happen the first time the Employee list component is rendered
// consol.log to review on the inspect tools:
// useEffect(()=> {
//   fetch(`https://resource-veterinarian-api.fly.dev/api/employees`)
//   .then((response)=>response.json())
//   .then((response)=>{
//     console.log("It worked")
//     console.log(response)
//   })

// })

// Once we checked then create a state because the values will change when rendered 
// then set the response to setEmployee instead of console.log
// Then go into the render area, bc we want to SEE five cards on the screen
export default EmployeeList;
