export const GET_BURGER_INGREDIENTS_LOADING = 'GET_BURGER_INGREDIENTS_LOADING';
export const GET_BURGER_INGREDIENTS_SUCCESS = 'GET_BURGER_INGREDIENTS_SUCCESS';
export const GET_BURGER_INGREDIENTS_ERROR = 'GET_BURGER_INGREDIENTS_ERROR';

const url = "https://norma.nomoreparties.space/api/ingredients";

const fetchPostsRequest = ({
    type: "GET_BURGER_INGREDIENTS_LOADING"
  });
  
const fetchPostsSuccess = (payload) => ({
    type: "GET_BURGER_INGREDIENTS_SUCCESS",
    payload: payload,
});
  
const fetchPostsError = ({
    type: "GET_BURGER_INGREDIENTS_ERROR"
});

export default function fetchBurgerIngredients(dispatch) {
    dispatch(fetchPostsRequest);
    fetch(url)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res.status);
        })
        .then((result) => {
            dispatch(fetchPostsSuccess(result.data));
        })
        .catch((error) => {
            dispatch(fetchPostsError);
        });
}