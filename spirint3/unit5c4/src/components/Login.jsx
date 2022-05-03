import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const Login = () => {

  const {handleAuth} = useContext(AuthContext);
  //  {console.log(handleAuth);}
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [pass,setPass] = useState("");
    console.log(pass)
// const handle = (data) => {
//   console.log(data)
//   setText(text.data);
// }
   let a = "";
  if ((text == "admin")&&(pass == "1234")){
      
     a = "/orders" 
   }
   else{
      a = "/NewOrder"
   }

  return (
    <div>
      <input
        onChange={e => setText(e.target.value)}
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input
        onChange={e => setPass(e.target.value)}
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" 
         onClick={() => {
           handleAuth(true);
           navigate(`${a}`,{replace:true});
          //  handle();
         }}
         >Login</button>
    </div>
  );
};
