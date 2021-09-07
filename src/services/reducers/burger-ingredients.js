import { GET_BURGER_INGREDIENTS_LOADING, GET_BURGER_INGREDIENTS_SUCCESS, GET_BURGER_INGREDIENTS_ERROR } from '../actions/burger-ingredients';

// Исходное состояние
const initialState = {
    allReceivedIngredients: [{
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
    allReceivedIngredientsIsLoaded: false,
    allReceivedIngredientsIsError: false,
    allIngredientsInTheCurrentBurger: [],
    currentIngredient: {},
    createdOrder: {},
}

export function burgerIngredientsReducer(state = initialState, action){
    switch(action.type){
        case GET_BURGER_INGREDIENTS_LOADING: {
            return {
                ...state,
                allReceivedIngredientsIsLoaded: true
            }
        }
        case GET_BURGER_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                allReceivedIngredients: action.payload,
                allReceivedIngredientsIsLoaded: false
            }
        }
        case GET_BURGER_INGREDIENTS_ERROR: {
            return {
                ...state,
                allReceivedIngredientsIsError: false
            }
        }
        default:
            return state

    }
}