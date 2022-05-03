import { children,useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

// /orders and /neworder are protected routes
export const ProtectedRoute = ({ children }) => {
    const {isAuth} =useContext(AuthContext);

    if(!isAuth){
        return <Navigate to="/login" replace={true}></Navigate>
    }
    else if(isAuth ==="admin"){
        return <Navigate to="/orders" replace={true}></Navigate>
    }
    return children;
};
