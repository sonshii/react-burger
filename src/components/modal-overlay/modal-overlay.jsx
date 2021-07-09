import React from 'react';
import PropTypes from "prop-types";
import ModalOverlayStyles from './modal-overlay.module.css';

function ModalOverlay(props){
    return(
        <div className={ModalOverlayStyles.wrapper} onClick={props.onClose}>
            {props.children}
        </div>
    )
}
ModalOverlay.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default ModalOverlay;