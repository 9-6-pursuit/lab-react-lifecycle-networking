export const PetList = ({pets}) => {
  return (
    <aside className="pets-list">
      <p>{pets.map(pet => {
        return pet.name
      }).join(", ")}</p>
    </aside>
  );
};

export default PetList;
