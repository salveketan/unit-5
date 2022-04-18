
import './App.css';
import { AddEmployes} from "./components/AddEmployee";
import { ShowEmployes } from "./components/ShowEmploye";

function App() {
  return (
    <div className="App">
      <div className='header'><h1>Masai Employe registration form</h1></div>
    
      <h4 className='header'>Add Employe details</h4>
      <AddEmployes/>
       <h4 className='header'>Employe details</h4>
      <ShowEmployes/>
    </div>
  );
}

export default App;
