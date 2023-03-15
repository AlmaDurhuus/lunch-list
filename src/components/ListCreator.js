import React, { useState } from 'react';

const ListCreator = ({ employees, setEmployees }) => {
   // eslint-disable-next-line
  const [employeesIndex, setEmployeesIndex] = useState(() => {
    const indices = [];
    let lastDuo ={}

    function genRandomNum(){
      const randomNumber = Math.floor(Math.random() * employees.length);
      return randomNumber
    }
    function hasMadeLunch(pers1, pers2, array){
      let person1Count = 0
      let person2Count = 0

      for (let i = 0; i < array.length; i++) {
        console.log("test")
        const index = array[i];
        if (pers1 === index.person1 || pers2 === index.person1){
          person1Count++
        }
        if (pers2 === index.person2 || pers1 === index.person2){
          person2Count++
        }
      }
      if (person1Count < 2 && person2Count < 2){
        return true
      }else{return false }
    }
    for (let i = 0; i < 2; ) {
      const duo = {person1: genRandomNum() , person2: genRandomNum()}
      if(duo.person1 !== duo.person2 && hasMadeLunch(duo.person1, duo.person2, indices) === true && lastDuo !== duo){
          indices.push(duo);
          lastDuo = duo
          i++;
      }
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
