import { Link } from "react-router-dom"
export const Navbar = () =>{
    const nav =[
        { title: "Home", to: "/" },
        { title: "Employee List", to: "/employeelist" },
        { title: "Admin", to: "/admin" },
        { title: "Logout", to: "/logout" },
    ]

    return (
        <div>
            
            {nav.map((e, i) =>
                <Link key={i} to={e.to} style={{ margin: "5px", color: "rgb(255,0,109)" }}>{e.title}</Link>
            )}

        </div>
    )
}