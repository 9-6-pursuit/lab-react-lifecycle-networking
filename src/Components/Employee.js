import PetList from "./PetList";
import "./Employee.css";
import { useState, useEffect } from "react";

export const Employee = ({employee}) => {
  const [showPets, setShowPets] = useState(false)
  const [pets, setPets] = useState([])

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
      <h3>Staff Member Name</h3>
      <h4>Staff Member Title</h4>
      <PetList />
      <button onClick={toggleShowPets}>{showPets ? "Hide Pets" : "Show Pets"}</button>
      {showPets ? <PetList pets={pets}/> : <></>}
      
    </article>
  );
};

export default Employee;
