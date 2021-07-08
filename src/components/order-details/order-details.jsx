import React from "react";
import PropTypes from "prop-types";
import Modal from "../modal/modal";
import OrderDetailsStyle from "./order-details.module.css";

import doneImage from "../../images/done.svg";
function OrderDetails(props) {
    if (!props.ingridients) {
        return null;
    }
    return (
        <Modal isOpen={props.isOpen} onClose={props.onClose} title="">
            <div className={OrderDetailsStyle.wrapper}>
                <p className="text text_type_digits-large mt-9">034536</p>
                <p className="text text_type_main-medium mt-8">
                    идентификатор заказа
                </p>
                <img src={doneImage} alt="img" className="mt-15 mb-15" />
                <p className="text text_type_main-default mb-2">
                    Ваш заказ начали готовить
                </p>
                <p
                    className={`${OrderDetailsStyle.wait} text text_type_main-default mb-30`}
                >
                    Дождитесь готовности на орбитальной станции
                </p>
            </div>
        </Modal>
    );
}

OrderDetails.propTypes = {
    ingridients: PropTypes.bool,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
};

export default OrderDetails;
