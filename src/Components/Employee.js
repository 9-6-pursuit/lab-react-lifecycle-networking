import PetList from "./PetList";
import { useEffect, useState } from "react";
import "./Employee.css";

export const Employee = ({employee}) => {

  const [showPets, setShowPets] = useState(false);
  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://resource-veterinarian-api.fly.dev/api/pets?employeeId=${employee.id}`)
      .then((response) => {
        if (!response.ok) {
          setError('response not work');
          return;
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          setPets(data);
          setError(null);
        }
      })
      .catch((error) => {
        setError('problem fetch' + error);
      });
  }, [employee.id])

  const toggleShowPets = () => {
    setShowPets(!showPets)
  }

  //prefix and postfix
  const name = `${employee.prefix ? employee.prefix + " " : ""}${employee.firstName} ${employee.lastName}${employee.postfix ? ", " + employee.postfix : ""}`;

  return (
    <article className="employee">
      <h3>{name}</h3>
      <h4>{employee.title}</h4>
      {error && <p className="error">{error}</p>}
      {showPets ? (
        <>
          <button onClick={toggleShowPets}>Hide Pets</button>
          <PetList pets={pets} />
        </>  
      ) : (
        <button onClick={toggleShowPets}>Show Pets</button>
      )}
    </article>
  );
};

export default Employee;
