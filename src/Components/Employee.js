import PetList from "./PetList";
import "./Employee.css";
import { useEffect, useState } from "react";

export const Employee = ({ employee }) => {
  const [pets, setPets] = useState([]);
  const [showPets, setShowPets] = useState(false);

  useEffect(() => {
    fetch(`https://resource-veterinarian-api.fly.dev/api/pets?employeeId=${employee.id}`)
      .then((response) => response.json())
      .then((data) => {
        setPets(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [employee.id]);

  const handleTogglePets = () => {
    setShowPets(!showPets);
  };

  const prefix = employee.prefix ? `${employee.prefix} ` : '';
  const postfix = employee.postfix ? `, ${employee.postfix}` : '';

  return (
    <article className="employee">
      <h3>{prefix}{employee.firstName} {employee.lastName}{postfix}</h3>
      <h4>{employee.title}</h4>
      <button onClick={handleTogglePets}>{showPets ? 'Hide Pets' : 'Show Pets'}</button>
      {showPets && <PetList pets={pets} />}
    </article>
  );
};

export default Employee;
