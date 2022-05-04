import "./AllList.css"
import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";


export const AllList = () => {
    const [list, setList] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then(({ data }) => {
                setList(data);
            })
    }, []);
    // const count = list.length;
    // {console.log(list);}
    return (

        <div className="AllProduct">
            {/* <div>{count}</div> */}
            {list.map((e) =>
                <div key={e.id} className="Product">
                    {/* <Link to={`/allfruit/${e.id}`}> */}
                    <Link to={`/allcategory/${e.id}`}>
                        <img src={e.image} alt="" />
                        <p>{e.id}</p>
                        <p>{e.title}</p>
                    </Link>

                    {/* </Link> */}
                </div>

            )}
        </div>
    )
}