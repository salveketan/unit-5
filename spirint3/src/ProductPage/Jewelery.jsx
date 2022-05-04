import axios from "axios";
import { useEffect, useState } from "react"
import "./AllList.css"



export const Jewelery = () => {
    const [jewel,setJewel] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/category/jewelery").then(({data}) => {
            setJewel(data)
        })
    },[])
    return <div className="AllProduct">
        {/* <div>{count}</div> */}
        {jewel.map((e) =>
            <div key={e.id} className="Product">
                {/* <Link to={`/allfruit/${e.id}`}> */}
                <img src={e.image} alt="" />
                <p>{e.id}</p>
                <p>{e.title}</p>

                {/* </Link> */}
            </div>

        )}
    </div>
}