import React, { useEffect, useState } from 'react';

const Form = ({employees, setEmployees}) => {
  //We create a variable called data, which contains the array of employees
  //const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employees')) || []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  
  useEffect (() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  //Handles the delete button
  const handleDelete = email => {
    //Filters out the employee that needs to be removed
    const updatedData = employees.filter(item => item.email !== email);
    setEmployees(updatedData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployees([...employees, {name, email}]);
    setName("");
    setEmail("");
  }


  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            aria-label="name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            aria-label="email"
            required
          />
              <input type="submit" value="Submit"></input>
        </form>

        <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {employees.map(item => (
            <tr key={item.email}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td> <button  onClick={() => handleDelete(item.email)}>Delete</button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>

  )
}



export default Form;
