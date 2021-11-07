import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

function Modal({children, setOpenModal}){

    return ReactDOM.createPortal(
        <div className="contenedor-t">
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export {Modal}