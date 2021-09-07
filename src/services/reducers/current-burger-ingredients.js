import {
    ADD_CURRENT_BURGER_INGREDIENTS,
    DELETE_CURRENT_BURGER_INGREDIENTS,
} from '../actions/current-burger-ingredients';

const initialState = {
    allIngredientsInTheCurrentBurger: [{
        _id: '',
        name: '',
        type: '',
        proteins: '',
        fat: '',
        carbohydrates: '',
        calories: '',
        price: '',
        image: '',
        image_mobile: '',
        image_large: ''
    }],
}


export function currentBurgerIngredientsReducer (state = initialState, action){
    switch (action.type){
        case ADD_CURRENT_BURGER_INGREDIENTS: {
            return [
                ...state,
                action.ingredient
            ]
        }
        case DELETE_CURRENT_BURGER_INGREDIENTS: {
            return state.allIngredientsInTheCurrentBurger.filter((item) => {
                return item._id !== action.ingredient._id
            });
        }
        default: 
            return state;
    }
}