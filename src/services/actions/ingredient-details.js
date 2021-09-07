export const OPEN_INGREDIENT_DETAILS = 'INGREDIENT_DETAILS';


export const setIngredientDetails = (ingredient) => {
    return {
        type: OPEN_INGREDIENT_DETAILS,
        ingredient,
    }
};
