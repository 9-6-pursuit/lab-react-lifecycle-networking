import React from "react";
import NavBar from "./Components/NavBar";
import EmployeeList from "./Components/EmployeeList";

function App () {
  return (
    <>
      <NavBar />
      <EmployeeList />
    </>
  );
};

export default App;






// BASE_URL = https://resource-veterinarian-api.fly.dev/api

// Get all employees: `${BASE_URL}/employees`
// Get a single employee: `${BASE_URL}/employees/${employee.id}`
// Get all pets: `${BASE_URL}/api/pets`
// Get all pets assigned to an employee: `${BASE_URL}/api/pets?employeeId=${employee.id}`