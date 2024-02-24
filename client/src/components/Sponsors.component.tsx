import OrangeLogo from "../assets/OrangeLogo.svg";
import Gold from "../assets/Gold.svg";
import Silver from "../assets/Silver.svg";
import Bronze from "../assets/Bronze.svg";
import LSE from "../assets/LogoWhite.webp";
import ETTI from "../assets/ETTI-LOGO-A-1 1.svg";
import UPB from "../assets/politehnica 1.svg";
import CyberEdu from "../assets/cyberEDU-logo-alternative 1.svg";
export default function Sponsors() {
  return (
    <>
      <div className="mt-10 lg:mt-24">
        <h3 className="text-frumos text-1xl h-20 flex text-xl justify-center items-center text-white">
          Powered by
          <img className="ml-3 lg:ml-6 lg:scale-125" src={OrangeLogo} alt="" />
        </h3>
        <div className=" grid lg:grid-cols-6 lg:mx-24 items-center place-items-center gap-2 lg:gap-0">
          <img src={Gold} alt="Gold" className=" lg:col-span-2 scale-75" />
          <img src={Silver} alt="Silver" className=" lg:col-span-2 scale-75" />
          <img src={Bronze} alt="Bronze" className="lg:col-span-2 scale-75" />
          <div className="lg:hidden mt-10">
            <p className="text-frumos text-white">
              Eveniment organizat cu sprijinul
            </p>
            <div className="flex justify-between mt-5">
              <img src={LSE} alt="LSE" />
              <img src={ETTI} alt="Etti" />
              <img src={UPB} alt="Etti" />
              <img src={CyberEdu} alt="Etti" />
            </div>
          </div>
        </div>
        <div className="hidden lg:block mt-10">
          <div className="grid grid-cols-7 mt-5 mx-24">
            <p className="text-frumos col-span-3 text-white">
              Eveniment organizat cu sprijinul
            </p>
            <img src={LSE} alt="LSE" />
            <img src={ETTI} alt="Etti" />
            <img src={UPB} alt="Etti" className="scale-125" />
            <img src={CyberEdu} alt="Etti" />
          </div>
        </div>
      </div>
    </>
  );
}
