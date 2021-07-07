import React from "react";
import ReactDOM from 'react-dom';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalStyle from "./Modal.module.css";

function Modal(props) {
    const el = document.createElement('div');
    return(
        <div className={ModalStyle.wrapper}>
            {props.children}
        </div>
    )
    // return ReactDOM.createPortal(
    //     props.children,
    //     el
    // );
}

export default Modal;