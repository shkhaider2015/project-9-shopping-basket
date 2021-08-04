import { combineReducers } from "redux";
import { Data } from "../Data/Data";
import { EActionTypes, IBasketAction, IBasketItem, IProductAction, IProductItem } from "./StateTypes";

const BasketInitialState:IBasketItem[] = [];
const ProductInitialState:IProductItem[] = Data;

const BasketReducer = (state:IBasketItem[] = BasketInitialState, action:IBasketAction) => {
    switch(action.type)
    {
        case EActionTypes.ADDED_ITEM:
            return [action.payload, ...state];
        case EActionTypes.REMOVE_ITEM:
            return state.filter((item:IProductItem) => item.id !== action.payload.id);
        default:
            return state;
    }
}

const ProductReducer = (state:IProductItem[] = ProductInitialState, action:IProductAction) => {
    switch(action.type)
    {
        case EActionTypes.GET_ITEMS:
            return state;
        default:
            return state;
    }
}


const Reducers = combineReducers({
    cart : BasketReducer,
    product : ProductReducer
})

export { Reducers }