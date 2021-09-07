import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import OrderDetailsStyle from "./order-details.module.css";
import fetchOrderDetails from '../../services/actions/order-details';

import doneImage from "../../images/done.svg";
function OrderDetails(props) {

    const orderIds = props.ingredients.map((item)=>{
        return item._id;
    })

    const orderDetails = useSelector(state => state.orderDetailsReducer.orderDetails);
    const orderDetailsLoading = useSelector(state=> state.orderDetailsReducer.orderDetailsLoading);
    const orderDetailsError = useSelector(state=> state.orderDetailsReducer.orderDetailsError);

    console.log(orderDetails.order.number)
    const dispatch = useDispatch();

    useEffect(()=>{
        fetchOrderDetails(dispatch, orderIds);
    }, [dispatch])

    if (orderDetailsError) {
        return <div className={OrderDetailsStyle.wrapper}>Ошибка: {orderDetailsError.message}</div>;
    } else {
        return (
            <div className={OrderDetailsStyle.wrapper}>
                {(orderDetailsLoading) ? (
                    <p className="text text_type_digits-default mt-9">Загрузка...</p>
                ) : (
                    <p className="text text_type_digits-large mt-9">{orderDetails.order.number}</p>
                )}
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
        );
    }
}

OrderDetails.propTypes = {
    ingredients: PropTypes.array.isRequired,
};

export default OrderDetails;
