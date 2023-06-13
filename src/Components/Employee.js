import PetList from "./PetList";
import { useEffect, useState } from "react";
import "./Employee.css";


export const Employee = ({employee}) => {
    const [pets, setPets] = useState([])
    const [showPets, setShowPets] = useState(false)

   const toggleShowPets = () =>{
      setShowPets(!showPets)
    }
  
    useEffect(() => {
      fetch(`https://resource-veterinarian-api.fly.dev/api/pets?employeeId=${employee.id}`)
      .then((response) => response.json())
      .then((response) => {
        setPets(response)
      })
    } , [])

  let name = `${employee.firstName} ${employee.lastName}`
  let fullName = ``
  if (employee.prefix){
    fullName = `${employee.prefix} ${name} ${employee.postfix}`
  } else if (employee.postfix) {
    fullName = `${employee.firstName} ${employee.lastName}, ${employee.postfix}`
  } else {
    fullName = `${employee.firstName} ${employee.lastName}`
  }

  return (
    <article className="employee">
      <h3>{fullName}</h3>
      <h4>{employee.title}</h4>
      {showPets ? (<>
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
