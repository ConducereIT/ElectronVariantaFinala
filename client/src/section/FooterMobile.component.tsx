import { CiInstagram, CiLinkedin } from "react-icons/ci";
import FooterLogo from "../assets/FooterLogo.svg";
import { IoLogoFacebook } from "react-icons/io";

const FooterMobile = () => {
  return (
    <>
      <footer className="  h-80 -mb-12 -mx-8 mt-12 bg-black">
        <div className=" flex justify-center flex-col items-center pt-4">
          <img src={FooterLogo} alt="footer-logo" className="scale-[70%]" />
          <p className="text-frumos pt-4 text-xs">
            Bd. Iuliu Maniu 1-3, București 061071
          </p>
          <p className="text-frumos pt-4 text-xs">lse.electron@gmail.com</p>
          <p className="text-frumos pt-4 text-xs">Terms and Conditions</p>
          <p className="text-frumos py-4 text-xs">Privacy Policy</p>
          <div className="flex justify-between gap-10 ">
            <a
              className=" border p-2 rounded-lg"
              href="https://www.instagram.com/electron.lse"
              target="_blank"
            >
              <CiInstagram size={20} className="text-white" />
            </a>
            <a
              className=" border p-2 rounded-lg "
              href="https://www.facebook.com/electronbylse"
              target="_blank"
            >
              <IoLogoFacebook size={20} className="text-white" />
            </a>
            <a
              className=" border p-2 rounded-lg"
              href="https://www.linkedin.com/company/electronlse/"
              target="_blank"
            >
              <CiLinkedin size={20} className="text-white" />
            </a>
          </div>
          <p className=" text-xs text-frumos pt-4">
            {" "}
            Copyright 2024 | All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default FooterMobile;
