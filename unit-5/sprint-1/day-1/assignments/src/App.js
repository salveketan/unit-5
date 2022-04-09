
import './App.css';
import Joinus from './Problem2/JoinUs';
import Settings from './Problem2/Settings';
import Login from './Problem2/Login';
import ContactUs from './Problem2/ContactUs';
import Search from './Problem2/Search';
import Home from './Problem2/Home';
import Help from './Problem2/Help';
import Download from './Problem2/Download';
import Mobile from './Problem1/Mobile';
import AllBtns from './Problem2/AllBtns';



var style2 = {display:'flex' ,gap:'20px',width:'260px',flexWrap :'wrap',marginLeft:'20px',margin:'auto',marginTop:'40px'}

function App() {
  return (

    <>
     {/* <div className="App">
          <Mobile></Mobile>
     </div> */}

      <div style={style2}>

            {/* <Joinus></Joinus>
            <Settings></Settings>
            <Login></Login>
            <ContactUs></ContactUs>
            <Search></Search>
            <Help></Help>
            <Home></Home>
            <Download></Download> */}
          <AllBtns></AllBtns>

      </div>

    
    </>
   

  
  );
}

export default App;
