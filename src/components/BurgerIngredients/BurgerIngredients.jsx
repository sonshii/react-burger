import React from "react";
import {
    Tab,
    CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import AppMainStyles from "./AppMain.module.css";

function BurgerIngredients(props) {
    const [current, setCurrent] = React.useState("one");
    const bun = props.data.filter((bun) => {
        return bun.type === "bun";
    });
    const main = props.data.filter((main) => {
        return main.type === "main";
    });
    const sauce = props.data.filter((sauce) => {
        return sauce.type === "sauce";
    });
    return (
        <div className={`${AppMainStyles.main} mr-10`}>
            <h1 className={`${AppMainStyles.mainTitle} mt-8 mb-5`}>
                Соберите бургер
            </h1>
            <div style={{ display: "flex" }}>
                <Tab
                    value="one"
                    active={current === "one"}
                    onClick={setCurrent}
                >
                    Булки
                </Tab>
                <Tab
                    value="two"
                    active={current === "two"}
                    onClick={setCurrent}
                >
                    Соусы
                </Tab>
                <Tab
                    value="three"
                    active={current === "three"}
                    onClick={setCurrent}
                >
                    Начинки
                </Tab>
            </div>
            <h2 className={`${AppMainStyles.secondaryTitle} mt-8 mb-6`}>Булки</h2>
            <div className={`${AppMainStyles.cardList}`}>
                {bun.map((bun) => (
                    <div key={bun._id} className={AppMainStyles.card}>
                        <img src={bun.image}></img>
                        <div className={`${AppMainStyles.price_block}`}>
                            <p className={`mr-2`}>{bun.price}</p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <p>{bun.name}</p>
                    </div>
                ))}
            </div>

            <h2 className={`${AppMainStyles.secondaryTitle} mt-8 mb-6`}>Соусы</h2>
            <div className={`${AppMainStyles.cardList}`}>
                {main.map((bun) => (
                    <div key={bun._id} className={AppMainStyles.card}>
                        <img src={bun.image}></img>
                        <div className={`${AppMainStyles.price_block}`}>
                            <p className={`mr-2`}>{bun.price}</p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <p>{bun.name}</p>
                    </div>
                ))}
            </div>

            <h2 className={`${AppMainStyles.secondaryTitle} mt-8 mb-6`}>Начинки</h2>
            <div className={`${AppMainStyles.cardList}`}>
                {sauce.map((bun) => (
                    <div key={bun._id} className={AppMainStyles.card}>
                        <img src={bun.image}></img>
                        <div className={`${AppMainStyles.price_block}`}>
                            <p className={`mr-2`}>{bun.price}</p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <p>{bun.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BurgerIngredients;
