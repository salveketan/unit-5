import { Route, Routes } from "react-router-dom"


import { All } from "./All"
import { Category } from "./Category"
import { Jewelery } from "./Jewelery"
import { ProductDetails } from "./ProductDetail"
// import { ProductDetails } from "./ProductDetail"


export const ProductPage = () => {
    return <div className="Productpage">
     <Category />
    
        <Routes>
            <Route path="/allcategory" element={<All/>}></Route>
            <Route path="/jewelery" element={<Jewelery/>}></Route>
            <Route path="/product/:id" element={<ProductDetails></ProductDetails>}></Route>
        </Routes>
            {/* <Route path="/all" element={<All/>}></Route> */}
            {/* <Route path="/allfruit/:id" element={<ProductDetails/>}></Route> */}
        
    </div>
}