import React, {Fragment} from "react";

import LaptopSVG from "../assets/laptop.svg"
import {Countdow} from "../components/Countdown.component.tsx";
import {MainText} from "../components/MainText.component.tsx";
import Header from "../components/Header.component.tsx";
import BlueBlur from "../assets/Blur.svg"
import PurpleBlur from "../assets/PurpleBlur.svg"
import BlurAlbastru3 from "../assets/BLurAlbastru3.svg"
import ChallengesText from "../assets/Challenges.svg"
import BlurAlabstru4 from "../assets/bluralabstru4.svg"
import BlurPurple5 from "../assets/BlurPurple5.svg"
import BlurAlabstru6 from "../assets/BlurAlbastru6.svg"
import Proba1 from "../assets/Proba1.svg"
import Proba2 from "../assets/Proba2.svg"
import Proba3 from "../assets/Proba3.svg"
import Premii from "../assets/Premii.svg"

const Home = () => {
    return (
        <React.Fragment>
            <Header/>
            <img className="absolute -left-96 -ml-28 -top-80 opacity-95 -z-10" src={BlueBlur} alt=""/>
            <img className="absolute scale-125 left-64 rounded-full top-96 opacity-95 -z-10" src={PurpleBlur} alt=""/>
            <img className="absolute right-0 translate-y-44  opacity-96 -z-10" src={BlurAlbastru3} alt=""/>
            <div className="mt-30">
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





            // sectiune 2
            <div id="Challenges" className="mt-96">
                <img src={BlurAlabstru4} className="absolute -mt-96 -translate-y-44 -ml-96 -z-10 opacity-85"/>
                <img src={BlurPurple5}
                     className="absolute -mt-72 -translate-y-44 right-0 mr-80 -translate-x-10 -z-10 opacity-85 scale-125"/>
                <img src={BlurAlabstru6}
                     className="absolute mt-20 scale-125 mr-28 -translate-y-44 right-0  translate-x-10 -z-10 opacity-85"/>
                <img src={ChallengesText} className="scale-125 absolute left-1/2 transform -translate-x-1/2 -mt-36"/>
                <div className="flex justify-between h-screen">
                    <div className="w-[30%] h-[30%] bg-white flex flex-col justify-center items-center">
                        <img className="mb-4 scale-[110%]" src={Proba1} alt=""/>
                        <div className="flex mt-5 -ml-5">
                            <button
                                className="bg-[#EFEFF0] rounded-md text-black w-12 mr-2 flex items-center justify-center h-12">
                                <span>
                                    <span className="text-black">{"🛈"}</span>
                                </span>
                            </button>
                            <button
                                className="bg-[#FFC947] rounded-md text-black w-60 flex items-center justify-center h-12">
                                <span className="mr-2 scale-100 font-bold">Inscrie-te aici</span>
                                <span
                                    className="inline-block bg-black text-white rounded-full h-6 w-6 flex justify-center items-center ml-5"> <Fragment></Fragment>
                                    <span className="text-white">{">"}</span>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="w-[30%] h-[30%] bg-white flex flex-col justify-center items-center">
                        <img className="mb-4 scale-[110%]" src={Proba2} alt=""/>
                        <div className="flex mt-5 -ml-5">
                            <button
                                className="bg-[#EFEFF0] rounded-md text-black w-12 mr-2 flex items-center justify-center h-12">
                                <span>
                                    <span className="text-black">{"🛈"}</span>
                                </span>
                            </button>
                            <button
                                className="bg-[#FFC947] rounded-md text-black w-60 flex items-center justify-center h-12">
                                <span className="mr-2 scale-100 font-bold">Inscrie-te aici</span>
                                <span
                                    className="inline-block bg-black text-white rounded-full h-6 w-6 flex justify-center items-center ml-5"> <Fragment></Fragment>
                                    <span className="text-white">{">"}</span>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="w-[30%] h-[30%] bg-white flex flex-col justify-center items-center">
                        <img className="mb-4 scale-[110%]" src={Proba3} alt=""/>
                        <div className="flex mt-5 -ml-5">
                            <button
                                className="bg-[#EFEFF0] rounded-md text-black w-12 mr-2 flex items-center justify-center h-12">
                                <span>
                                    <span className="text-black">{"🛈"}</span>
                                </span>
                            </button>
                            <button
                                className="bg-[#FFC947] rounded-md text-black w-60 flex items-center justify-center h-12">
                                <span className="mr-2 scale-100 font-bold">Inscrie-te aici</span>
                                <span
                                    className="inline-block bg-black text-white rounded-full h-6 w-6 flex justify-center items-center ml-5"> <Fragment></Fragment>
                                    <span className="text-white">{">"}</span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between h-screen -mt-96 -translate-y-60">
                    <img src={Premii} className="w-[30%] scale-[200%] -mt-96" alt=""/>
                    <img src={Premii} className="w-[30%] scale-[200%] -mt-96 ml-32" alt=""/>
                    <img src={Premii} className="w-[30%] scale-[200%] -mt-96 ml-44" alt=""/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;