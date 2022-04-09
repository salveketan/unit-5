import logo from './logo.svg';
import './App.css';

function App() {

  const midlink= ["Service","Project","About"];

   return(
     <div className="App">
         <div>

           <h4>LOGO</h4>
          
         </div>
         <div className="App-mid">
            
                 {midlink.map((e)=>{
                     return <Midlink midlink={e} />
                   })}
        
         </div>
         <div>

           <button>Contact</button>

         </div>
     </div>
   )
}
function Midlink(props){
   console.log("midlink pros", props);
   return <p> 
     {props.midlink}
   </p>
}

export default App;
