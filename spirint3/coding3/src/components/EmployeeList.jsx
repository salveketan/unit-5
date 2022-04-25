import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link, Navigate } from "react-router-dom";
import "./EmployeeList.css"
import axios from "axios";



export const EmployeeList = () => {
    const [employee, setEmployee] = useState([]);
    
    const {isAuth} = useContext(AuthContext);
  
    
    useEffect(() => {
        // getdata();
        axios.get("http://localhost:8080/employee").then(({data}) => {
            setEmployee(data);
            // console.log(data[0]);
        })
        
    }, [])


 
    
   

    return (
        <div className="list_container">
            {/* On clicking this card anywhere, user goes to user details */}
           
        
                {employee.map((item) => {
                    return ( 
                        
                        

                        <div className="employee_card" key={item.id}>
                            <Link to={`/employeelist/${item.id}`}> 
                            <img src={item.image} width="" height="" alt="" />
                            <span className="employee_name">


                            <p>{item.employee_name}</p>
                            </span>
                            <span className="employee_name">

                            <p>{item.title}</p>
                            </span>
                        </Link>
                        </div>
                    )
                })}


            </div>
       
    );
};