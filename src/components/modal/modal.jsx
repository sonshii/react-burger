import React from "react";
import PropTypes from "prop-types";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalStyle from "./modal.module.css";

function Modal(props) {
    if (!props.isOpen) {
        return null;
    }
    return (
        <ModalOverlay onClose={props.onClose}>
            <div className={ModalStyle.wrapper} onClick={e => e.stopPropagation()}>
                <div className={`${ModalStyle.closeIcon} mt-15 mr-10`}>
                    <p className="text text_type_main-large ml-10">{props.title}</p>
                    <CloseIcon onClick={props.onClose} />
                </div>
                {props.children}
            </div>
        </ModalOverlay>
    );
}
Modal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
};

export default Modal;
