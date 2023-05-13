import { useState, useEffect } from "react";

import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({ employee }) => {
  const [showPets, setShowPets] = useState(false)
  const [pets, setPets] = useState([]);

  //NOT working? (ex:"Susan Gallegos")
  // BASE_URL = https://resource-veterinarian-api.fly.dev/api
  // Get all employees: `${BASE_URL}/employees`
  // Get a single employee: `${BASE_URL}/employees/${employee.id}`
  // Get all pets: `${BASE_URL}/api/pets`
  // Get all pets assigned to an employee: `${BASE_URL}/api/pets?employeeId=${employee.id}`

  useEffect(()=> {
    fetch(`https://resource-veterinarian-api.fly.dev/api/pets?employeeId=${employee.id}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      setPets(response)
    })
    .catch((error) => console.error(error))
  }, [])

  const toggleShowPets = () => {
    setShowPets(!showPets)
  }

  return (
    <article className="employee">
      <h3>{employee.firstName} {employee.lastName}</h3>
      <h4>{employee.title}</h4>
      <button onClick={toggleShowPets}>{showPets ? "Hide Pets" : "Show Pets"}</button>
      {showPets ? <PetList pets={pets}/> : <></>}
    </article>
  );
};

export default Employee;
