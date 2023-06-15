export const PetList = ({pets}) => {
  return (
    <aside className="pets-list">
      <br></br>
      {pets.length < 1 
      ? <p>No pets listed for this employee.</p> 
      : pets.map(pet => pet.name + ", ")}
    </aside>
  );
};

export default PetList;
