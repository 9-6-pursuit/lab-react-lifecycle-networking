import PetList from "./PetList";
import "./Employee.css";
import { useState, useEffect } from "react";


export const Employee = ({employee}) => {
const [pets, setPets] = useState(false)
const [showPets, setShowPets] = useState([])

useEffect(() => {
  fetch(`https://resource-veterinarian-api.fly.dev/api/pets?employeeId=${employee.id}`)
  .then((response) => response.json())
  .then((response) => {
    setShowPets(response)
    console.log("response")
  })
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