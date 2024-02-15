import React from "react";

import LaptopSVG from "../assets/laptop.svg"
import {Countdow} from "../components/Countdown.component.tsx";
const Home = () => {
    return (
        <React.Fragment>
           <div className="h-full w-full">
               <img className="md:mt-96 scale-150" src={LaptopSVG} alt=""/>
               <Countdow numarMinute={10}/>
           </div>
        </React.Fragment>
    )
}

export default Home;