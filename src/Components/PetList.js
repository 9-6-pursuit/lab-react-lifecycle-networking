export const PetList = ({pets}) => {
  return (
    <aside className="pets-list">
      {pets && pets.length > 0 ? (
        <p>{pets.map(pet => pet.name).join(", ")}</p>
      ) : (
        <p>No pets listed</p>
      )}
    </aside>
  );
};

export default PetList;

