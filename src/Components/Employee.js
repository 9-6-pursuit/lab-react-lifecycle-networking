import React from "react";
import { useState,useEffect } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({employee}) => {
  const [pets, setpets] = useState([]);
  const [showButton, setShowButton] = useState(false);


  const handleShowBtn = () => {
    setShowButton(!showButton)
  }

  useEffect(() => {
    fetch(`https://resource-veterinarian-api.fly.dev/api/pets?employeeId=${employee.id}`)
    .then((response) => response.json())
    .then((response) => {
      setpets(response)
    })
  },[employee.id])

 

  return (
    <article className="employee">
      <h3>
        {`${employee.prefix ? `${employee.prefix} ` : ""}
        ${employee.firstName} ${employee.lastName}
        ${employee.suffix ? `, ${employee.suffix}` : ""}`}
      </h3>
      <h4>{employee.title}</h4>
      {showButton ? 
        <>
          <button onClick={handleShowBtn}>Hide Pets</button>
          <PetList pets={pets}/>      
        </> : 
        <button onClick={handleShowBtn}>Show Pets</button>
       }     
    </article>
  );
};

export default Employee;
