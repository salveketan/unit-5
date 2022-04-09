import { useState } from "react";

export const Inventory = () => {
  const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    inkpens:30
  });

  const handlechange = (value,type) => {
    if(type=="b"){
       setInv({...inv, books:inv.books+value})
    }
    if(type=="n"){
      setInv({...inv, notebooks:inv.notebooks+value})
   }
      if(type=="p"){
        setInv({...inv, pens:inv.pens+value})
    }
    if(type=="i"){
      setInv({...inv, inkpens:inv.inkpens+value})
    }
   
  }
  

    // Create add and remove functions here that changes the
    // state.
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>handlechange(1,"b")}>+</button>
        <button className="circlularButton" onClick={()=>handlechange(-1,"b")}>-</button>
        <span>{inv.books}</span>
      
      </div>
      <div className="items">
        <span>Notebooks: </span>
        
        <button className="circlularButton" onClick={()=>handlechange(1,"n")}>+</button>
        <button className="circlularButton" onClick={()=>handlechange(1,"n")}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>handlechange(1,"p")}>+</button>
        <button className="circlularButton" onClick={()=>handlechange(1,"p")}>-</button>
        <span>{inv.pens}</span>
       
      </div>
      <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton" onClick={()=>handlechange(1,"i")}>+</button>
        <button className="circlularButton" onClick={()=>handlechange(1,"i")}>-</button>
        <span>{inv.inkpens}</span>
      </div>
            {/*calculate total and show it*/}
      total: {inv.books+inv.notebooks+inv.pens+inv.inkpens}
    </div>
  );
};