export const GET_ORDER_DETAILS_LOADING = 'GET_ORDER_DETAILS_LOADING';
export const GET_ORDER_DETAILS_SUCCESS = 'GET_ORDER_DETAILS_SUCCESS';
export const GET_ORDER_DETAILS_ERROR = 'GET_ORDER_DETAILS_ERROR';

const url = "https://norma.nomoreparties.space/api/orders";

const fetchPostsRequest = ({
    type: "GET_ORDER_DETAILS_LOADING"
  });
  
const fetchPostsSuccess = (payload) => ({
    type: "GET_ORDER_DETAILS_SUCCESS",
    payload: payload,
});
  
const fetchPostsError = ({
    type: "GET_ORDER_DETAILS_ERROR"
});

export default function fetchOrderDetails(dispatch, ingredients) {
    dispatch(fetchPostsRequest);
    fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"ingredients": ingredients})
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(res.status);
        })
        .then((result) => {
            console.log('result', result)
            dispatch(fetchPostsSuccess(result));
        })
        .catch((error) => {
            dispatch(fetchPostsError);
        });
}