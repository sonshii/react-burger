export const ADD_CURRENT_BURGER_INGREDIENTS = 'ADD_CURRENT_BURGER_INGREDIENTS';
export const DELETE_CURRENT_BURGER_INGREDIENTS = 'DELETE_CURRENT_BURGER_INGREDIENTS';


export const addCurrentBurgerIngredientsReducer = (ingredient) => {
    return {
        type: ADD_CURRENT_BURGER_INGREDIENTS,
        ingredient,
    }
};

export const deleteCurrentBurgerIngredientsReducer = (ingredient) => {
    return {
        type: DELETE_CURRENT_BURGER_INGREDIENTS,
        ingredient,
    }
};