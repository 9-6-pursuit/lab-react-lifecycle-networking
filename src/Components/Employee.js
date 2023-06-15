import PetList from "./PetList";
import "./Employee.css";
import { useEffect, useState } from "react";

export const Employee = ({employee}) => {
  const [clicked, setClicked] = useState(false)
  const [pets, setPets] = useState([])

  function handleClicked() {
    if (clicked === false) {
      setClicked(true)
    } else {
      setClicked(false)
    }
  }

  useEffect(() => {
    fetch(`https://resource-veterinarian-api.fly.dev/api/pets?employeeId=${employee.id}`)
    .then(response => response.json())
    .then(pets => 
      setPets(pets)
    )
  },[employee.id]);

  return (
    <article className="employee">
      <h3>{employee.prefix ?? null} {employee.firstName} {employee.lastName}{employee.postfix ? ", " + employee.postfix: null}</h3>
      <h4>{employee.title}</h4>
      <button onClick={handleClicked}>Show Pets</button>
      {clicked ? <PetList pets={pets}/> : null}
      
    </article>
  );
};

export default Employee;
