import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Logo from "../assets/Logo2.svg";

interface HeaderProps {
  setOpen: (isOpen: boolean) => void;
}
const HeaderMobile: React.FC<HeaderProps> = ({ setOpen }) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = () => {
    setOpen(true);
  };

  let content;
  if (nav) {
    content = (
      <div className="fixed h-screen w-screen p-0 bg-black/95 grid place-items-center items-center z-[98] px-10 py-20 top-0 left-0">
        <a href="#AboutUsM" className="border-b-2 pb-2 w-1/2 border-[#ffc947]">
          <a href="#AboutUsM">
            <button onClick={handleNav}>
              <p className="text-white/90 text-frumos text-nowrap pr-10 ">
                Despre noi
              </p>
            </button>
          </a>
        </a>
        <a
          href="#ChallengesM"
          className="border-b-2 pb-2 w-1/2 border-[#ffc947]"
        >
          <button onClick={handleNav}>
            <p className="text-white/90 text-frumos text-nowrap pr-10 text-left ">
              Probe
            </p>
          </button>
        </a>
        <a
          onClick={handleLinkClick}
          href="#Program"
          className="border-b-2 pb-2 w-1/2 border-[#ffc947]"
        >
          <button onClick={handleNav}>
            <p className="text-white/90 text-frumos text-nowrap pr-10 text-left">
              Program
            </p>
          </button>
        </a>

        <a
          href="#FAQM"
          className="border-b-2 pb-2 w-1/2 border-[#ffc947] "
          onClick={handleLinkClick}
        >
          <button onClick={handleNav}>
            <p className="text-white/90 text-frumos text-nowrap pr-10 text-left">
              FAQ
            </p>
          </button>
        </a>
        <a
          href="#ParteneriM"
          className="border-b-2 pb-2 w-1/2 border-[#ffc947]"
        >
          <button onClick={handleNav}>
            <p className="text-white/90 text-frumos text-nowrap pr-10 text-left">
              Parteneri
            </p>
          </button>
        </a>
        <a href="#ContactM" className="pb-2 w-1/2 border-[#ffc947]">
          <button onClick={handleNav}>
            <p className="text-white/90 text-frumos text-nowrap pr-10 ">
              Contact
            </p>
          </button>
        </a>
      </div>
    );
  }

  return (
    <>
      <div>
        {nav && (
          <IoMdClose
            onClick={handleNav}
            className=" fixed top-8 right-5 z-[99] lg:hidden text-blue-950 outline-4 font-extrabold"
            size={30}
            color="white"
          />
        )}
        <div className="   fixed flex justify-between z-[97] w-full top-0 left-0 px-5 py-4 bg-[#091931] ">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
          {!nav && (
            <AiOutlineMenu
              onClick={handleNav}
              className=" z-[99] lg:hidden text-blue-950 outline-4 font-extrabold"
              size={20}
              color="white"
            />
          )}
        </div>
        {content}
      </div>
    </>
  );
};

export default HeaderMobile;
