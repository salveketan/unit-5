import logo from './logo.svg';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  const food ="pizza";
  const age = 10;
  const skills = ["mern","node","dsa","design","animation"]
  return (
    <div className='App'> your favorate food is {food}
    <div>
      your are { age > 18 ? "Eligible" : "Not eligible"} for licence
    </div>
    <div>
      Your skills:
     
       <p>
         {skills.map((e)=>{
        // return <li className='redtext'>{e}</li>;
        return <Skill Skill={e} key="value" age={12} />
        })}
     
         </p> 
    </div>
    {/* <skill />  */}
    </div>
  )
}
//props are atribute, 
function Skill(props){
  console.log("Skill pros", props);
  return <p className='redtext'>
    Skill:{props.Skill}
  </p>
}

export default App;
