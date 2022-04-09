// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const [num,newnum] = useState(0);
 
 const handel = (value,type) =>{
   if(type=="a"){

     newnum(num+value);
   }
   else if(type=="b"){

     newnum(num*value)
   }
 }
 
  
 let col  = "red"
 if(num%2==0){
  col = "green"
 }
 
 
     
  return (
   <div className='App'>
     <h1>~K10~</h1>
    <h1 className={col}>counter {num}</h1>

    <button onClick={()=>{handel(1,"a")}}>Increment</button>
    <button onClick={()=>{handel(-1,"a")}}>Decrement</button>
    <hr />
    <button onClick={()=>{handel(2,"b")}}>2x</button>
   </div>
  )
}

export default App;
