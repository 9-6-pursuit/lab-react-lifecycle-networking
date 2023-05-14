import PetList from "./PetList";
import "./Employee.css";
import { useState, useEffect } from "react";

//https://resource-veterinarian-api.fly.dev/api/pets?employeeId=z7GIN_i

export const Employee = ({employee}) => {
const [pets, setPets] = useState(false)
const [showPets, setShowPets] = useState([])

useEffect(() => {
  fetch(`https://resource-veterinarian-api.fly.dev/api/pets?employeeId=${employee.id}`)
  .then((response) => response.json())
  .then((response) => {
    // console.log("it works")
    // console.log(response)
    setShowPets(response)
  })
  //second useEffect parameter ([]) prevents above code from going into infinite loop
}, [employee.id])

const toggleShowPets = () => {
  setPets(!pets)
  console.log(showPets)
}

  return (
    <article className="employee">
      <h3>{employee.prefix} {employee.firstName} {employee.lastName} {employee.postfix}</h3>
      <h4>{employee.title}</h4>
      {pets ? (
        <>
        <button onClick={toggleShowPets}>Hide Pets</button>
        <PetList pets={showPets}/>
        </>
      ) : (
        <button onClick={toggleShowPets}>Show Pets</button>
      )}
    </article>
  );
};

export default Employee;
