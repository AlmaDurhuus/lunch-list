import { useState } from "react";

function DisplayUsers({ employees, setEmployees }) {
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')


    function updateUser(name, mail){

    }



  return (
    <div>
      {employees.map((employee) => (
        <form key={employee.mail} onSubmit={updateUser}>
            <input
                type="text"
                name="name"
                value={employee.name}
                onChange={(e) => setMail(e.target.value)}

          />
          <input
            type="text"
            name="email"
            value={employee.email}
            onChange={(e) => setMail(e.target.value)}
          />
            <button>Save</button>
        </form>
      ))}
    </div>
  );
}

export default DisplayUsers;