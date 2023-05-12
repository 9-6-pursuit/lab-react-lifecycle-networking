import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";

export const Employee = ({ employee }) => {
  const hasPostfix = employee.postfix !== undefined && employee.postfix !== "";

  const [showPets, setShowPets] = useState(false);

  const togglePets = () => {
    setShowPets(!showPets);
  };

  return (
    <article className="employee">
      <h3>
        {employee.prefix} {employee.firstName} {employee.lastName}
        {hasPostfix && `, ${employee.postfix}`}
      </h3>
      <h4>{employee.title}</h4>
      <button onClick={togglePets}>Show Pets</button>
      {showPets && <PetList employee={employee} />}
      <PetList showPets={showPets} employee={employee} />
    </article>
  );
};

export default Employee;
