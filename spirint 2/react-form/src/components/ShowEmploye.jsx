
import { useState,useEffect } from "react";

export const ShowEmployes = () => {
   
    const [user, setUser] = useState([]);

        useEffect(() => {
            getdata();
        },[])


    const getdata =  async () => {
            const data = await fetch("http://localhost:8080/user")
            .then((d) => 
            d.json());
            setUser(data);
            // console.log(data)
        };
   

  return (
    <div>
      
      <table className="table">
        <thead className="thead">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Marital State</th>
            <th>salary</th>
            <th>Department</th>
           </tr>
        </thead>
        <tbody className="tbody">
   
          <tr className="row">
            <td className="name"> 

                           {
       user.map((item)=><p>{item.name}</p>)
     }
           
            </td>
            <td className="age">
                
                {
       user.map((item)=><p>{item.age}</p>)
     }

                 </td>
            <td className="address">
              
                             {
       user.map((item)=><p>{item.address}</p>)
     }

                 </td>
            <td className="martial_state">
                 
                                   {
       user.map((item)=><p>{item.marital_state}</p>)
     }

                 </td>
            <td className="salary">
                               {
       user.map((item)=><p>{item.salary}</p>)
     }
                 </td>
            <td className="department">
                               {
       user.map((item)=><p>{item.department}</p>)
     }
                 </td>
           
            
          </tr>
        </tbody>
      </table>
 
    </div>
  );
};