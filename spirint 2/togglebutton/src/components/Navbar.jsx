
import './Navbar.css';



import { BsFillCalendar3EventFill } from "react-icons/bs"
import { BsFillHddStackFill } from "react-icons/bs"
import { BsFillHouseDoorFill } from "react-icons/bs"
import { BsFillEnvelopeFill } from "react-icons/bs"
import { FiSettings } from "react-icons/fi"
import { HiPlusSm } from "react-icons/hi"

export const Navbar = () => {
    return (

        <div className="Navbar">
          
         <div className='top'> image</div>
         <div className='middle'>
                <BsFillCalendar3EventFill className='icon' />
                <BsFillHddStackFill className='icon' />
                <BsFillHouseDoorFill className='icon' />
                <BsFillEnvelopeFill className='icon' />
                <FiSettings className='icon' />
         </div>
            <div className='bottom'><HiPlusSm className='icon'/></div>
            
        </div>

    )

}