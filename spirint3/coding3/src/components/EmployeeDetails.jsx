import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import "./EmployeeList.css"


export const EmployeeDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState(AuthContext);
    const { isAuth } = useContext(AuthContext);

    useEffect(() => {
        axios.get(`http://localhost:8080/employee/${id}`).then(({ data }) => {
            setUser(data)
        })
    }, []);

    if (!isAuth) {
        return <Navigate to={"/login"} />
    }


    return (
        <div className="user_details">
            <img className="user_image" src={user.image} />
            <h4 className="user_name">{user.employee_name}</h4>
            <span className="user_salary">${user.salary}</span>
            <span className="tasks">
                <li className="task">Task: {user.tasks}</li>

            </span>
            Status: <b className="status">{user.status}</b>
            Title: <b className="title">{user.team}</b>
            {/* Show this button only if user is not already terminated (users status is working) */}
            <button className="fire">Fire Employee</button>
            {/* Show this button only if user is not already team lead or terminated */}
            <button className="promote">promote</button>
        </div>
    );
};