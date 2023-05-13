import PetList from "./PetList";
import "./Employee.css";
import { useEffect, useState } from "react"

export const Employee = ({ employee }) => {
  const [ pets, setPets ] = useState([]);
  const [ showPets, setShowPets ] = useState(false)
  

  useEffect( () => {
    fetch(`https://resource-veterinarian-api.fly.dev/api/pets?employeeId=${employee.id}`)
    .then((response) => response.json())
    .then((response) => { 
      console.log("useEffect Employee.js")
      setPets(response)
    })
  }, [employee.id])

const toggleShowPets = () => {
  setShowPets(!showPets);

}

  return (
    <article className="employee">
      <h3>{employee.prefix} {employee.firstName} {employee.lastName} </h3>
      <h4>{employee.title}</h4>
      {showPets ? (
        <>
          <button onClick={toggleShowPets}>Hide Pets</button> 
          <PetList pets={pets}/> 
        </>
      ) : (
        <button onClick={toggleShowPets}>Show Pets</button>
      )}

   
    </article>
  );
};

export default Employee;


  // function getPets() {
  //   console.log("Get the pets")
  //   pets.map(pet => {
  //     return pet.name
  //   }).join(", ")
  // } 

  //  pet.name + ", " +
  //  let petListForOne = []
