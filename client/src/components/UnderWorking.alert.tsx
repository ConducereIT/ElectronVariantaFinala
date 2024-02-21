import Popup from 'reactjs-popup';
import React, {useEffect, useState} from "react";

interface UnderWorkingAlertProps {
    isOpen: boolean; // Explicitly define the type of the isOpen prop
}

const UnderWorkingAlert: React.FC<UnderWorkingAlertProps> = ({ isOpen }) => {
    const [open, setOpen] = useState(false);
    const closeModal = () => {
        isOpen = false;
        console.log(isOpen)
        setOpen(false);
    }

    useEffect( () => {
        console.log(isOpen);
        setOpen(isOpen)
    }, [isOpen]);

    return (
        <>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="modal">
                    <a className="close" onClick={closeModal}>&times;</a>
                    <div className="h-96 w-96 bg-black">ceva</div>
                </div>
            </Popup>
        </>
    );
}

export default UnderWorkingAlert;
