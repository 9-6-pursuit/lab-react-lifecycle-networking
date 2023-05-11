import PetList from "./PetList";
import { useEffect, useState } from "react";
import "./Employee.css";

export const Employee = ({employee}) => {
  const BASE_URL = `https://resource-veterinarian-api.fly.dev/api/`;
  const [showPets, setShowPets]= useState(false)
  const [pets, setPets] = useState([]);

  const toggleShowPets = () => {
    setShowPets(!showPets)
  }

  useEffect(()=>{
    
    fetch(`${BASE_URL}/pets?employeeId=${employee.id}`)
    .then((response) =>response.json())
    .then((response) => {   
      setPets(response)
    })
    .catch((error) =>{
      console.log(error)
    })
    
  }, [BASE_URL,employee.id])



  let firstLast = `${employee.firstName} ${employee.lastName}`
  let newname = employee.prefix 
  ? `${employee.prefix} ${firstLast} ${employee.postfix}` : employee.postfix 
  ? `${employee.firstName} ${employee.lastName}, ${employee.postfix}`: `${employee.firstName} ${employee.lastName}`;
         
  return (
    <article className="employee">
      <h3>{newname}</h3>
      <h4>{employee.title}</h4>
      {showPets ?(
        <>
        <PetList pets={pets} key={pets.id}/>
        <button onClick={toggleShowPets}>Hide Pets</button>
        </>):(
        <button onClick={toggleShowPets}>Show Pets</button>
      )}
    </article>
  );
};

export default Employee;
