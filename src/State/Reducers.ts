import { combineReducers } from "redux";
import { EActionTypes, IAction, IProductItem } from "./StateTypes";


const ProductReducer = (state:IProductItem[], action:IAction) => {
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

const Reducers = combineReducers({
    items : ProductReducer,
})

export { Reducers }