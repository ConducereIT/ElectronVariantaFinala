import React from "react";

import LaptopSVG from "../assets/laptop.svg"
import {Countdow} from "../components/Countdown.component.tsx";
import {MainText} from "../components/MainText.component.tsx";
import Header from "../components/Header.component.tsx";
import BlueBlur from "../assets/Blur.svg"
import PurpleBlur from "../assets/PurpleBlur.svg"
import BlurAlbastru3 from "../assets/BLurAlbastru3.svg"

// Sections
import {Challenges} from "../components/section/Challenges.tsx";
import {JuriuSection} from "../components/section/Juriu.component.tsx";
import Footer from "../components/section/Footer.component.tsx";

const Home = () => {
    return (
        <React.Fragment>
            <Header/>
            <img id="AboutUs" className="absolute -left-96 -ml-28 -top-80 opacity-95 -z-10" src={BlueBlur} alt=""/>
            <img className="absolute scale-125 left-64 rounded-full top-96 opacity-95 -z-10" src={PurpleBlur} alt=""/>
            <img className="absolute right-0 translate-y-44  opacity-96 -z-10" src={BlurAlbastru3} alt=""/>
            <div  className="mt-30">
                <div className="h-96 mt-40 mb-20 z-10">
                    <MainText/>
                    <button
                        className="bg-[#FFC947] rounded-md  -mt-2 mb-10 text-black w-60 flex items-center absolute mt-10 h-12 left-1/2 transform -translate-x-1/2">
                        <span className="mr-2 scale-125 absolute left-10 font-bold">Inscrie-te aici</span>
                        <div className="absolute right-2.5">
                            <span
                                className="inline-block   bg-black text-white rounded-full h-6 w-6 flex justify-center items-center">
                            <span className="text-white  ">{">"}</span>
                        </span>
                        </div>

                    </button>
                </div>
                <div className="h-full w-full mt-60">
                    <div className="absolute z-10 left-[30%] right-[30%]"><Countdow numarMinute={10}/></div>
                    <img className="md:mt-10 scale-150" src={LaptopSVG} alt=""/>
                </div>
            </div>

            <div id="" className="mt-96">
                <Challenges />
            </div>

            <div id="Juriu" className="bg-black mt-3 h-screen mt-5  w-auto" >
                <JuriuSection />
            </div>

            <div className="mt-3 w-[100%] bg-white  h-72 absolute left-0">
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Home;