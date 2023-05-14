import PetList from "./PetList";
import { useEffect, useState } from "react";
import "./Employee.css";

const BASE_URL = `https://resource-veterinarian-api.fly.dev/api`

export const Employee = ({employee}) => {
  const [showPets,setShowPets] = useState(false)
  const [pets, setPets] = useState([])

useEffect(()=>{
  fetch(`${BASE_URL}/pets?employeeId=${employee.id}`)
  .then((response)=>response.json())
  .then((response)=>{
    console.log("Use effect.")
    setPets(response)
  })
}, [employee.id])

const toggleShowPets = () => {
  setShowPets(!showPets)
}

  return (
    <article className="employee">
      <h3>{employee.firstName} {employee.lastName}</h3>
      <h4>{employee.title}</h4>
      {showPets ? (
        <>
          <button onClick={toggleShowPets}>Hide Pets</button>
          <PetList pets = {pets} />
        </>
      ):(
        <button onClick={toggleShowPets}>Show Pets</button>
      )}
    </article>
  );
};

export default Employee;
