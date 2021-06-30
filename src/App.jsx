import React from "react";

import AppHeader from "./components/AppHeader/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor"

import data from "./utils/data";
import appStyles from "./App.module.css";

function App() {
    return (
        <div>
            <header>
                <AppHeader />
            </header>
            <main className={appStyles.main}>
                <BurgerIngredients data={data} />
                <BurgerConstructor data={data} />
            </main>
        </div>
    );
}

export default App;
