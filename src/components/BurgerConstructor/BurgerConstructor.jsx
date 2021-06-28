import React from "react";
import {
    ConstructorElement,
    DragIcon,
    Box
} from "@ya.praktikum/react-developer-burger-ui-components";

import BurgerConstructorStyles from "./BurgerConstructor.module.css";

function BurgerConstructor(props) {
    return (
        <div className={BurgerConstructorStyles.main}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                }}
            >
                <div className="ml-14">
                    <ConstructorElement 
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={props.data[0].image_mobile}
                    />
                </div>
                <div className={BurgerConstructorStyles.constructorList}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                        text="Краторная булка N-200i (верх)"
                        price={50}
                        thumbnail={props.data.image_mobile}
                    />
                </div>
                <div className={BurgerConstructorStyles.constructorList}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail={props.data.image_mobile}
                    />
                </div>
            </div>
        </div>
    );
}
export default BurgerConstructor;
