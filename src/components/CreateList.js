import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';


const CreateList = ({ employees, setEmployees, setDel, del }) => {
  
  //Creating a list of the employees index
  const [employeesIndex2, setEmployeesIndex2] = useState([])
  const [email, setEmail] = useState("")

  // create the actual list of pairs, max attempts is in case of infinite loop
  function generatePairs(array, weeks, maxAttempts = 100) {

    //First we put the array into a new variable
    var arr = array
    
    // count how many times the person has been chosen
    const counters = arr.reduce((obj, person) => ({ ...obj, [person]: 0 }), {});
    const pairs = []; //Creating a list of pairs

    while (pairs.length < weeks) {
      let pair;
      let attempt = 0;
      do {
        attempt++;
        //if attempt comes above max attempts; stop the code and give an error
        if (attempt > maxAttempts) {
          throw new Error('Failed to generate pairs');
        }
        //Choose two random
        const person1 = Math.floor(Math.random() * arr.length);
        const person2 = Math.floor(Math.random() * arr.length);

        //If they are the same person, redo the while
        if(person1 === person2){continue;}

       // Check if they have worked together the week before
      const workedTogetherThisWeek = pairs.some(pair => (pair.person1 === person1 && pair.person2 === person2) || (pair.person1 === person2 && pair.person2 === person1));


        // Check if any have been more than three times, if so redo the while
        if (workedTogetherThisWeek || counters[person1] >= 3 || counters[person2] >= 3) {continue;}

        //Creates a pair of person1 and person2
        pair = { person1, person2 };
        counters[person1]++;
        counters[person2]++;

      } while (!pair); //repeats the do code until a pair is made
      pairs.push(pair);//Pushes to the pair array
    }
    return pairs;
  }

  //Generating the list
  const generatedList = () =>{
    
    setDel(false)
    var empLength = employees.length

    //Checks if employees is even or odd
    //if(Math.abs(employees.length % 2) === 1){ empLength = employees.length-1}

    //Calculate the max amount of weeks, from the amount of employees
    var maxWeeks = Math.floor((3*(empLength/2))/2)
    let weeks = 0

    // checks if maxWeeks is above or bellow 5 
    if(maxWeeks >= 5){
      weeks = 5
    }
    if (maxWeeks < 5) {
      weeks = maxWeeks
    }        
    var array = []
    //Creating an array of indexes
    for (let i = 0; i < employees.length; i++) {
      array.push(i)
    }
    let newArray = generatePairs(array, weeks) //Getting the new array
    setEmployeesIndex2(newArray) //Set state to the new array
  }

  //Calculating the week number
  function currentWeek(){
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor((currentDate - startDate) /
        (24 * 60 * 60 * 1000));
          
    var weekNumber = Math.ceil(days / 7);
    return weekNumber
  }


// storing the html output inside a object
const content = useRef();

//Using EmailJS to send the list
const sendEmail = (e) => {
  e.preventDefault();

  const templateParams = {
    user_email: email,
    message: content.current ? content.current.innerHTML : '',
  };

  //Insert your own info emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY')
  emailjs.send('service_uphkigm', 'template_p3nmhzs', templateParams, 'knK2PlgvaExTvsQYn')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    alert("The list has now been sent your you email")
};

  var week=currentWeek()

  //Styling for the email
  const styling = {
    textAlign: 'center',
    fontSize: '30px',
    color: 'black',
    outlineStyle: 'solid',
    outlineColor: 'black',
    outlineWidth: '2px',
    padding: '20px',

}

  //Generating the list once the button is pressed
  return (
    <div>
        <h2>List Creator</h2>
        <button onClick={generatedList}>Create list</button>
        {del? <div></div>
        : 
        <div>
          <table ref={content} style={{width:'100%', background:'white'}} >
            <thead >
              <tr style={styling}>
                <th>Week  </th>
                <th>Person 1  </th>
                <th>Person 2  </th>
              </tr>
            </thead>
            <tbody>
            {employeesIndex2.map((num, index) => (
                  <tr key={index} style={styling}> 
                    <td>{week +=1}</td>
                    <td style={{background: employees[num.person1].color}}>{employees[num.person1].name}</td>
                    <td style={{background: employees[num.person2].color}}>{employees[num.person2].name}</td>
              </tr>
            ))}</tbody>
          </table>
          <label htmlFor="email">Email:</label>
          <input
                type="text"
                name="email"
                value={email}
                onInput={(e) => {
                  setEmail(e.target.value);
                }}
              /> 
          <button onClick={sendEmail}>Send</button>
      </div>
}
  
    </div>
  );
};

export default CreateList;
