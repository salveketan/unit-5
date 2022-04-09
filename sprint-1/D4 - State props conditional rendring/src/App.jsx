import logo from './logo.svg';
import './App.css';
import { Category } from './components/category';
import { useState } from 'react';

function App() {
   const [counter,setCounter] = useState(0);
   const [counter1,setCounter1] = useState(0);
   const handle = () => {
    if(counter >=10){
      return
    }
    setCounter(counter+1)
   };

   const handlechange = (value) => {
     setCounter1(counter1 +value)
   }
   if(counter >= 10){

     alert("reached to max")
     return;
   }

  const navbar = [
    {
      image:"https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
      title:"Top Offer"
    },
    {
      image:"https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
      title:"Grocery"
    },
  ]
  return (
    <>
      <div>
        {navbar.map((e)=>(
          <Category image={e.image} label={e.title}/>
          ))}
       </div>
      <hr/>
    <div>
      <h3>Counter: {counter}</h3>

      {/* <button onClick={()=>{
        // setCounter(15)
        // if(counter >=10){
        //   return
        // }
        // setCounter(counter+1)
        // console.log("Updating")
      }}>Add</button> */}
      <button onClick={handle}>Add</button>

      <button onClick={()=>{
        // setCounter(15)
        if(counter ==0){
          return
        }
        setCounter(counter-1)
        // console.log("Updating")
      }}>sub</button>

    </div>
   <hr />
   <div>
      <h3>Counter1: {counter1}</h3>
      <button onClick={()=>{handlechange(1)}}>Add1</button>
      <button onClick={()=>{handlechange(-1)}}>sub1</button>

    </div>
    </>

   
   
   
  );
}

export default App;
