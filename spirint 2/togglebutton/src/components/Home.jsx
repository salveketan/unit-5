import './Navbar.css';

import "./toggel.css"
import { Button } from './tog';
import { useState } from 'react';




export const Home = () => {
    const [theme, setTheme] = useState("dark");
    {console.log(theme)}

    return (
        // <Home>
            <div className="home">
                <div>

                    <h1>My Dashboard</h1>
                    {/* <ToggleSwitch label="Theme"  /> */}
                    <div>
                        {/* <div className="container">
                        {label}{" "}
                        <div className="toggle-switch">

                            <input

                                type="checkbox" className="checkbox"
                                name={label} id={label}
                                onClick={() => {
                                    setTheme(theme === "light" ? "dark" : "light")
                                }} />
                            <label className="label" htmlFor={label}>
                                <span className="inner" />
                                <span className="switch" />
                            </label>

                        </div>

                    </div> */}
                        <Button
                            theme={theme}
                            onClick={() => {
                                setTheme(theme === "light" ? "dark" : "light")
                            }}
                        >
                            theme
                        </Button>
                    </div>
                </div>

            </div>

        // </Home>
        
    )
}