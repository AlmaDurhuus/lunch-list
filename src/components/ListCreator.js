import React, { useEffect, useState } from 'react';


// Here we will be handeling the creating of the lunch list
const ListCreator = () => {
    const [employees, setEmployees] = useState([]);
  
    useEffect (() => {
     const storedEmployees = localStorage.getItem('employees');
     if (storedEmployees){
        setEmployees(JSON.parse(storedEmployees))
     }
    }, []);

  
    return (
        <div>
          <h2>List Creator</h2>
          <ul>
            {employees.map((employee) => (
              <li key={employee.email}>{employee.name}</li>
            ))}
          </ul>
        </div>
      );

}

export default ListCreator;