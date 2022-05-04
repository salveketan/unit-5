import "./Category.css"
import { Link } from "react-router-dom"

 

export const Category = () => {
    const category = [
        { title: "ALL CATEGORY", to: "/allcategory" },
        { title: "JEWELERY", to: "/jewelery" },
        { title: "MEN'S CLOTHING", to: "/mensclothing" },
        { title: "WOMEN'S CLOTHING", to: "/womensclothing" },
    ]


    return (
        <div className="Category">
            <div className="Category-link">
                {category.map((e, i) =>

                    <Link key={i} to={e.to} style={{ margin: "5px", color: "#000000" }}>{e.title}</Link>
                )}
            </div>
        </div>
    )
}