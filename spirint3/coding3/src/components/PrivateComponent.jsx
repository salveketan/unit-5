import { Children, useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext"

export const PrivateComponent = ({Children}) => {
    const { isAuth } = useContext(AuthContext);

    if(!isAuth){
        return <Navigate to="/login" replace={true}></Navigate>
    }
    return Children
}