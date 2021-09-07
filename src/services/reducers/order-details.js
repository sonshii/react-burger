import { GET_ORDER_DETAILS_LOADING, GET_ORDER_DETAILS_SUCCESS, GET_ORDER_DETAILS_ERROR } from '../actions/order-details';

const initialState = {
    orderDetails: {
        name: '',
        order: {
            number: ''
        },
        success: false 
    },
    orderDetailsLoading: false,
    orderDetailsError: false,
}

export function orderDetailsReducer(state = initialState, action){
    switch(action.type){
        case GET_ORDER_DETAILS_LOADING: {
            return {
                ...state,
                orderDetailsLoading: true
            }
        }
        case GET_ORDER_DETAILS_SUCCESS: {
            return {
                ...state,
                orderDetails: action.payload,
                orderDetailsLoading: false
            }
        }
        case GET_ORDER_DETAILS_ERROR: {
            return {
                ...state,
                orderDetailsError: true
            }
        }
        default:
            return state
    }
}