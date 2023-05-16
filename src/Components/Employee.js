import PetList from "./PetList";
import "./Employee.css";
import { useEffect, useState } from "react";

export const Employee = ({ employee }) => {
  const [showPets, setShowPets] = useState(false);
  const [pets, setPets] = useState([]);


  useEffect(() => {
    fetch(`https://resource-veterinarian-api.fly.dev/api/pets?employeeId=${employee.id}`)
    .then(response => response.json())
    .then(petsData => setPets(petsData))
  },[employee.id]);

  const toggleShowPets = () => {
    setShowPets(!showPets);
  };

  return (
    <article className="employee">
    <h3>
      {employee.prefix ? `${employee.prefix} ` : ""} {employee.firstName}  {employee.lastName} {employee.postfix ? `, ${employee.postfix}` : ""}
      </h3>
      <h4>{employee.title}</h4>
      {showPets ? 
        <>
          <button onClick={toggleShowPets}>Show Pets</button>
          <PetList pets={pets} />
        </> : ( 
        <button onClick={toggleShowPets}>Show Pets</button>
      )}
    </article>
  );
};
export default Employee;
