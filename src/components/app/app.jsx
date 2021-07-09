import React, { useState, useEffect } from "react";

import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import appStyles from "./App.module.css";


const url = "https://norma.nomoreparties.space/api/ingredients";

function App() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState();

    useEffect(() => {
        fetch(url)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(res.status);
            })
            .then((result) => {
                setItems(result.data);
                setIsLoaded(true);
            })
            .catch((error) => {
                setIsLoaded(true);
                setError(error);
            });
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
