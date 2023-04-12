import React, { useState, useEffect } from 'react';


const CreateList = ({ employees, setEmployees, setDel, del }) => {
 
  const [employeesIndex2, setEmployeesIndex2] = useState([])

  // create the actual list of pairs, max attempts is in case of infinite loop
  function generatePairs(array, weeks, maxAttempts = 100) {
    //First we shuffle the array
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    // count how many times the person has been chosen
    const counters = shuffledArray.reduce((obj, person) => ({ ...obj, [person]: 0 }), {});
    const pairs = [];
    while (pairs.length < weeks) {
      let pair;
      let attempt = 0;
      do {
        attempt++;
        //if attempt comes above max attempts; stop the code and give an error
        if (attempt > maxAttempts) {
          throw new Error('Failed to generate pairs');
        }
        const person1 = Math.floor(Math.random() * shuffledArray.length);
        const person2 = Math.floor(Math.random() * shuffledArray.length);
        //If they are the same person skip to next
        if(person1 == person2){continue;}
        const lastPair = pairs[pairs.length - 1];
        const workedTogetherLastWeek = lastPair && (lastPair.person1 === person1 || lastPair.person1 === person2 || lastPair.person2 === person1 || lastPair.person2 === person2);
        if (workedTogetherLastWeek || counters[person1] >= 3 || counters[person2] >= 3) {
          continue;
        }
        pair = { person1, person2 };
        counters[person1]++;
        counters[person2]++;
      } while (!pair);
      pairs.push(pair);
    }
    return pairs;
  }

  //Generating the list
  const generatedList = () =>{
    setDel(false)
    var empLength = employees.length

    //Checks if employees is even or odd
    if(Math.abs(employees.length % 2) === 1){ empLength = employees.length-1
    }
    var maxWeeks = Math.floor((3*(empLength/2))/2)
    var employeesNeeded = ""
    let weeks = 0

    // checks if maxWeeks is above or bellow 5 
    if(maxWeeks => 5){
      weeks = 5
      if(empLength < 10){
          employeesNeeded = empLength
        }else{employeesNeeded = 10}
    }
    if (maxWeeks < 5) {
      weeks = maxWeeks
      employeesNeeded = empLength
    }        
    var array = []
    //Add all employees to the array
    for (let i = 0; i < employees.length; i++) {
      array.push(i)
    }
    let newArray = generatePairs(array, weeks)
    setEmployeesIndex2(newArray)

  }
  function currentWeek(){
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor((currentDate - startDate) /
        (24 * 60 * 60 * 1000));
          
    var weekNumber = Math.ceil(days / 7);
    return weekNumber
}
  var week=currentWeek()
  return (
    <div>
      <h2>List Creator</h2>
      <button onClick={generatedList}>Create list</button>
      {del? <div></div>
      : 
      <div>
        {employeesIndex2.map((num, index) => (
          <div key={index}> Week {week +=1}:
                  <p >person1: {employees[num.person1].name}</p>
                  <p >person2: {employees[num.person2].name}</p>
          </div>
        ))}
      </div>}
  
    </div>
  );
};

export default CreateList;
