import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { store } from "../Redux/store";

export const Login = () => {
  const {handelAuth} =useContext(AuthContext)
  const navigate = useNavigate();
    // const user = useSelector(store => store.user.user);
    // const dispatch =useDispatch();

    // const [text,setText] =  useState();
     
    // const handle = () => {
    //   const payload ={
    //     username: text,
    //     pass: Number,
    //   };
    //   fetch("http://localhost:8080/users",{
    //     body: JSON.stringify(payload),
    //     headers:{
    //       "content-type" : "application/json",
    //     },
    //     method:"POST"
    //   })
    //   setText(text);
    // };
    // console.log(setText)


  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" 
        onClick={() => {
       handelAuth(true);
          navigate("/",{replace: true});
          
        }}
        >Login</button>
    </div>
  );
};
