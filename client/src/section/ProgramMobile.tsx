import ProgramSVG_Mobile from "../assets/Program_phone.svg";

const ProgramMobile = () => {
  return (
    <div className="w-full h-auto">
      <h1 className="text-frumos font-bold text-white text-[2rem] lg:text-[3rem] mb-5 mt-12 pb-6">
        Program
      </h1>
        <img src={ProgramSVG_Mobile} alt="program"/>
    </div>
  );
};

export default ProgramMobile;
