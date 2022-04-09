import logo from './logo.svg';
import './App.css';

function App() {
  const arr1 = ["Android","Blackberry","Iphone","Windos Phone"];
  const arr2 =["Samsung","Xiomi","Apple","HTC"]
  return (
    <>
     <div>
         <h1>Mobile Operating System </h1>
         
           {/* {
             arr1.map((e)=>{
               return <li>{e}</li>
             })
           }       */}
            {
             arr1.map((e)=>{
               return <Arr1 li={e} B="B" />
             })
           } 
     </div>
     <div>
     <h1>Mobile Manufacturer</h1>

         {
           arr2.map((e)=>{
             return <Arr2 li={e} c="clr" />       
                })
         }
        
          
     </div>
    </>
     
       
  );
}
function Arr2(props){
     return <li className={props.c}>{props.li}</li>
}
function Arr1(props){
  return <li className={props.B}>{props.li}</li>
}

export default App;
