import { useState } from "react";


export const AddEmployes = () => {
  
    const [formData,setFormData] = useState({
        name:"",
        age:"",
        address:"",
        department:"",
        salary:"",
        marital_state:"",
  });
 

   const handleChange = (e) =>{
    //    console.log(e.target.name);
     const {name,value} = e.target

      setFormData({
          ...formData, [name]: value,
      })
   };
   
   const handleSubmit = (e) => {
       e.preventDefault();
       

        fetch("http://localhost:8080/user",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(formData),
        })
        // console.log(formData)
  
     }
      

  return (
    <form className="addemploye" onSubmit={handleSubmit}>
      <div>
        Name:{" "}
        <input
          onChange={handleChange}
          type="text"
          name="name"
          className="name"
          placeholder="enter name"
          value={formData.name}
        />
      </div>
       <div>
        Age{" "}
        <input
          onChange={handleChange}
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
          value={formData.age}
        />
      </div>
      <div>
        Address:{" "}
        <input
          onChange={handleChange}
          type="text"
          name="address"
          className="address"
          placeholder="enter address"
          value={formData.address}
        />
      </div>
      
      <div>
        Marital State: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Married
          <input
            onChange={handleChange}
            name="marital_state"
            className="male"
            type="radio"
            value={"married"}
          />{" "}
          Unmarried{" "}
          <input
            onChange={handleChange}
            name="marital_state"
            className="female"
            type="radio"
            value={"unmarried"}
          />
        </div>
      </div>
     
      <div>
        Salary:{" "}
        <input
          onChange={handleChange}
          type="number"
          name="salary"
          className="twelth_score"
          placeholder="enter salary"
          value={formData.salary}
        />{" "}
      </div>
      <div>
        <select
        onChange={handleChange}
          value={formData.department} 
          name="department"
          className="preferred_branch"
         
        >
          <option value="Department">Department</option>
          <option value="Production">Production</option>
          <option value="Maintainence">Maintainence</option>
          <option value="Quality">Quality</option>
          <option value="Account">Account</option>
          <option value="HR">HR</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" />
     
    </form>
  );
};