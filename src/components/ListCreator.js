import React, { useEffect, useState } from 'react';


// Here we will be handeling the creating of the lunch list
const ListCreator = () => {
    const [people, setpeople] = useState(JSON.parse(localStorage.getItem('employees')) || []);

    //create the list when button is clicked

        //Start by creating an array to save the list in
        let lunchList = []

        for (let i = 0; i < people.length; i++) {
            const element = people[i];
            
        }
        console.log(people)
            




}

export default ListCreator;