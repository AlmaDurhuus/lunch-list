import React, { useState } from 'react';

function DisplayUsers({ employees, setEmployees }) {
  const [editingStates, setEditingStates] = useState(
    employees.map(() => false)
  );

  const toggleEditing = (index) => {
    setEditingStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const handleDelete = email => {
    //Filters out the employee that needs to be removed
    const updatedData = employees.filter(item => item.email !== email);
    setEmployees(updatedData);
  };

  return (
    <div>
      {employees.map((employee, index) => (
        <form className='employees' key={index} onSubmit={(e) => e.preventDefault()}>
          {editingStates[index] ? (
            <input
              type="text"
              name="name"
              value={employee.name}
              onChange={(e) => {
                const name = e.target.value;
                const updatedEmployee = { ...employee, name };
                const updatedEmployees = [...employees];
                updatedEmployees[index] = updatedEmployee;
                setEmployees(updatedEmployees);
              }}
            />
          ) : (
            <div>{employee.name}</div>
          )}
          {editingStates[index] ? (
            <input
              type="text"
              name="email"
              value={employee.email}
              onChange={(e) => {
                const email = e.target.value;
                const updatedEmployee = { ...employee, email };
                const updatedEmployees = [...employees];
                updatedEmployees[index] = updatedEmployee;
                setEmployees(updatedEmployees);
              }}
            />
          ) : (
            <div>{employee.email}</div>
          )}
          <button type="submit" onClick={() => toggleEditing(index)}>
            {editingStates[index] ? 'Done' : 'Edit'} 
          </button>
          {editingStates[index] ? ( <button type='button' onClick={() => handleDelete(employee.email)}>Delete</button>) : ("")}
        </form>
      ))}
    </div>
  );
}

export default DisplayUsers;
