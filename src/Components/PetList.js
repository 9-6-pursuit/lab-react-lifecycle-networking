export const PetList = ({pets}) => {

  return (
    <>
      <aside className="pets-list">
          <p>{pets.map(pet => {
            return pet.name
          }).join(", ")}
          </p>
      
        </aside>
    </>
  );
};

export default PetList;





/* ======== NOT USED ============
  return (
    <>
      <aside className="pets-list">
        if(pets.length==0){
          <p>No pets listed for this employee.</p>
        } else {
          <p>{pets.map(pet => {
            return (
              <li>
              {pet.name}
              </li>
            );
            })}
          </p>
      }
        </aside>
    </>
  );
*/
