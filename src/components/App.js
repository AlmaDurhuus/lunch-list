import './App.css';
import EmployeeList from './EmployeeList.js'
import NewUser from "./NewUser.js";
import ListCreator from './ListCreator';





function App() {
  return (
    <div className='container'>

      <h1 className="title">Lunch list generator</h1>

      <div>
        <NewUser />
      </div>

      <div> 
        <EmployeeList/> 
      </div>
  
    </div>

  );
}

export default App;


