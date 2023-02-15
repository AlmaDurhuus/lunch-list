import React, { useEffect, useState } from 'react';

const EmployeeList = () => {
  //We create a variable called data, which contains the array of employees
  const [data, setData] = useState(JSON.parse(localStorage.getItem('employees')) || []);
  
  useEffect (() => {
    //handleStorageEvent sets the data variable with employees from local storage
    const handleStorageEvent = () => {
      setData(JSON.parse(localStorage.getItem('employees')) || [])
    }
    window.addEventListener('storage', handleStorageEvent)
    return () => {
      window.removeEventListener('storage', handleStorageEvent);
    };
  }, []);

  //Handles the delete button
  const handleDelete = email => {
    //Filters out the employee that needs to be removed
    const updatedData = data.filter(item => item.email !== email);
    setData(updatedData);
    localStorage.setItem('employees', JSON.stringify(updatedData));
    window.location.reload();
  };


  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.email}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td> <button  onClick={() => handleDelete(item.email)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}





export default EmployeeList;
