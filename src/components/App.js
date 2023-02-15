import './App.css';
import  CreateListButton  from "./CreateListButton";
import From from "./Form";






function App() {


  return (
    <div className='container'>

      <h1 className="title">Lunch list generator</h1>
      <From/>

      <div>
       <CreateListButton/>
      </div>

    
    </div>

  );
}

export default App;


