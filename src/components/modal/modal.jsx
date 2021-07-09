import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalStyle from "./modal.module.css";

const modalRoot = document.getElementById("react-modals");

function Modal(props) {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                props.onClose();
            }
        };
        window.addEventListener("keydown", handleEsc);
        
        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [props]);

    if (!props.isOpen) {
        return null;
    }
    
    return ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose}>
            <div
                className={ModalStyle.wrapper}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={`${ModalStyle.closeIcon} mt-15 mr-10`}>
                    <p className="text text_type_main-large ml-10">
                        {props.title}
                    </p>
                    <CloseIcon onClick={props.onClose} />
                </div>
                {props.children}
            </div>
        </ModalOverlay>,
        modalRoot
    );
}
Modal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
