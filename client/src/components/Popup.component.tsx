import {useState} from 'react';
import Popup from 'reactjs-popup';//
import UnderWorks from "./underworks/UnderWorking.component.tsx";
const ControlledPopup = () => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    return (<div>
        <button type="button" className="button" onClick={() => setOpen(o => !o)}> Controlled Popup</button>
        <Popup  open={open} closeOnDocumentClick onClose={closeModal}>
            <div className="modal bg-black bg-opacity-70 backdrop-blur-md"><a className="close" onClick={closeModal}>            &times;          </a>
                <UnderWorks />
            </div>
        </Popup></div>);
};

export default  ControlledPopup;