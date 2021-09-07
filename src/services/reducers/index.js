import { combineReducers } from 'redux';
import { burgerIngredientsReducer } from './burger-ingredients';
import { currentBurgerIngredientsReducer } from './current-burger-ingredients';
import { ingredientDetailsReducer } from './ingredient-details';
import { orderDetailsReducer } from './order-details';

export const rootReducer = combineReducers({
    burgerIngredientsReducer,
    currentBurgerIngredientsReducer,
    ingredientDetailsReducer,
    orderDetailsReducer,
});