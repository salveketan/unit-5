import { AllList } from "./AllList"
import "./All.css"
import { Footer } from "../Footer/Footer"


export const All = () => {
    return <div className="AllFruits">
        <div className="Shop-loop-head"> <span> HOME => ALL CATEGORY</span></div>
       <AllList/>
         <Footer/>
    </div>
}