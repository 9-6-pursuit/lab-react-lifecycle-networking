export const PetList = ({ pets }) => {
  return (
    <aside className="pets-list">
      {/* <p>No pets listed for this employee.</p> */}
      <p>
        {pets.map((pet) => {
          return pet.name;
        }).join(", ")}
      </p>
    </aside>
  );
};

export default PetList;
