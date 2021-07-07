import React, { useState, useEffect } from "react";

import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

import appStyles from "./App.module.css";

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://norma.nomoreparties.space/api/ingredients")
            .then((res) => res.json())
            .then(
                (result) => {
                    setItems(result.data);
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);
    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div>
                <header>
                    <AppHeader />
                </header>
                {}
                <main className={appStyles.main}>
                    <BurgerIngredients data={items} />
                    <BurgerConstructor data={items} />
                </main>
            </div>
        );
    }
}

export default App;
