import React, { useState } from 'react';

const ListCreator = ({ employees, setEmployees }) => {
  const [employeesIndex, setEmployeesIndex] = useState(() => {
    const indices = [];

    function genRandomNum(){
      const randomNumber = Math.floor(Math.random() * employees.length);
      return randomNumber
    }
    for (let i = 0; i < 2; i++) {
      const duo = {person1: genRandomNum() , person2: genRandomNum()}
       
        
        indices.push(duo);
    }
    return indices;
  });

  return (
    <div>
      <h2>List Creator</h2>
      {employeesIndex.map((num, index) => (
        <div key={index }> duo {index +1}:
                <p >person1: {employees[num.person1].name}</p>
                <p >person2: {employees[num.person2].name}</p>

        </div>
      ))}
    </div>
  );
};

export default ListCreator;
