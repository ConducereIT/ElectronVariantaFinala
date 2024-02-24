import Popup from 'reactjs-popup';//
import UnderWorks from "./underworks/UnderWorking.component.tsx";

interface ControlledPopupProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ControlledPopup: React.FC<ControlledPopupProps> = ({ open, setOpen }) => {
    const closeModal = () => setOpen(false);

    return (
        <div>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="modal bg-[#091931] bg-opacity-70 backdrop-blur-md h-screen lg:h-[45rem] lg:w-[80rem] justify-center mx-auto mt-10  rounded-xl ">
                    <a className="h-7 w-7 top-10 relative text-center mt-16 ml-10 flex justify-center rounded-full border-2" onClick={closeModal}><h3 className="text-center text-white">X</h3></a>
                    <UnderWorks />
                </div>
            </Popup>
        </div>
    );
};

export default  ControlledPopup;