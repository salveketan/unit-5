import { useState } from "react"

var style3 = {display:'flex',paddingLeft:'50px',alignItems:'center',justifyContent:'space-Between',margin:'auto',textAlign:'center',marginBottom:'50px',marginTop:'50px',height:'80px', width:'600px',borderRadius:'15px' , backgroundColor:'white', color:'black'}
var styleIn ={height:'50px', width:'50px', backgroundColor:'transparent',color:'red',marginRight:'30px'}

var style5 = {width:'490px',height:'80px',marginLeft:'130px',borderRadius:'15px' ,paddingLeft:'50px', backgroundColor:'white', color:'black',border:'none',fontSize:'30px',fontWeight:'700'}
var styleBtn = {width:'80px',height:'80px',marginLeft:'30px',borderRadius:'15px' , backgroundColor:'white', color:'black',border:'none',fontSize:'30px',fontWeight:'700'}
const Todo=()=>
{
    const [task,setTask] = useState("");

    const [todo,setTodo] = useState([]);

    const handleChange =(e)=>
    {
        console.log("clicked me",e.target.value)
        setTask(e.target.value)
    }

    const handleClick=()=>
    {
        setTodo([...todo,task])
    }

    return (
        <>
        
        <h1 style={{textAlign:'center'}}>TO-DO LIST</h1>

       

      
        {
            todo.map((item)=>
            {
                    return  <div style={style3}>
                    <h1>{item}</h1> <input style={styleIn} type="radio"/>
                </div>
                   
            })
        }

        <input type="text" placeholder="Write Something" value={task} style={style5} onChange={handleChange}/>  
        <button style={styleBtn} onClick={handleClick}>+</button>    
        
        </>
    )
}

export default Todo ;