import './App.css';
import  CreateList from "./CreateList";
import Form from "./Form";
import DisplayUsers  from "./DisplayUsers";
import React, { useState } from 'react';







function App() {
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employees')) || []);
  
  const [del, setDel] = useState(false)

  return (
    <div className='container'>

      <h1 className="title div1">Lunch list generator</h1>

      <div className='div2'>
       <CreateList
        employees={employees}
        setEmployees={setEmployees}
        setDel={setDel}
        del={del}
       />
      </div>
  

      <div className='div3 aside'>
        <Form
        employees={employees}
        setEmployees={setEmployees}
        />
      </div>

      <div className='div4 aside'>
        <h2>Try to edit a user!</h2>
        <DisplayUsers 
        employees={employees}
        setEmployees={setEmployees}
        setDel={setDel}
        />
      </div>


    
      

    </div>

  );
}

export default App;


