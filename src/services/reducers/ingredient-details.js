import { OPEN_INGREDIENT_DETAILS } from '../actions/ingredient-details';

const initialState = {
    ingredientDetails: {},
}

export function ingredientDetailsReducer(state = initialState, action){
    switch(action.type) {
        case OPEN_INGREDIENT_DETAILS: {
            return {ingredientDetails: action.ingredient}
        }
        default: 
            return state;
    }
}