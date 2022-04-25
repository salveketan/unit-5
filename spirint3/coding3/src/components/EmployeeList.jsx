import { useState, useEffect } from "react";

import "./EmployeeList.css"



export const EmployeeList = () => {
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        getdata();
    }, [])


    const getdata = async () => {
        const data = await fetch('http://localhost:8080/employee')
            .then((d) =>
                d.json());
        setEmployee(data);
        // console.log(data)
    };
    
   

    return (
        <div className="list_container">
            {/* On clicking this card anywhere, user goes to user details */}
           
        
                {employee.map((item) => {
                    return (
                        <div className="employee_card" >
                            <img src={item.image} width="" height="" alt="" />
                            <span className="employee_name">


                            <p>{item.employee_name}</p>
                            </span>
                            <span className="employee_name">

                            <p>{item.title}</p>
                            </span>
                        </div>
                    )
                })}


            </div>
       
    );
};