import React from "react";
import PropTypes from 'prop-types';
import {
    Tab,
    CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsStyles from "./BurgerIngredients.module.css";

function BurgerIngredients(props) {
    const [current, setCurrent] = React.useState("one");
    console.log(props)
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
        <section className={`${BurgerIngredientsStyles.main} mr-10`}>
            <h1 className={`${BurgerIngredientsStyles.mainTitle} mt-8 mb-5`}>
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
            <h2
                className={`${BurgerIngredientsStyles.secondaryTitle} mt-8 mb-6`}
            >
                Булки
            </h2>
            <ul className={`${BurgerIngredientsStyles.cardList}`}>
                {bun.map((bun) => (
                    <li key={bun._id} className={BurgerIngredientsStyles.card}>
                        <img src={bun.image} alt="img"></img>
                        <div
                            className={`${BurgerIngredientsStyles.price_block}`}
                        >
                            <p className={`mr-2`}>{bun.price}</p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <p className={BurgerIngredientsStyles.name}>{bun.name}</p>
                    </li>
                ))}
            </ul>

            <h2
                className={`${BurgerIngredientsStyles.secondaryTitle} mt-8 mb-6`}
            >
                Соусы
            </h2>
            <ul className={`${BurgerIngredientsStyles.cardList}`}>
                {main.map((bun) => (
                    <li key={bun._id} className={BurgerIngredientsStyles.card}>
                        <img src={bun.image} alt="img"></img>
                        <div
                            className={`${BurgerIngredientsStyles.price_block}`}
                        >
                            <p className={`mr-2`}>{bun.price}</p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <p>{bun.name}</p>
                    </li>
                ))}
            </ul>

            <h2
                className={`${BurgerIngredientsStyles.secondaryTitle} mt-8 mb-6`}
            >
                Начинки
            </h2>
            <ul className={`${BurgerIngredientsStyles.cardList}`}>
                {sauce.map((bun) => (
                    <li key={bun._id} className={BurgerIngredientsStyles.card}>
                        <img src={bun.image} alt="img"></img>
                        <div
                            className={`${BurgerIngredientsStyles.price_block}`}
                        >
                            <p className={`mr-2`}>{bun.price}</p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <p>{bun.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}

BurgerIngredients.propTypes = {
    data: PropTypes.array,
};

export default BurgerIngredients;
