import { useState, useEffect } from "react";

export const PetList = ({ showPets, employee }) => {
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
        console.error("Error fetching pets:", error);
      });
  }, [employee.id]);

  return (
    <aside className="pets-list">
      {showPets ? (
        <ul>
          {pets.map((pet) => (
            <li key={pet.id}>{pet.name}</li>
          ))}
        </ul>
      ) : (
        <p>No pets listed for this employee.</p>
      )}
    </aside>
  );
};

export default PetList;
