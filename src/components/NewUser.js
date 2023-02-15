import { useEffect, useState } from "react";



const NewUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [employees, setEmployees] = useState(() => JSON.parse(localStorage.getItem ("employees")) || []);

      const handleSubmit = (e) => {
        setEmployees([...employees, {name, email}]);
        setName("");
        setEmail("");

      }

    useEffect(() => {
        // storing input name
        localStorage.setItem("employees", JSON.stringify(employees));
    
    }, [employees]);
    
    return (
        <form onSubmit={handleSubmit}>
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
    );
}

export default NewUser;
