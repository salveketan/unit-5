
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Admin } from './components/Admin';
import { EmployeeList } from './components/EmployeeList';
import { Home } from './components/Home';
import { Logout } from './components/Logout';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/employeelist' element={<EmployeeList/>}></Route>
        <Route path='/logout' element={<Logout/>}></Route>
        </Routes>

    </div>
  );
}

export default App;
