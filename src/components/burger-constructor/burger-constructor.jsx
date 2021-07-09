import React, { useState } from "react";
import PropTypes from "prop-types";
import OrderDetails from "../order-details/order-details";
import {
    ConstructorElement,
    DragIcon,
    CurrencyIcon,
    Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import BurgerConstructorStyles from "./burger-constructor.module.css";

function BurgerConstructor(props) {
    const [showModal, setShowModal] = useState(false);
    const filterData = props.data.slice(1, -1);
    return (
        <section >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <div
                    className={`${BurgerConstructorStyles.elementBlock} mt-25 mb-3`}
                >
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={props.data[0].name}
                        price={props.data[0].price}
                        thumbnail={props.data[0].image_mobile}
                    />
                </div>
                <div className={`${BurgerConstructorStyles.main} mb-4`}> 
                    {filterData.map((element) => {
                        return (
                            <div
                                className={`${BurgerConstructorStyles.constructorList} pl-7 mb-4`}
                                key={element._id}
                            >
                                <div
                                    className={BurgerConstructorStyles.dragIcon}
                                >
                                    <DragIcon type="primary" />
                                </div>
                                <div className={BurgerConstructorStyles.width}>
                                    <ConstructorElement
                                        text={element.name}
                                        price={element.price}
                                        thumbnail={element.image_mobile}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className={BurgerConstructorStyles.elementBlock}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={props.data[0].name}
                        price={props.data[0].price}
                        thumbnail={
                            props.data[0].image_mobile
                        }
                    />
                </div>
                <div className={BurgerConstructorStyles.totalPriceBlock}>
                    <div
                        className={`${BurgerConstructorStyles.totalPriceBlock} `}
                    >
                        <p className={`${BurgerConstructorStyles.price} mr-2`}>
                            610
                        </p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <div className="ml-8">
                        <Button
                            type="primary"
                            size="medium"
                            onClick={() => {
                                setShowModal(true);
                            }}
                        >
                            Оформить заказ
                        </Button>
                    </div>
                </div>
            </div>
            <OrderDetails
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                ingridients={true}
            ></OrderDetails>
        </section>
    );
}
BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            image_mobile: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default BurgerConstructor;
