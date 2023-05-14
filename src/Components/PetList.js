export const PetList = ({pets}) => {
  return (
    <aside className="pets-list">
      {/* <p>No pets listed for this employee.</p> */}
      {pets.length > 0 ? 
      <p>{pets.map(pet => {
        return pet.name 
      }).join(", ")}
      </p> :
      <p>No Pets Listed</p>
    }
    </aside>
  );
};

export default PetList;
