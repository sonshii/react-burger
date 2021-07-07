import React from "react";
import Modal from "../hoc/Modal";
import OrderDetailsStyle from "./OrderDetails.module.css";

function OrderDetails(props) {
    const modal = props.show ? (
        <Modal>
            <div className={OrderDetailsStyle.wrapper}>
                <p>034536</p>
                <p>Идентификатор заказа</p>
                <img src="../../images/done.svg" />
                <p>Ваш заказ начали готовить</p>
                <p>Дождитесь готовности на орбитальной станции</p>
            </div>
        </Modal>
    ) : null;
    return <div>{modal}</div>;
}

export default OrderDetails;
