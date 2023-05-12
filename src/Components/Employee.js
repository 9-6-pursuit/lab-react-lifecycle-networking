import PetList from "./PetList";
import { useState, useEffect } from "react";
import "./Employee.css";

// export default function Employee({employee}) {
//   return (

//   )
// }





export default function Employee({employee}) {
  const [showPets, setShowPets] = useState(false)
  const [pets, setPets] = useState([])


  useEffect(() => {
    fetch(`https://resource-veterinarian-api.fly.dev/api/pets?employeeId=${employee.id}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        setPets(response)
      })
  }, [employee.id])

  function toggleShowPets() {
    setShowPets(!showPets)
  }

  function fullName() {
     return `${employee.prefix ? employee.prefix : ""} ${employee.firstName} ${employee.lastName} ${employee.postfix ? employee.postfix : ""}`
  }


  return (
    <article className="employee">
      <h3>{fullName()}</h3>
      <h4>{employee.title}</h4>
      
    {showPets ? (
      <>
        <button onClick={toggleShowPets}>Hide Pets</button>
         <PetList pets={pets}/>
      </>
    ): (
        <button onClick={toggleShowPets}>ShowPets</button>
    )}
    </article>
  );
};

