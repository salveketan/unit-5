import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";


export const ProductDetails = () => {
    const { id } = useParams();
    
    const [prod, setProd] = useState([]);



    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(({ data }) => {
                setProd(data);
            });
    }, []);

    // const Image = prod.Image;
    // { console.log(prod.Image)}
    return <>
      
            {/* <img src={Image.img1} alt="" /> */}
       
            
        {/* <img src={product.Image.img1} alt="" /> */}
            <p>{prod.Title}</p>
          
    </>
}