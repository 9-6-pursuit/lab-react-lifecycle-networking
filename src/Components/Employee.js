import PetList from "./PetList";
import "./Employee.css";
import { useEffect, useState } from "react";

export const Employee = ({ employee }) => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch(
      `https://resource-veterinarian-api.fly.dev/api/pets?employeeId=${employee.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setPets(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <article className="employee">
      <h3>
        {employee.firstName} {employee.lastName}
      </h3>
      <h4>{employee.title}</h4>
      <button>Show Pets</button>
      <PetList pets={pets} />
    </article>
  );
};

export default Employee;
