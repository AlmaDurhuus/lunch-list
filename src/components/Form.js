import React, { useEffect, useState } from 'react';

const Form = ({employees, setEmployees}) => {
  //We create a variable called data, which contains the array of employees
  //const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employees')) || []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [color, setColor] = useState("#FFFFFF")

  //makes sure that the local storage is updated
  useEffect (() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  //Handles when submitting a new employee
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployees([...employees, {name, email, color}]);
    setName("");
    setEmail("");
    setColor("#FFFFFF");
  }


  return (
    <div>
        <h2>Add employee</h2>
        <form className='newEmployee' onSubmit={handleSubmit}>
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
          <input type='color' 
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{background : color}}
          />
              <button type="submit" value="Submit">submit</button>
        </form>

  
    </div>

  )
}



export default Form;
