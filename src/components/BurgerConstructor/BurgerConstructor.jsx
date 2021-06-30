import React from "react";
import PropTypes from 'prop-types';
import {
    ConstructorElement,
    DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import BurgerConstructorStyles from "./BurgerConstructor.module.css";

function BurgerConstructor(props) {
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
                            key={element.id}
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
            </div>
        </section>
    );
}

BurgerConstructor.propTypes = {
    data: PropTypes.object,
};

export default BurgerConstructor;
