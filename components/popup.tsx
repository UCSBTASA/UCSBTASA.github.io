"use client"
import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }

const PopUp = ({isOpen, onClose, children}: ModalProps) =>{
    if(!isOpen){
        return null;
    }
    return(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content bg-white p-8 rounded-lg" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    Close
                </button>
                {children}
            </div>
        </div>
    );
};

export default PopUp;