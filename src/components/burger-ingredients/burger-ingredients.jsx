import React from "react";
import PropTypes from 'prop-types';
import IngridientDetails from "../ingredient-details/ingredient-details";
import {
    Tab,
    CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredientsStyles from "./burger-ingredients.module.css";

function BurgerIngredients(props) {
    const [showModal, setShowModal] = React.useState(false);
    const [ingridients, setIngridients] = React.useState();
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

    const openIngridientsDetails = (bun) => {
        setIngridients(bun);
        setShowModal(true);
    }

    return (
        <section className={`${BurgerIngredientsStyles.main} mr-10`}>
            <p className={`text text_type_main-large mt-8 mb-5`}>
                Соберите бургер
            </p>
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
            <p
                className={`text text_type_main-medium mt-8 mb-6`}
            >
                Булки
            </p>
            <ul className={`${BurgerIngredientsStyles.cardList}`}>
                {bun.map((bun) => (
                    <li key={bun._id} className={`${BurgerIngredientsStyles.card} mt-6 mr-3 mb-10 ml-4`} onClick={()=>openIngridientsDetails(bun)}>
                        <img src={bun.image} alt="img" className="pt-6 pr-4 pb-1 pl-4"/>
                        <div
                            className={`${BurgerIngredientsStyles.price_block}`}
                        >
                            <p className={`text text_type_digits-default mr-2`}>{bun.price}</p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <p className="text text_type_main-default">{bun.name}</p>
                    </li>
                ))}
            </ul>

            <p
                className={`text text_type_main-medium mt-8 mb-6`}
            >
                Соусы
            </p>
            <ul className={`${BurgerIngredientsStyles.cardList}`}>
                {main.map((bun) => (
                    <li key={bun._id} className={BurgerIngredientsStyles.card} onClick={()=>openIngridientsDetails(bun)}>
                        <img src={bun.image} alt="img" className="pt-6 pr-4 pb-1 pl-4"/>
                        <div
                            className={`${BurgerIngredientsStyles.price_block}`}
                        >
                            <p className={`text text_type_digits-default mr-2`}>{bun.price}</p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <p className="text text_type_main-default">{bun.name}</p>
                    </li>
                ))}
            </ul>

            <p
                className={`text text_type_main-medium mt-8 mb-6`}
            >
                Начинки
            </p>
            <ul className={`${BurgerIngredientsStyles.cardList}`}>
                {sauce.map((bun) => (
                    <li key={bun._id} className={BurgerIngredientsStyles.card} onClick={()=>openIngridientsDetails(bun)}>
                        <img src={bun.image} alt="img" className="pt-6 pr-4 pb-1 pl-4"/>
                        <div
                            className={`${BurgerIngredientsStyles.price_block}`}
                        >
                            <p className={`text text_type_digits-default mr-2`}>{bun.price}</p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <p className="text text_type_main-default">{bun.name}</p>
                    </li>
                ))}
            </ul>
            <IngridientDetails ingridients={ingridients} isOpen={showModal} onClose={() => setShowModal(false)}/>
        </section>
    );
}

BurgerIngredients.propTypes = {
    data: PropTypes.array,
};

export default BurgerIngredients;
