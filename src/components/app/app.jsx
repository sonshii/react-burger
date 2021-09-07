import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import fetchBurgerIngredients from '../../services/actions/burger-ingredients'
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

import appStyles from "./app.module.css";

function App() {
    const allBurgerIngredients = useSelector(state => state.burgerIngredientsReducer.allReceivedIngredients);
    const allReceivedIngredientsIsLoaded = useSelector(state => state.burgerIngredientsReducer.allReceivedIngredientsIsLoaded);
    const allReceivedIngredientsIsError = useSelector(state => state.burgerIngredientsReducer.allReceivedIngredientsIsError);
    
    const dispatch = useDispatch();

    useEffect(()=>{
        fetchBurgerIngredients(dispatch);
    }, [dispatch])


    if (allReceivedIngredientsIsError) {
        return <div>Ошибка: {allReceivedIngredientsIsError.message}</div>;
    } else if (allReceivedIngredientsIsLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div>
                <header>
                    <AppHeader />
                </header>
                {}
                <main className={appStyles.main}>
                    <BurgerIngredients data={allBurgerIngredients} />
                    <BurgerConstructor data={allBurgerIngredients} />
                </main>
            </div>
        );
    }
}

export default App;
