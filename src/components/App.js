import './App.css';
import  CreateListButton  from "./CreateListButton";
import Form from "./Form";
import DisplayUsers  from "./DisplayUsers";
import React, { useState } from 'react';







function App() {
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employees')) || []);


  return (
    <div className='container'>

      <h1 className="title">Lunch list generator</h1>
      <Form
      employees={employees}
      setEmployees={setEmployees}
      />

      <div>
        <h2>Try to edit a user!</h2>
        <DisplayUsers 
        employees={employees}
        setEmployees={setEmployees}
        />
      </div>

      <div>
       <CreateListButton
        employees={employees}
        setEmployees={setEmployees}
       />
      </div>
      

    </div>

  );
}

export default App;


