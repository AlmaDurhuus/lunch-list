import React, { useEffect, useState } from 'react';

const Form = ({employees, setEmployees}) => {
  //We create a variable called data, which contains the array of employees
  //const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employees')) || []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  
  useEffect (() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployees([...employees, {name, email}]);
    setName("");
    setEmail("");
  }


  return (
    <div>
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
              <input type="submit" value="Submit"></input>
        </form>

  
    </div>

  )
}



export default Form;
