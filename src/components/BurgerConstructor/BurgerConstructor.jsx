import React, { useState } from "react";
import PropTypes from "prop-types";
import OrderDetails from "../OrderDetails/OrderDetails";
import {
    ConstructorElement,
    DragIcon,
    CurrencyIcon,
    Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import BurgerConstructorStyles from "./BurgerConstructor.module.css";

function BurgerConstructor(props) {
    const [showModal, setShowModal] = useState(false);

    const filterData = props.data.slice(1, -1);
    return (
        <section className={BurgerConstructorStyles.main}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                }}
            >
                <div
                    className={`${BurgerConstructorStyles.elementBlock} mt-25`}
                >
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={props.data[0].name}
                        price={props.data[0].price}
                        thumbnail={props.data[0].image_mobile}
                    />
                </div>

                {filterData.map((element) => {
                    return (
                        <div
                            className={`${BurgerConstructorStyles.constructorList} pl-7`}
                            key={element._id}
                        >
                            <div className={BurgerConstructorStyles.dragIcon}>
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
                <div className={BurgerConstructorStyles.elementBlock}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={props.data[props.data.length - 1].name}
                        price={props.data[props.data.length - 1].price}
                        thumbnail={
                            props.data[props.data.length - 1].image_mobile
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
                            onClick={()=>{setShowModal(true)}}
                        >
                            Оформить заказ
                        </Button>
                    </div>
                </div>
            </div>
            <OrderDetails show={showModal}></OrderDetails>
        </section>
    );
}

BurgerConstructor.propTypes = {
    data: PropTypes.array,
};

export default BurgerConstructor;
